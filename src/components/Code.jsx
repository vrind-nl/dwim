import React from 'react';

import Highlight, { defaultProps } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/palenight';
import { FaCopy } from "react-icons/fa";

import { copyToClipboard } from '../utils/copy-to-clipboard';
import styles from "./Code.module.css";


const Code = ({ codeString, language }) => {
  return (
    <Highlight
      {...defaultProps}
      code={codeString}
      language={language}
      theme={theme}>
      {({
        className,
        style,
        tokens,
        getLineProps,
        getTokenProps,
      }) => (
        <pre className={`${styles.code} ${className}`} style={style}>
          <button className={styles.copy} onClick={() => copyToClipboard(codeString)}><FaCopy /></button>
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};

export default Code;
