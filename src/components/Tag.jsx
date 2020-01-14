import React from "react";

import styles from "./Tag.module.css";


export function Tag({children}) {
  return <a href={"/tags#" + children}>{children}</a>
}


export default function Tags({tags, children}) {
  if(!tags) tags = ["notag"];
  return <p className={styles.tags}>
    { children }&nbsp;
    {tags.map((tag, i) => [
      i > 0 && ", ",
      <Tag key={i}>{tag}</Tag>
    ])}
  </p>;
}

