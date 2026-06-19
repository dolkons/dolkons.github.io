import React from 'react';
import { Box, Typography } from '@mui/material';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <Box sx={{
      minHeight: '100dvh',
      display: 'flex',
      flexDirection: 'column',
      background: 'linear-gradient(180deg, rgba(245,245,245,0.95) 0%, rgba(235,235,235,0.85) 100%)'
    }}>
      <Box component="main" sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        {children}
      </Box>

      <Box
        component="footer"
        sx={{
          py: 2,
          px: 2,
          backgroundColor: 'rgba(245, 245, 245, 0.82)',
          backdropFilter: 'blur(5px)',
          textAlign: 'center'
        }}
      >
        <Typography variant="body2" color="text.secondary">
          © {new Date().getFullYear()} Костя Долгий
        </Typography>
      </Box>
    </Box>
  );
};

export default MainLayout;
