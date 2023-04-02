'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { RegisterResponseBodyPost } from '../../api/(auth)/register/route';
import styles from './registerForm.module.scss';

// need onSubmit with await response, need onChange for inputs
export default function RegisterForm(props: { returnTo?: string | string[] }) {
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

            // want this on frontend symptoms w/onSubmit
            const response = await fetch('/api/register', {
              method: 'POST',
              body: JSON.stringify({ username, password }),
            });

            const data: RegisterResponseBodyPost = await response.json();

            if ('errors' in data) {
              setErrors(data.errors);
              return;
            }
            // stop here
            if (
              props.returnTo &&
              !Array.isArray(props.returnTo) &&
              /^\/[a-zA-Z0-9-?=/]*$/.test(props.returnTo)
            ) {
              router.push(props.returnTo);
              return;
            }

            router.replace('/symptoms');
            router.refresh();
          }}
        >
          {errors.map((error) => (
            <div key={`error-${error.message}`}>Error: {error.message}</div>
          ))}
          <div className={styles.innerContainer}>
            <h1>Sign up for a free account!</h1>
            <label>
              <input
                type="username"
                placeholder="Username"
                required
                value={username}
                onChange={(event) => setUsername(event.currentTarget.value)}
              />
            </label>
            <label>
              <input
                type="password"
                placeholder="Password (8 character minimum)"
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                required
                title="8 characters minimum"
                value={password}
                onChange={(event) => setPassword(event.currentTarget.value)}
              />
            </label>
          </div>
          <button>Register</button>
        </form>
      </div>
    </div>
  );
}
