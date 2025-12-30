import React from 'react';
import { Typography, Paper, List, ListItem, ListItemText, ListItemButton } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';

const Years: React.FC = () => {
  const years = [
    {
      year: '2025',
      title: 'Итоги 2025',
      path: '/years/2025',
      description: 'Основные достижения и события года',
    },
    // Здесь будут добавлены другие годы
  ];

  return (
    <MainLayout>
      <Typography variant="h4" gutterBottom>
        Итоги по годам
      </Typography>
      <Paper elevation={3} sx={{ p: 3 }}>
        <List>
          {years.map((year) => (
            <ListItem key={year.path} disablePadding>
              <ListItemButton component={RouterLink} to={year.path}>
                <ListItemText
                  primary={year.year + ': ' + year.title}
                  secondary={year.description}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Paper>
    </MainLayout>
  );
};

export default Years;
