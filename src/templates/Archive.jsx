import React from "react";

import { Link } from "gatsby";

import Layout from "../components/Layout";

export default ({ pageContext }) => {
  const { posts } = pageContext;

  return (
    <Layout page="Archive">
      <h1>Archive</h1>
      <ul>
        {posts.map(post => (
          <li key={post.fields.slug}>
            {post.metadata.date}:{" "}
            <Link to={post.fields.slug}>{post.metadata.title}</Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
};
