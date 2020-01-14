import React from 'react';

import { Link } from 'gatsby';

import Layout from '../components/Layout';


export default ({ pageContext }) => {
  const { tags } = pageContext;

  return (
    <Layout>
      <h1>Tags</h1>
      {Object.keys(tags).map(tag => <div className="block">
        <h2 id={tag}>{tag}</h2>
        <ul>
          { tags[tag].map(post => <li key={post.slug}><Link to={post.slug}>{post.title}</Link> ({post.date})</li>) }
        </ul>
      </div>)}
    </Layout>
  );
};
