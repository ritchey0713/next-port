import Link from "next/link";

const About = () => (
  <div>
    <h1>About</h1>
    <Link href="/">
      <a>go home</a>
    </Link>
    <p>A JS programmer</p>
    <img src="/static/js-logo.png" alt="logo" />
  </div>
);

export default About;
