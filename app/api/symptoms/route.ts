import Cookies from 'js-cookie';
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { createRating } from '../../../database/ratings';
import { getValidSessionByToken } from '../../../database/sessions';

C:\Users\Lezley\projects\next-js-mindshift\database\sessions.ts
const ratingSchema = z.object({
  date: z.string(),
  overall: z.number(),
});

export type RegisterResponseBodyPost =
  | { errors: { message: string }[] }
  | { rating: { date: number; overall: number } };

export async function POST(
  request: NextRequest,
): Promise<NextResponse<RegisterResponseBodyPost>> {


  // get session token from cookies function to get user id

  // 1 validate data
  const body = await request.json();

  const result = ratingSchema.safeParse(body);

  if (!result.success) {
    return NextResponse.json(
      {
        errors: result.error.issues,
      },
      { status: 400 },
    );
  }

  console.log('Rating data:', result.data);

  // 2 save data to database
  // result.data....using result data coming from zod
  const { date, overall } = body;
  console.log(overall, date);
  const rating = await createRating(date, overall);

  console.log('Saved rating:', rating);

  // 3 return response
  return NextResponse.json({ rating });
}
