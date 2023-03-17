'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
// import { getSafeReturnToPath } from '../../../util/validation';
import { LoginResponseBodyPost } from '../../api/(auth)/login/route';

// need onSubmit with await response, need onChange for inputs
export default function LoginForm(props: { returnTo?: string | string[] }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<{ message: string }[]>([]);
  const router = useRouter();

  return (
    <>
      <h1>login</h1>
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

          router.replace(`/profile/${data.user.username}`);
          router.refresh();
        }}
      >
        {errors.map((error) => (
          <div key={`error-${error.message}`}>Error: {error.message}</div>
        ))}
        <label>
          username:
          <input
            value={username}
            onChange={(event) => setUsername(event.currentTarget.value)}
          />
        </label>
        <label>
          password:
          <input
            value={password}
            onChange={(event) => setPassword(event.currentTarget.value)}
          />
        </label>
        <button>Login</button>
      </form>
    </>
  );
}
