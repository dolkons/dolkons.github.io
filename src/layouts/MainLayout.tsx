import React from 'react';
import { Box, CssBaseline, ThemeProvider, Typography } from '@mui/material';
import { theme } from '../theme';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ 
        minHeight: '100vh',
        position: 'relative',
        background: 'linear-gradient(135deg, #e0e0e0 0%, #9e9e9e 100%)'
      }}>
        {/* Основной контент */}
        <Box sx={{ 
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center'
        }}>
          {children}
        </Box>

        {/* Футер */}
        <Box 
          component="footer" 
          sx={{ 
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            py: 2,
            px: 2,
            backdropFilter: 'blur(5px)',
            textAlign: 'center',
            zIndex: 2000
          }}
        >
          <Typography variant="body2" color="text.secondary" sx={{ textShadow: '0 1px 2px rgba(0,0,0,0.1)' }}>
            © {new Date().getFullYear()} Костя Долгий. Все права защищены.
          </Typography>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default MainLayout; 