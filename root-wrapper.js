import { MDXProvider } from '@mdx-js/react';
import React from 'react';
import Code from "./src/components/Code";

const components = {
  blockquote: ({ children, ...props }) => (
    <blockquote style={{ backgroundColor: '#eee', fontFamily: 'Times, serif', padding: "1pt 9pt 1pt", borderRadius: "5pt" }} {...props}>
      {children}
    </blockquote>
  ),
  h2: ({ children }) => (
    <h2 style={{ color: 'rebeccapurple' }}>{children}</h2>
  ),
  'p.inlineCode': props => (
    <code style={{ backgroundColor: '#eee', fontFamily: 'Consolas, Courier, monospace', padding: "1pt" }} {...props} />
  ),
  pre: ({ children: { props } }) => {
    if (props.mdxType === 'code') {
      return (
        <Code
          codeString={props.children.trim()}
          language={
            props.className && props.className.replace('language-', '')
          }
          {...props}
        />
      );
    }
  },
};

export const wrapRootElement = ({ element }) => (
  <MDXProvider components={components}>{element}</MDXProvider>
);
