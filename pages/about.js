import Link from "next/link";
import { Component } from "react";
import Layout from "../components/Layout";
import Error from "../pages/_error";

class About extends Component {
  static async getInitialProps() {
    // fetch("https://api.github.com/users/ritchey0713")
    //   .then((resp) => resp.json())
    //   .then((data) => {
    //     console.log(data);
    //   });
    // return { user: data };
    const resp = await fetch("https://api.github.com/users/ritchey0713111");
    const statusCode = resp.status > 200 ? resp.status : false;
    const data = await resp.json();
    return { user: data, statusCode };
  }

  render() {
    const { user, statusCode } = this.props;

    if (statusCode) {
      return <Error statusCode={statusCode} />;
    }

    return (
      <Layout title="About">
        <p>{user.name}</p>
        <p>{user.bio}</p>
        <img src={user.avatar_url} alt="me" />
      </Layout>
    );
  }
}
export default About;
