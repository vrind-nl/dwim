import React from 'react';

import { Link } from 'gatsby';

import Layout from '../components/Layout';


export default ({ pageContext }) => {
  const { posts } = pageContext;
  console.log(posts);
  return (
    <Layout>
      <h1>Archive</h1>
      <ul>
        { posts.map(post => <li key={post.fields.slug}>{post.frontmatter.date}: <Link to={post.fields.slug}>{post.frontmatter.title}</Link></li>) }
      </ul>
    </Layout>
  );
};
