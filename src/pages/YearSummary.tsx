import React from 'react';
import { Container, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import MDXArticle from '../components/MDXArticle';
import PageBreadcrumbs from '../components/PageBreadcrumbs';
import { getYearSummary } from '../content/years';

const YearSummary: React.FC = () => {
  const { yearId } = useParams<{ yearId: string }>();
  const summary = yearId ? getYearSummary(yearId) : undefined;

  if (!summary) {
    return (
      <MainLayout>
        <Container maxWidth="md" sx={{ py: { xs: 3, sm: 6 } }}>
          <PageBreadcrumbs items={[{ label: 'Итоги года', to: '/years' }, { label: yearId ?? 'Не найдено' }]} />
          <Typography variant="h4" sx={{ mt: 4 }}>
            Статья за {yearId} год не найдена
          </Typography>
        </Container>
      </MainLayout>
    );
  }

  const ArticleContent = summary.content;

  return (
    <MainLayout>
      <Container maxWidth="md" sx={{ py: { xs: 3, sm: 6 } }}>
        <PageBreadcrumbs items={[
          { label: 'Итоги года', to: '/years' },
          { label: summary.year },
        ]} />
        <MDXArticle content={<ArticleContent />} />
      </Container>
    </MainLayout>
  );
};

export default YearSummary;
