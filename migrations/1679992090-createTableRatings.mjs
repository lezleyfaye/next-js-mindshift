export async function up(sql) {
  await sql`
  CREATE TABLE ratings (
    id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    user_id integer NOT NULL,
    date timestamp NOT NULL,
    overall varchar NOT NULL,
    sadness varchar NOT NULL,
    anger varchar NOT NULL,
    focus varchar NOT NULL,
    appetite varchar NOT NULL,
    somatic varchar NOT NULL,
    fatigue varchar NOT NULL,
    sleep varchar NOT NULL
    )
  `;
}

export async function down(sql) {
  await sql`
  DROP TABLE ratings
`;
}
