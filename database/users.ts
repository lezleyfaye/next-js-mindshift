import { sql } from './connect';

export type User = {
  id: number;
  username: string;
  passwordHash: string;
};

export const getUserByUsername = async (username: string) => {
  const [user] = await sql<{ id: number; username: string }[]>`
    SELECT
      id,
      username
    FROM
      users
    WHERE
      username = ${username}
  `;
  return user;
};
