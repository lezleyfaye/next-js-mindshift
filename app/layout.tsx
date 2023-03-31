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
          <div className="navbar bg-base-100 bg-opacity-0">
            <div className="flex-none">
              <ul className="menu menu-horizontal px-1">
                <li tabIndex={0} className="flex items-center">
                  <div className="flex items-center bg-secondary rounded-full p-1 mr-2">
                    <a>
                      <img
                        src="/logoText.svg"
                        alt="Mindshift Logo with name"
                        className="h-12 w-30"
                      />
                    </a>
                  </div>
                  <ul className="p-2 bg-secondary">
                    <li className="text-primary">
                      <Link href="/symptoms">Symptoms</Link>
                    </li>
                    <li className="text-primary">
                      <Link href="/track">Track</Link>
                    </li>
                    <li className="text-primary">
                      <Link href="/logout" prefetch={false}>
                        Logout
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>

          {props.children}

          <footer className={styles.footer}>
            mindshift depression tracker ©Lezley Davidson
          </footer>
        </div>
      </body>
    </html>
  );
}
