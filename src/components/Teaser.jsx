import React from "react";

import { Link } from "gatsby";

import styles from "./Teaser.module.css";

export default ({ metadata, fields, html }) => {
  const text = html.replace(/<[^>]*>?/gm, '');
  const cut = text.indexOf(".", 200);
  const excerpt = cut > 0 ? text.substring(0, cut + 1) : html;
  // const cut = html.indexOf("<p>", 200);
  // const excerpt = cut > 0 ? html.substring(0, cut - 1) : html;

  return (
    <div className="block">
      <p className={styles.date}>{metadata.date}</p>
      <Link to={fields.slug}>
        <h2>{metadata.title}</h2>
      </Link>
      <div dangerouslySetInnerHTML={{ __html: excerpt }}></div>
    </div>
  );
};
