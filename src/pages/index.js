import React from 'react';

import { graphql } from 'gatsby';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faCopy, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'

import Layout from '../components/Layout';
import Teaser from '../components/Teaser';


library.add(faCopy, faArrowLeft, faArrowRight)


export default ({ data }) => {
  return (
    <>
      <Layout>
        {data.allMdx.nodes.slice(0,7).map(props => <Teaser {...props} />)}
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
          date(formatString: "YYYY MMMM Do")
        }
        fields {
          slug
        }
      }
    }
  }
`;