import React from 'react';
import { Box, Typography, Avatar, Button, IconButton } from '@mui/material';
import MainLayout from '../layouts/MainLayout';
import TypewriterText from '../components/TypewriterText';
import TechIconsPanel from '../components/TechIconsPanel';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import avatarImage from '../assets/images/avatar.jpg';

const Home: React.FC = () => {
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
          py: 12,
          px: 4,
          background: 'linear-gradient(180deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 100%)',
          backdropFilter: 'blur(10px)',
        }}
      >
        {/* Аватар */}
        <Avatar
          src={avatarImage}
          sx={{ 
            width: 100, 
            height: 100,
            border: '4px solid',
            borderColor: 'primary.main',
            boxShadow: 3,
            mt: -8
          }}
          alt="Костя Долгий"
        />

        {/* Основная информация */}
        <Box textAlign="center" maxWidth="800px">
          <TypewriterText 
            variant="h3" 
            gutterBottom
            text="Привет, Я Костя - QA Web Automation Engineer"
            delay={100}
            sx={{ mb: 4 }}
          />
          <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', mb: 6 }}>
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
            borderRadius: 2,
            boxShadow: 2,
            '&:hover': {
              boxShadow: 4,
            }
          }}
          href="/resume.pdf"
          download
        >
          Скачать резюме
        </Button>

        {/* Социальные сети */}
        <Box display="flex" gap={2}>
          {socialLinks.map((social) => (
            <IconButton
              key={social.label}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              color="primary"
              sx={{ 
                width: 48,
                height: 48,
                backgroundColor: 'rgba(25, 118, 210, 0.1)',
                '&:hover': {
                  backgroundColor: 'rgba(25, 118, 210, 0.2)',
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