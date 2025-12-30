import React from 'react';
import { useParams } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import MDXArticle from '../components/MDXArticle';
import { yearContent } from '../content/years';

const YearSummary: React.FC = () => {
  const { yearId } = useParams<{ yearId: string }>();
  const ArticleContent = yearId && yearContent[yearId];

  if (!ArticleContent) {
    return (
      <MainLayout>
        <div>Статья за {yearId} год не найдена</div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <MDXArticle content={<ArticleContent />} />
    </MainLayout>
  );
};

export default YearSummary;
