import './global.scss';
import Image from 'next/image';
import Link from 'next/link';
import styles from './layout.module.scss';

export const metadata = {
  title: 'mindshift',
  description: 'mindshift depression symptom tracker',
};

type Props = {
  children: React.ReactNode;
};

export default function RootLayout(props: Props) {
  return (
    <html lang="en">
      <body>
        <div>
          <Link href="/register">register</Link>
        </div>
        {props.children}
        <div className={styles.background}>
          <img
            className={styles.background}
            src="/background.svg"
            alt="tree silhoutte"
            width="356"
            height="137"
          />
        </div>

        <footer className={styles.footer}>mindshift depression tracker</footer>
      </body>
    </html>
  );
}
