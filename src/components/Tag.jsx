import React from "react";

import styles from "./Tag.module.css";


export function Tag({children}) {
    return <a href={"/tags#" + children}>{children}</a>
}


export default function Tags({tags}) {
    if(!tags) tags = ["notag"];
    return <p className={styles.tags}>{tags.map((tag, i) => [
        i > 0 && ", ",
        <Tag key={i}>{tag}</Tag>
    ])}
    </p>;
}

