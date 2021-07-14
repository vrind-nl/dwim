import React from "react";

import { graphql, Link, useStaticQuery } from "gatsby";
import { navigate } from "@reach/router";
import { FaGithub, FaRss } from "react-icons/fa";

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

        allOrgContent(
          sort: { fields: [metadata___date], order: DESC }
          filter: {
            metadata: { keyword: { eq: "PUBLISHED" }, pinned: { eq: "t" } }
          }
        ) {
          nodes {
            id
            metadata {
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

export default ({ page, children }) => {
  const { site, allOrgContent } = useSiteMetadata();
  const { title, description } = site.siteMetadata;
  const pinned = allOrgContent.nodes;

  return (
    <>
      <title>{title + (page ? " - " + page : "")}</title>
      <div className="header">
        <Link to="/" style={{ float: "left" }}>
          <h1>{title}</h1>
        </Link>
        <p style={{ float: "right" }}>
          <i>{description}</i>
        </p>
      </div>
      <div className="header">
        <div style={{ float: "left" }}>
          <button onClick={() => navigate("/")}>Home</button>
          <button onClick={() => navigate("/tags")}>Tags</button>
          <button onClick={() => navigate("/archive")}>Archive</button>
        </div>
        <div style={{ float: "right" }}>
          {pinned.map(post => (
            <button
              key={post.fields.slug}
              onClick={() => navigate(post.fields.slug)}
            >
              {post.metadata.title}
            </button>
          ))}
          <button onClick={() => navigate("/rss.xml")}>
            <FaRss />
          </button>
          <button onClick={() => navigate("https://github.com/vrind-nl/dwim")}>
            <FaGithub />
          </button>
        </div>
      </div>
      {children}
      <footer>
        &copy; 2020 <a href={"mailto:" + info.email}>{info.author}</a>, v
        {info.version}
      </footer>
    </>
  );
};
