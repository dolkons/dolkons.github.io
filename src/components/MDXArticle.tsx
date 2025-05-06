import React from 'react';
import { Box, Paper, Typography } from '@mui/material';
import { MDXProvider } from '@mdx-js/react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface MDXComponents {
  [key: string]: React.ComponentType<any>;
}

const components: MDXComponents = {
  h1: ({ children, ...props }) => (
    <Typography component="h1" variant="h3" gutterBottom {...props}>
      {children}
    </Typography>
  ),
  h2: ({ children, ...props }) => (
    <Typography component="h2" variant="h4" gutterBottom {...props}>
      {children}
    </Typography>
  ),
  h3: ({ children, ...props }) => (
    <Typography component="h3" variant="h5" gutterBottom {...props}>
      {children}
    </Typography>
  ),
  p: ({ children, ...props }) => (
    <Typography component="p" variant="body1" paragraph {...props}>
      {children}
    </Typography>
  ),
  code: ({ className, children }) => {
    const language = className?.replace('language-', '') || 'text';
    return (
      <SyntaxHighlighter language={language} style={vscDarkPlus}>
        {String(children)}
      </SyntaxHighlighter>
    );
  },
};

interface MDXArticleProps {
  content: React.ReactNode;
}

const MDXArticle: React.FC<MDXArticleProps> = ({ content }) => {
  return (
    <Paper elevation={3} sx={{ p: 4 }}>
      <MDXProvider components={components}>
        <Box>{content}</Box>
      </MDXProvider>
    </Paper>
  );
};

export default MDXArticle; 