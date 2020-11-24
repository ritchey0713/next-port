import Link from "next/link";

export default ({ children, title }) => (
  <div>
    <header>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/hireme">Hire me</Link>
    </header>
    <h1>{title}</h1>
    {children}

    <footer>footer</footer>
  </div>
);
