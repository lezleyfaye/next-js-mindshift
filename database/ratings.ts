import { cache } from 'react';
import { sql } from './connect';

export const createRating = cache(async (date: number, overall: number) => {
  console.log('Creating rating:', date, overall);
  const [rating] = await sql<{ date: string; overall: number }[]>`
      INSERT INTO ratings
        (date, overall)
      VALUES
        (${date}, ${overall})
      RETURNING
        date,
        overall
    `;
  console.log('Created rating:', rating);
  return rating;
});
