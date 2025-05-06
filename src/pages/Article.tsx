import React, { Suspense } from 'react';
import { useParams } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import MDXArticle from '../components/MDXArticle';
import { Box, CircularProgress } from '@mui/material';

const Article: React.FC = () => {
  const { articleId } = useParams<{ articleId: string }>();
  
  // Динамический импорт MDX-файла
  const ArticleContent = React.lazy(() => import(`../content/qa/playwright/${articleId}.mdx`));

  return (
    <MainLayout>
      <Suspense fallback={
        <Box display="flex" justifyContent="center" alignItems="center" minHeight="200px">
          <CircularProgress />
        </Box>
      }>
        <MDXArticle content={<ArticleContent />} />
      </Suspense>
    </MainLayout>
  );
};

export default Article; 