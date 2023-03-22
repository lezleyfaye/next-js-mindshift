import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getUserByUsername } from '../../../database/users';

// fix this import path, can scss be used on server component pages?
// import styles from './profile/[username]/page.module.scss';

type Props = { params: { username: string } };

export default async function UserProfile({ params }: Props) {
  const user = await getUserByUsername(params.username);

  if (!user) {
    notFound();
  }

  return (
    <>
      <h1>Hi {user.username}!</h1>
    </>
  );
}
