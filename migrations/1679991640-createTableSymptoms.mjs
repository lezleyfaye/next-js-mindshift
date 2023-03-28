export async function up(sql) {
  await sql`
  CREATE TABLE symptoms (
    id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    name varchar(100) NOT NULL
  )
  `;
}

export async function down(sql) {
  await sql`
  DROP TABLE symptoms
`;
}
