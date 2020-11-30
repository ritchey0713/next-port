import Layout from "../components/Layout";

export default ({ statusCode }) => (
  <Layout title="error">
    {statusCode ? (
      `Could not load user data, sorry! status code: ${statusCode}`
    ) : (
      <p>Can't find that page, sorry!</p>
    )}
  </Layout>
);
