import React from 'react';
import ReactMarkdown from 'react-markdown';

import * as styles from './index.styles';

interface IProps {
  children?: string;
}

export const CodeWrapper = ({ children }: IProps) => {
  return (
    <ReactMarkdown
      components={{
        pre: ({ node: _, ...props }) => (
          <div className={styles.preMarkdownStyles}>
            <pre {...props} />
          </div>
        ),
        code: ({ node: _, ...props }) => (
          <code className={styles.codeMarkdownStyles} {...props} />
        ),
      }}
      className={styles.markdownGeneralStyles}
    >
      {children ?? ''}
    </ReactMarkdown>
  );
};
