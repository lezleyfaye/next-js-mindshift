export async function up(sql) {
  await sql`
  CREATE TABLE ratings (
    rating_value integer NOT NULL,
    user_id integer NOT NULL,
    symptom_id integer NOT NULL,
    timestamp NOT NULL
  )
  `;
}

export async function down(sql) {
  await sql`
  DROP TABLE ratings
`;
}
