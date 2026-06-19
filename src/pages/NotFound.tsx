import React from 'react';
import { Button, Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';

const NotFound: React.FC = () => (
  <MainLayout>
    <Container maxWidth="sm" sx={{ py: 8, textAlign: 'center' }}>
      <Typography variant="h2" component="h1" gutterBottom>404</Typography>
      <Typography color="text.secondary" sx={{ mb: 3 }}>
        Такой страницы нет или она была перемещена.
      </Typography>
      <Button component={Link} to="/" variant="contained">
        На главную
      </Button>
    </Container>
  </MainLayout>
);

export default NotFound;
