import React from 'react';

import { graphql, Link, useStaticQuery } from 'gatsby';

import "./Layout.css";
import info from "../../package.json";

const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query SITE_METADATA_QUERY {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `
  );
  return site.siteMetadata;
};

export default ({ children }) => {
  const { title, description } = useSiteMetadata();
  return (
    <>
      <div className="header">
        <Link to="/" style={{float: "left"}}>
          <h1>{title}</h1>
        </Link>
        <p style={{float: "right"}}>{description}</p>
      </div>
      {children}
      <footer>&copy; 2020 <a href={"mailto:" + info.email}>{info.author}</a>, v{info.version}</footer>
    </>
  );
};
