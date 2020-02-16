import React from "react";

import { graphql } from "gatsby";

import Layout from "../components/layout";
import Teaser from "../components/Teaser";
import "./index.css";

export default ({ data, location }) => {
  const nodes = data.allOrgContent.nodes;
  console.log("Location: ", location);
  return (
    <Layout page="Home">
      {nodes.slice(0, 7).map((props, nr) => (
        <Teaser key={nr} {...props} />
      ))}
    </Layout>
  );
};

export const query = graphql`
  query SITE_INDEX_QUERY {
    allOrgContent(
      sort: { fields: [metadata___date], order: DESC }
      filter: { metadata: { pinned: { ne: "t" } } }
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
