import React from 'react';
import { Box, Link, Paper, Typography } from '@mui/material';
import { MDXProvider } from '@mdx-js/react';
import type { MDXComponents } from 'mdx/types';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const components: MDXComponents = {
  h1: ({ children }) => (
    <Typography component="h1" variant="h3" gutterBottom>
      {children}
    </Typography>
  ),
  h2: ({ children }) => (
    <Typography component="h2" variant="h4" gutterBottom>
      {children}
    </Typography>
  ),
  h3: ({ children }) => (
    <Typography component="h3" variant="h5" gutterBottom>
      {children}
    </Typography>
  ),
  p: ({ children }) => (
    <Typography component="p" variant="body1" paragraph>
      {children}
    </Typography>
  ),
  ul: ({ children }: React.PropsWithChildren) => <Box component="ul" sx={{ lineHeight: 1.8 }}>{children}</Box>,
  ol: ({ children }: React.PropsWithChildren) => <Box component="ol" sx={{ lineHeight: 1.8 }}>{children}</Box>,
  blockquote: ({ children }: React.PropsWithChildren) => (
    <Box component="blockquote" sx={{ mx: 0, pl: 2, borderLeft: '4px solid', borderColor: 'primary.light', color: 'text.secondary' }}>
      {children}
    </Box>
  ),
  a: ({ href, children }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <Link href={href} target={href?.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
      {children}
    </Link>
  ),
  pre: ({ children }: React.PropsWithChildren) => <>{children}</>,
  code: ({ className, children }: React.HTMLAttributes<HTMLElement>) => {
    if (!className) {
      return <Box component="code" sx={{ px: 0.5, py: 0.25, borderRadius: 0.5, backgroundColor: 'grey.200' }}>{children}</Box>;
    }

    const language = className.replace('language-', '') || 'text';
    return (
      <SyntaxHighlighter language={language} style={vscDarkPlus} customStyle={{ borderRadius: 8 }}>
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
    <Paper elevation={3} sx={{ mt: 3, p: { xs: 2, sm: 4 }, overflowWrap: 'anywhere' }}>
      <MDXProvider components={components}>
        <Box>{content}</Box>
      </MDXProvider>
    </Paper>
  );
};

export default MDXArticle;
