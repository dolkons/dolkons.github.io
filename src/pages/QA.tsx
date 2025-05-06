import React from 'react';
import { Box, Typography, Paper, List, ListItem, ListItemText, ListItemButton } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';

const QA: React.FC = () => {
  const articles = [
    {
      title: 'Playwright: Начало работы',
      path: '/qa/playwright/getting-started',
      description: 'Основы работы с Playwright для автоматизации тестирования веб-приложений',
    },
    // Здесь будут добавлены другие статьи
  ];

  return (
    <MainLayout>
      <Typography variant="h4" gutterBottom>
        QA и Автоматизация
      </Typography>
      <Paper elevation={3} sx={{ p: 3 }}>
        <List>
          {articles.map((article) => (
            <ListItem key={article.path} disablePadding>
              <ListItemButton component={RouterLink} to={article.path}>
                <ListItemText
                  primary={article.title}
                  secondary={article.description}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Paper>
    </MainLayout>
  );
};

export default QA; 