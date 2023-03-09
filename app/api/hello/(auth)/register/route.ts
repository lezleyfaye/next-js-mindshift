import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

// define type of user
const userSchema = z.object({
  username: z.string(),
  password: z.string(),
});

export type RegisterResponseBodyPost =
  | { errors: { message: string }[] }
  | { user: { username: string } };

export const POST = async (request: NextRequest) => {
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

  // 3 hash the password
  // 4 create user
  // 5 create session
  //  5a create token
  //  5b create session
  // 6 return new username
};
