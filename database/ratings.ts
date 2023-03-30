import { cache } from 'react';
import { sql } from './connect';

// added
export type Rating = {
  id: number;
  user_id: number;
  date: string;
  overall: number;
  sadness: number;
  anger: number;
  focus: number;
  appetite: number;
  somatic: number;
  fatigue: number;
  sleep: number;
};

export const createRating = cache(
  async (
    userId: number,
    date: number,
    overall: number,
    sadness: number,
    anger: number,
    focus: number,
    appetite: number,
    somatic: number,
    fatigue: number,
    sleep: number,
  ) => {
    // console.log('Creating rating:', date, overall);
    const [rating] = await sql<
      {
        userId: number;
        date: string;
        overall: number;
        sadness: number;
        anger: number;
        focus: number;
        appetite: number;
        somatic: number;
        fatigue: number;
        sleep: number;
      }[]
    >`
      INSERT INTO ratings
        (user_id, date, overall, sadness, anger, focus, appetite, somatic, fatigue, sleep)
      VALUES
        (${userId}, ${date}, ${overall}, ${sadness}, ${anger}, ${focus}, ${appetite}, ${somatic}, ${fatigue}, ${sleep})
      RETURNING
        id,
        user_id,
        date,
        overall,
        sadness,
        anger,
        focus,
        appetite,
        somatic,
        fatigue,
        sleep
    `;
    // console.log('Created rating:', rating);
    return rating;
  },
);
