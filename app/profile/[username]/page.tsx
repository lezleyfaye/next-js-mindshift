import { notFound } from 'next/navigation';
import { getUserByUsername } from '../../../database/users';

// fix this import path
// import styles from './profile/[username]/page.module.scss';

type Props = { params: { username: string } };

export default async function UserProfile({ params }: Props) {
  const user = await getUserByUsername(params.username);

  if (!user) {
    notFound();
  }

  return (
    <>
      <h1>Hi {user.username}! How are you today?</h1>
      <section>
        <div>
          <h2>Overall Feeling Today</h2>
          <table>
            <tbody>
              <tr>
                <td>😔</td>
                <input type="radio" value="1" name="not good" />
                <td />
                <input type="radio" value="2" name="not the worst" />
                <td />
                <input type="radio" value="3" name="ok" />
                <td />
                <input type="radio" value="4" name="pretty great" />

                <input type="radio" value="5" name="fantastic" />
                <td>😁</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
