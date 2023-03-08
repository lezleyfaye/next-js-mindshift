import './global.scss';
import { Inter } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.scss';

const inter = Inter({ subsets: ['latin'] });

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
        <Link href="login">Login</Link>
        <Link href="register">Register</Link>
      </div>
      <span>
        mindshift is not meant to diagnose or treat any medical conditions on
        its own. Use is at your own risk.
      </span>
    </main>
  );
}
