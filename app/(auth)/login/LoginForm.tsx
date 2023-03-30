'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
// import { getSafeReturnToPath } from '../../../util/validation';
import { LoginResponseBodyPost } from '../../api/(auth)/login/route';
import styles from './loginForm.module.scss';

// need onSubmit with await response, need onChange for inputs
export default function LoginForm(props: { returnTo?: string | string[] }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<{ message: string }[]>([]);
  const router = useRouter();

  return (
    <div className={styles.main}>
      <img
        className={styles.image}
        src="/logoText.svg"
        alt="head logo with text"
        width="356"
        height="137"
      />
      <div className={styles.mainInfo}>
        <form
          onSubmit={async (event) => {
            event.preventDefault();

            const response = await fetch('/api/login', {
              method: 'POST',
              body: JSON.stringify({ username, password }),
            });

            const data: LoginResponseBodyPost = await response.json();

            if ('errors' in data) {
              setErrors(data.errors);
              return;
            }

            if (
              props.returnTo &&
              !Array.isArray(props.returnTo) &&
              /^\/[a-zA-Z0-9-?=/]*$/.test(props.returnTo)
            ) {
              router.push(props.returnTo);
            }

            router.replace('/symptoms');
            router.refresh();
          }}
        >
          {errors.map((error) => (
            <div key={`error-${error.message}`}>Error: {error.message}</div>
          ))}
          <div className={styles.innerContainer}>
            <h1>Login</h1>
            <label>
              <input
                type="username"
                placeholder="Username"
                value={username}
                onChange={(event) => setUsername(event.currentTarget.value)}
              />
            </label>
            <label>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(event) => setPassword(event.currentTarget.value)}
              />
            </label>
          </div>
          <button>Login</button>
        </form>
      </div>
    </div>
  );
}
