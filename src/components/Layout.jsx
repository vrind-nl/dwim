import React from 'react';

import { graphql, Link, useStaticQuery } from 'gatsby';
import { navigate } from '@reach/router';

import "./Layout.css";
import info from "../../package.json";

const useSiteMetadata = () => {
  return useStaticQuery(
    graphql`
      query SITE_METADATA_QUERY {
        site {
          siteMetadata {
            title
            description
          }
        }

        allMdx(
          sort: { fields: [frontmatter___date], order: DESC }
          filter: { frontmatter: { published: { eq: true }, pinned: { eq: true } } }
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
    `
  );
};

export default ({ children }) => {
  const { site, allMdx } = useSiteMetadata();
  const { title, description } = site.siteMetadata;
  const pinned = allMdx.nodes;

  return (
    <>
      <div className="header">
        <Link to="/" style={{float: "left"}}>
          <h1>{title}</h1>
        </Link>
        <p style={{float: "right"}}>{description}</p>
      </div>
      <div className="header">
        <button onClick={() => navigate("/")}>Home</button>
        <button onClick={() => navigate("/tags")}>Tags</button>
        <button onClick={() => navigate("/archive")}>Archive</button>
        {pinned.map(post => <button onClick={() => navigate(post.fields.slug)}>{post.frontmatter.title}</button>)}
      </div>
      {children}
      <footer>&copy; 2020 <a href={"mailto:" + info.email}>{info.author}</a>, v{info.version}</footer>
    </>
  );
};
