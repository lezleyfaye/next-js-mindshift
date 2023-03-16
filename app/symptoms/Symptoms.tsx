'use client';

export default function SymptomsPage() {
  return (
    <section>
      <h1>How are you feeling today?</h1>
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
  );
}
