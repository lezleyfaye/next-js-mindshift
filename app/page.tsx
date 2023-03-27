import './global.scss';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.scss';

export const metadata = {
  title: 'mindshift',
  description: 'mindshift depression symptom tracker',
};

export default function Home() {
  return (
    <main className={styles.main}>
      <img
        className={styles.image}
        src="/logoText.svg"
        alt="head logo with text"
        width="356"
        height="137"
      />
      <div className={styles.mainInfo}>
        <h2 className={styles.mainTitle}>
          Track your symptoms, take control of depression
        </h2>
        <p className={styles.text}>
          mindshift is an easy to use depression symptom tracker. Symptom graphs
          can help you take control before a depressive episode strikes.
        </p>
        <div className={styles.linkContainer}>
          <Link className={styles.link} href="login">
            Login
          </Link>
          <Link className={styles.link} href="register">
            Register
          </Link>
        </div>
      </div>
      <span>
        mindshift is not meant to diagnose or treat any medical conditions on
        its own. Use is at your own risk.
      </span>
    </main>
  );
}
