const siteMetadata = {
  title: `DWIM(.nl)`,
  description: `Do What I Mean`,
  siteUrl: `https://dwim.nl`
};

module.exports = {
  siteMetadata,
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/posts`,
        name: `posts`
      }
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allOrgContent } }) => {
              return allOrgContent.edges.map(edge => {
                return Object.assign({}, edge.node.metadata, {
                  // description: edge.node.excerpt,
                  description: "---",
                  date: edge.node.metadata.date,
                  url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  custom_elements: [{ "content:encoded": edge.node.html }]
                });
              });
            },
            query: `
              {
                allOrgContent(
                  sort: { order: DESC, fields: [metadata___date] },
                  filter: { metadata: { keyword: { eq: "PUBLISHED" }, pinned: { ne: "t" } } }
                ) {
                  edges {
                    node {
                      html
                      fields { slug }
                      metadata {
                        title
                        date
                      }
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: siteMetadata.description
            // optional configuration to insert feed reference in pages:
            // if `string` is used, it will be used to create RegExp and then test if pathname of
            // current page satisfied this regular expression;
            // if not provided or `undefined`, all pages will have feed reference inserted
            // match: "^/blog/",

            // optional configuration to specify external rss feed, such as feedburner
            // link: "https://feeds.feedburner.com/gatsby/blog",
          }
        ]
      }
    },
    "gatsby-transformer-orga"
  ]
};
