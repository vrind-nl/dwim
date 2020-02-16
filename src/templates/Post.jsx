import React from "react";

import { graphql, Link } from "gatsby";
import ReactUtterences from "react-utterances";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import Layout from "../components/layout";
import Tags from "../components/Tag";

function PostLink({ fields, metadata, side }) {
  if (!fields) return "";
  return (
    <div style={{ float: side }}>
      <Link to={fields.slug}>
        {side === "left" ? <FaArrowLeft /> : null}
        &nbsp;{metadata.title}&nbsp;
        {side === "right" ? <FaArrowRight /> : null}
      </Link>
    </div>
  );
}

export default ({ data, pageContext }) => {
  const { metadata, html } = data.orgContent;
  const { previous, next } = pageContext;
  return (
    <Layout page={metadata.title}>
      <p style={{ textAlign: "right", fontSize: "80%" }}>{metadata.date}</p>
      <h1>{metadata.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <Tags tags={metadata.tags}>tags:</Tags>
      <div style={{ overflow: "hidden" }}>
        <PostLink {...previous} side="left" />
        <PostLink {...next} side="right" />
      </div>
      <ReactUtterences repo="randomrambler/dwim" type="pathname" />
    </Layout>
  );
};

export const query = graphql`
  query PostsBySlug($slug: String!) {
    orgContent(fields: { slug: { eq: $slug } }) {
      metadata {
        title
        date(formatString: "MMMM Do, YYYY")
        tags
      }
      html
    }
  }
`;
