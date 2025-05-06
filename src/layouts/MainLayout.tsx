import React from 'react';
import { Box, CssBaseline, ThemeProvider, Typography, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { theme } from '../theme';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ 
        height: '100vh',
        overflow: 'hidden',
        position: 'relative',
        background: 'linear-gradient(135deg, #e0e0e0 0%, #9e9e9e 100%)'
      }}>
        {/* Навигационные кнопки */}
        <Box sx={{ 
          position: 'fixed',
          top: 20,
          right: 20,
          display: 'flex',
          gap: 1,
          zIndex: 1000
        }}>
          <Button 
            component={RouterLink} 
            to="/qa"
            variant="outlined"
            size="small"
            sx={{ 
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
              backdropFilter: 'blur(10px)',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
              }
            }}
          >
            QA
          </Button>
          <Button 
            component={RouterLink} 
            to="/about"
            variant="outlined"
            size="small"
            sx={{ 
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
              backdropFilter: 'blur(10px)',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
              }
            }}
          >
            Обо мне
          </Button>
        </Box>

        {/* Основной контент */}
        <Box sx={{ 
          height: 'calc(100vh - 50px)', // Уменьшаем высоту на размер футера
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center'
        }}>
          <Box sx={{ flex: 1 }}>
            {children}
          </Box>
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
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            backdropFilter: 'blur(10px)',
            textAlign: 'center',
            zIndex: 1000
          }}
        >
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} Костя Долгий. Все права защищены.
          </Typography>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default MainLayout; 