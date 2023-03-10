'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { RegisterResponseBodyPost } from '../../api/(auth)/register/route';

// need onSubmit with await response, need onChange for inputs
export default function RegisterForm() {
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

          const data: RegisterResponseBodyPost = await response.json();

          if ('errors' in data) {
            setErrors(data.errors);
            return;
          }
          console.log(data.user);
          // is this where it's redirecting to homepage after creating user?
          router.push(`/profile/${data.user.username}`);
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
