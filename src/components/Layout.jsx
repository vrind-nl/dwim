import React from 'react';

import { graphql, useStaticQuery } from 'gatsby';

import { Header } from './Header';

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

export const Layout = ({ children }) => {
  const { title, description } = useSiteMetadata();
  return (
    <>
      <Header siteTitle={title} siteDescription={description} />
      {children}
    </>
  );
};
