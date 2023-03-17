import './global.scss';
import Image from 'next/image';
import Link from 'next/link';
import CookieBanner from './CookieBanner';
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
        {props.children}

        <footer className={styles.footer}>
          <div className={styles.background}>
            <img
              className={styles.background}
              src="/background.svg"
              alt="tree silhoutte"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
          mindshift depression tracker
        </footer>
      </body>
    </html>
  );
}
