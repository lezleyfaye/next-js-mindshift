const symptoms = [
  { id: 1, name: 'overall' },
  { id: 2, name: 'sadness' },
  { id: 3, name: 'anger' },
  { id: 4, name: 'focus' },
  { id: 5, name: 'appetite' },
  { id: 6, name: 'somatic' },
  { id: 7, name: 'fatigue' },
  { id: 8, name: 'sleep' },
];

export async function up(sql) {
  await sql`
    INSERT INTO symptoms ${sql(symptoms, 'name')}
    `;
}

export async function down(sql) {
  for (const symptom of symptoms) {
    await sql`
    DELETE FROM
    symptoms
    WHERE
    id = ${symptom.id}
  `;
  }
}
