import React from 'react';

import { graphql, Link } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ReactUtterences from 'react-utterances'

import Layout from '../components/Layout';
import Tags from '../components/Tag';


function PostLink({fields, frontmatter, side}) {
  if(!fields) return "";
  return <div style={{float: side}}>
    <Link to={fields.slug}>
        {side === "left" ? <FontAwesomeIcon icon="arrow-left" /> : null}
        &nbsp;{frontmatter.title}&nbsp;
        {side === "right" ? <FontAwesomeIcon icon="arrow-right" /> : null}
    </Link>
  </div>
}


export default ({ data, pageContext }) => {
  const { frontmatter, body } = data.mdx;
  const { previous, next } = pageContext;
  return (
    <Layout page={frontmatter.title}>
      <p style={{textAlign: "right", fontSize: "80%"}}>{frontmatter.date}</p>
      <h1>{frontmatter.title}</h1>
      <MDXRenderer>{body}</MDXRenderer>
      <Tags tags={frontmatter.tags}>tags:</Tags>
      <div style={{overflow: "hidden"}}>
        <PostLink {...previous} side="left" />
        <PostLink {...next} side="right"/>
      </div>
      <ReactUtterences repo="randomrambler/dwim" type="pathname" />
    </Layout>
  );
};

export const query = graphql`
  query PostsBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
        date(formatString: "MMMM Do, YYYY")
        tags
      }
    }
  }
`;