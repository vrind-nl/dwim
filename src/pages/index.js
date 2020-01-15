import React from 'react';

import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import Teaser from '../components/Teaser';
import "./index.css";


export default ({ data }) => {
  return (
    <>
      <Layout page="Home">
        {data.allMdx.nodes.slice(0,7).map(props => <Teaser {...props} />)}
      </Layout>
    </>
  );
};

export const query = graphql`
  query SITE_INDEX_QUERY {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { eq: true }, pinned: { ne: true } } }
    ) {
      nodes {
        id
        excerpt(pruneLength: 250)
        frontmatter {
          title
          date(formatString: "YYYY MMMM Do")
        }
        fields {
          slug
        }
      }
    }
  }
`;