import './global.scss';
import { Laila } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import CookieBanner from './CookieBanner';
import styles from './layout.module.scss';

const laila = Laila({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: 'mindshift',
  description: 'mindshift depression symptom tracker',
};

type Props = {
  children: React.ReactNode;
};

export default function RootLayout(props: Props) {
  return (
    <html lang="en" className={laila.className}>
      <body>
        <div className={styles['bg-background']}>
          <nav className={styles.navbar}>
            <Link href="/">Home</Link>
            <Link href="/login">Login</Link>
            <Link href="/register">Register</Link>
            <Link href="/symptoms">Symptoms</Link>
            <Link href="/track">Track</Link>
            <Link href="/logout" prefetch={false}>
              Logout
            </Link>
          </nav>
          {props.children}

          <footer className={styles.footer}>
            mindshift depression tracker ©Lezley Davidson
          </footer>
        </div>
      </body>
    </html>
  );
}
