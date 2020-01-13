import { graphql, Link } from 'gatsby';

import React from 'react';

import { Layout } from '../components/Layout';

export default ({ data }) => {
  return (
    <>
      <Layout>
        {data.allMdx.nodes.map(({ excerpt, frontmatter, fields }) => (
          <>
            <Link to={fields.slug}>
                <h1>{frontmatter.title}</h1>
            </Link>
            <p>{frontmatter.date}</p>
            <p>{excerpt}</p>
          </>
        ))}
      </Layout>
    </>
  );
};

export const query = graphql`
  query SITE_INDEX_QUERY {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { eq: true } } }
    ) {
      nodes {
        id
        excerpt(pruneLength: 250)
        frontmatter {
          title
          date
        }
        fields {
          slug
        }
      }
    }
  }
`;