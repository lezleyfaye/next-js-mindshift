import { cache } from 'react';
import { sql } from './connect';

// type Session = {
//   id: number;
//   token: string;
// };

export const createSession = cache(async (token: string, userId: number) => {
  const [session] = await sql<{ id: number; token: string }[]>`
    INSERT INTO sessions
    (token, user_id)
    VALUES
    (${token}, ${userId})
      RETURNING
      id,
      token
    `;

  await deletedExpiredSessions();

  return session;
});

export const deletedExpiredSessions = cache(async () => {
  await sql`
  DELETE from
  sessions
  WHERE
  expiry_timestamp < now()
  `;
});
