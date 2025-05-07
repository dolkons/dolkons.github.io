import React from 'react';
import { Box, Typography, Avatar, Button, IconButton, useTheme, useMediaQuery } from '@mui/material';
import MainLayout from '../layouts/MainLayout';
import TypewriterText from '../components/TypewriterText';
import TechIconsPanel from '../components/TechIconsPanel';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import avatarImage from '../assets/images/avatar.jpg';

const Home: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const socialLinks = [
    { icon: <GitHubIcon />, url: 'https://github.com/dolkons', label: 'GitHub' },
    { icon: <LinkedInIcon />, url: 'https://linkedin.com/in/dolkons', label: 'LinkedIn' },
    { icon: <TelegramIcon />, url: 'https://t.me/dolkons', label: 'Telegram' },
    { icon: <InstagramIcon />, url: 'https://instagram.com/dolkons1989', label: 'Instagram' },
  ];

  return (
    <MainLayout>
      <TechIconsPanel />
      <Box 
        display="flex" 
        flexDirection="column" 
        alignItems="center" 
        justifyContent="center"
        gap={6}
        sx={{
          minHeight: '100vh',
          py: { xs: 8, sm: 12 },
          px: { xs: 2, sm: 4 },
          background: 'linear-gradient(180deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.85) 100%)',
          backdropFilter: 'blur(10px)',
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(circle at 50% 50%, rgba(25, 118, 210, 0.05) 0%, transparent 70%)',
            pointerEvents: 'none',
          }
        }}
      >
        {/* Аватар */}
        <Avatar
          src={avatarImage}
          sx={{ 
            width: { xs: 80, sm: 110 }, 
            height: { xs: 80, sm: 110 },
            border: '2px solid',
            borderColor: 'primary.main',
            boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
            mt: { xs: -4, sm: -16 },
            transition: 'all 0.3s ease-in-out',
            '&:hover': {
              transform: 'scale(1.05)',
              boxShadow: '0 12px 40px rgba(0,0,0,0.15)',
            }
          }}
          alt="Костя Долгий"
        />

        {/* Основная информация */}
        <Box 
          textAlign="center" 
          maxWidth="800px"
          sx={{
            animation: 'fadeIn 1s ease-out',
            '@keyframes fadeIn': {
              '0%': {
                opacity: 0,
                transform: 'translateY(20px)',
              },
              '100%': {
                opacity: 1,
                transform: 'translateY(0)',
              },
            }
          }}
        >
          <TypewriterText 
            variant={isMobile ? "h6" : "h5"}
            gutterBottom
            text="Привет, Я Костя"
            delay={100}
            sx={{ 
              mb: 2,
              fontWeight: 400,
              background: 'linear-gradient(45deg, #1976d2, #2196f3)',
              backgroundClip: 'text',
              textFillColor: 'transparent',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          />
          <Typography 
            variant="body1" 
            paragraph 
            sx={{ 
              fontSize: { xs: '1rem', sm: '1.1rem' },
              mb: 6,
              color: 'text.secondary',
              lineHeight: 1.8,
              maxWidth: '600px',
              mx: 'auto'
            }}
          >
            Добро пожаловать на мою персональную страничку в глубоком океане Интернета.
          </Typography>
        </Box>

        {/* Кнопка резюме */}
        <Button
          variant="contained"
          size="large"
          color="primary"
          sx={{ 
            px: 4,
            py: 1.5,
            fontSize: '1.1rem',
            textTransform: 'none',
            borderRadius: 3,
            boxShadow: '0 4px 20px rgba(25, 118, 210, 0.3)',
            transition: 'all 0.3s ease-in-out',
            '&:hover': {
              transform: 'translateY(-2px)',
              boxShadow: '0 6px 25px rgba(25, 118, 210, 0.4)',
            }
          }}
          href="/resume.pdf"
          download
        >
          Скачать резюме
        </Button>

        {/* Социальные сети */}
        <Box 
          display="flex" 
          gap={2}
          sx={{
            animation: 'slideUp 0.8s ease-out 0.5s both',
            '@keyframes slideUp': {
              '0%': {
                opacity: 0,
                transform: 'translateY(20px)',
              },
              '100%': {
                opacity: 1,
                transform: 'translateY(0)',
              },
            }
          }}
        >
          {socialLinks.map((social) => (
            <IconButton
              key={social.label}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              color="primary"
              sx={{ 
                width: { xs: 40, sm: 48 },
                height: { xs: 40, sm: 48 },
                backgroundColor: 'rgba(25, 118, 210, 0.08)',
                transition: 'all 0.3s ease-in-out',
                '&:hover': {
                  backgroundColor: 'rgba(25, 118, 210, 0.15)',
                  transform: 'translateY(-3px)',
                  boxShadow: '0 4px 12px rgba(25, 118, 210, 0.2)',
                }
              }}
              aria-label={social.label}
            >
              {social.icon}
            </IconButton>
          ))}
        </Box>
      </Box>
    </MainLayout>
  );
};

export default Home; 