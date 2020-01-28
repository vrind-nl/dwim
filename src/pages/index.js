import React from "react";

import { graphql } from "gatsby";

import Layout from "../components/Layout";
import Teaser from "../components/Teaser";
import "./index.css";

export default ({ data }) => {
  const nodes = data.allOrgContent.nodes;
  return (
    <>
      <Layout page="Home">
        {nodes.slice(0, 7).map((props, nr) => (
          <Teaser key={nr} {...props} />
        ))}
      </Layout>
    </>
  );
};

export const query = graphql`
  query SITE_INDEX_QUERY {
    allOrgContent(
      sort: { fields: [metadata___date], order: DESC }
      filter: {
        metadata: { keyword: { eq: "PUBLISHED" }, pinned: { ne: "t" } }
      }
    ) {
      nodes {
        id
        metadata {
          title
          date(formatString: "YYYY MMMM Do")
          keyword
          pinned
        }
        fields {
          slug
        }
        html
      }
    }
  }
`;
