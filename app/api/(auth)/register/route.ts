import crypto from 'node:crypto';
import bcrypt from 'bcrypt';
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { createSession } from '../../../../database/sessions';
import { createUser, getUserByUsername } from '../../../../database/users';
import { createSerializedRegisterSessionTokenCookie } from '../../../utils/cookies';

// define type of user
const userSchema = z.object({
  username: z.string(),
  password: z.string(),
});

export type RegisterResponseBodyPost =
  | { errors: { message: string }[] }
  | { user: { username: string } };

export async function POST(
  request: NextRequest,
): Promise<NextResponse<RegisterResponseBodyPost>> {
  // 1 validate data
  const body = await request.json();

  const result = userSchema.safeParse(body);

  if (!result.success) {
    return NextResponse.json(
      {
        errors: result.error.issues,
      },
      { status: 400 },
    );
  }

  // if string is empty - no username and/or pw
  if (!result.data.username || !result.data.password) {
    return NextResponse.json(
      { errors: [{ message: 'username or password is empty' }] },
      { status: 400 },
    );
  }

  // 2 check if user exists already
  // compare username with db
  const user = await getUserByUsername(result.data.username);

  if (user) {
    return NextResponse.json(
      { errors: [{ message: 'username is already taken' }] },
      { status: 400 },
    );
  }

  // 3 hash the password
  const passwordHash = await bcrypt.hash(result.data.password, 12);

  // 4 create user
  const newUser = await createUser(result.data.username, passwordHash);

  if (!newUser) {
    return NextResponse.json(
      { errors: [{ message: 'user creation failed' }] },
      { status: 500 },
    );
  }

  // 5 create session

  //  5a create token
  const token = crypto.randomBytes(60).toString('base64');

  //  5b create session
  const session = await createSession(token, newUser.id);

  if (!session) {
    return NextResponse.json(
      { errors: [{ message: 'session creation failed' }] },
      { status: 500 },
    );
  }

  const serializedCookie = createSerializedRegisterSessionTokenCookie(
    session.token,
  );
  // 6 return new username
  return NextResponse.json(
    { user: { username: newUser.username } },
    {
      status: 200,
      //  serialized cookie
      headers: { 'Set-Cookie': serializedCookie },
    },
  );
}
