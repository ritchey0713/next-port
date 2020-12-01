import Layout from "../components/Layout";
import Link from "next/link";

const PostLink = ({ title, slug }) => (
  <li>
    <Link as={`${slug}-post`} href={`/post?title=${title}`}>
      <a>{title}</a>
    </Link>
  </li>
);

export default () => (
  <Layout title="My blog">
    <ul>
      <PostLink slug="first-react" title={"React"} />
      <PostLink slug="a-new-angle" title={"Angular"} />
      <PostLink slug="vue" title={"vue"} />
    </ul>
  </Layout>
);
