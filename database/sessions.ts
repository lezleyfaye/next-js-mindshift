import { cache } from 'react';
import { sql } from './connect';

type Session = {
  userId: any;
  id: number;
  token: string;
};

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

export const deleteSessionByToken = cache(async (token: string) => {
  const [session] = await sql<{ id: number; token: string }[]>`
    DELETE FROM
      sessions
    WHERE
      sessions.token = ${token}
    RETURNING
      id,
      token
  `;

  return session;
});

// pass session.userId to return user id
export const getValidSessionByToken = cache(async (token: string) => {
  const [session] = await sql<Session[]>`
    SELECT
      sessions.user_id,
      sessions.id,
      sessions.token
     FROM
      sessions
    WHERE
      sessions.token = ${token}
    AND
      sessions.expiry_timestamp > now()
  `;

  return session;
});
