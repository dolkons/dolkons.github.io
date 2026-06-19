import React from 'react';
import { Container, Typography, Paper, List, ListItem, ListItemText, ListItemButton } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import PageBreadcrumbs from '../components/PageBreadcrumbs';
import { yearSummaries } from '../content/years';

const Years: React.FC = () => {
  return (
    <MainLayout>
      <Container maxWidth="md" sx={{ py: { xs: 3, sm: 6 } }}>
        <PageBreadcrumbs items={[{ label: 'Итоги года' }]} />
        <Typography variant="h4" sx={{ mt: 3, mb: 2 }}>
          Итоги года
        </Typography>
        <Paper elevation={3} sx={{ p: { xs: 1, sm: 3 } }}>
          <List>
            {yearSummaries.map((item) => (
              <ListItem key={item.year} disablePadding>
                <ListItemButton component={RouterLink} to={`/years/${item.year}`}>
                  <ListItemText
                    primary={item.title}
                    secondary={item.description}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Paper>
      </Container>
    </MainLayout>
  );
};

export default Years;
