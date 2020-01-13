import React from 'react';

import { Link } from 'gatsby';

import styles from "./Teaser.module.css";


export default ({ excerpt, frontmatter, fields }) => {
  console.log(excerpt)
  return (
    <div className={styles.teaser}>
        <p className={styles.date}>{frontmatter.date}</p>
        <Link to={fields.slug}>
            <h2>{frontmatter.title}</h2>
        </Link>
        <p>{excerpt.split()[0]}</p>
    </div>
  );
};
