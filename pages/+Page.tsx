import { useState } from "react";

export default function HomePage() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Home page</h1>
      <ul>
        <li>This page is generated on the server</li>
        <li>
          This page is hydrated{" "}
          <button type="button" onClick={() => setCount((prev) => prev + 1)}>
            Click! {count}
          </button>
        </li>
        <li>
          You can also navigate to <a href="/about">/about</a>
        </li>
      </ul>
    </>
  );
}
