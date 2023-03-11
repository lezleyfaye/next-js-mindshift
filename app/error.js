'use client';
export default function RootError(props) {
  return (
    <div>
      Ups! something went wrong
      <p>{props.error.message}</p>
      {/* <button onClick={() => props.reset()}>Reset error boundary</button> */}
    </div>
  );
}
