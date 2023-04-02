'use client';

import styles from './track.module.scss';

export default function TrackPage() {
  return (
    <div className={styles.trackInfo}>
      <h1>
        Do some of your symptoms seem to get worse or improve sporadically? Are
        any symptoms not getting better? Did you change your medication or
        dosage?
        <br />
        These graphs can be helpful for you to see any trends in your symptoms.
        Tracking symptoms is best done with the help of a mental health
        professional.
      </h1>
      <img
        src="/images/dataPage.png"
        alt="mindshift data page prototype with line graphs"
        width="356"
        height="137"
      />
    </div>
  );
}
