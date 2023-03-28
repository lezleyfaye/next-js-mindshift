export async function up(sql) {
  await sql`
  CREATE TABLE ratings (
    id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    rating_value integer NOT NULL,
    user_id integer NOT NULL,
    symptom_id integer NOT NULL,
    date DATE NOT NULL
  )
  `;
}

export async function down(sql) {
  await sql`
  DROP TABLE ratings
`;
}
