import Link from "next/link";
import Layout from "../components/Layout";

const Index = () => (
  <Layout title="home">
    <Link href="/about">
      <a>About us</a>
    </Link>
    Welcome to the homepage
  </Layout>
);

export default Index;
