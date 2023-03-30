import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { createRating } from '../../../database/ratings';
import { getUserBySessionToken } from '../../../database/users';

const ratingSchema = z.object({
  date: z.string(),
  overall: z.number(),
  sadness: z.number(),
  anger: z.number(),
  focus: z.number(),
  appetite: z.number(),
  somatic: z.number(),
  fatigue: z.number(),
  sleep: z.number(),
});

export type RegisterResponseBodyPost =
  | { errors: { message: string }[] }
  | {
      rating: {
        userId: number;
        date: number;
        overall: number;
        sadness: number;
        anger: number;
        focus: number;
        appetite: number;
        somatic: number;
        fatigue: number;
        sleep: number;
      };
    };

export async function POST(
  request: NextRequest,
): Promise<NextResponse<RegisterResponseBodyPost>> {
  // get session token from cookie

  const cookieStore = cookies();
  const token = cookieStore.get('sessionToken');

  // 2. validate that session
  // 3. get the user profile matching the session
  const user = token && (await getUserBySessionToken(token.value));

  if (!user) {
    return NextResponse.json({ error: 'session token is not valid' });
  }

  // 1 validate data
  const body = await request.json();

  const result = ratingSchema.safeParse(body);

  if (!result.success) {
    return NextResponse.json(
      {
        errors: 'something is missing',
      },
      { status: 400 },
    );
  }

  // console.log('Rating data:', result.data);

  // 2 save data to database
  // result.data....using result data coming from zod
  const {
    date,
    overall,
    sadness,
    anger,
    focus,
    appetite,
    somatic,
    fatigue,
    sleep,
  } = body;
  // console.log(overall, date);
  const rating = await createRating(
    user.id,
    date,
    overall,
    sadness,
    anger,
    focus,
    appetite,
    somatic,
    fatigue,
    sleep,
  );

  // console.log('Saved rating:', rating);

  // 3 return response
  return NextResponse.json({ rating });
}
