import React from 'react';
import { Box, Typography, Avatar, Button, IconButton, useTheme, useMediaQuery } from '@mui/material';
import MainLayout from '../layouts/MainLayout';
import TypewriterText from '../components/TypewriterText';
import TechIconsPanel from '../components/TechIconsPanel';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TelegramIcon from '@mui/icons-material/Telegram';
import avatarImage from '../assets/images/avatar.jpg';
import vkIcon from '../assets/icons/vk.svg';
import resumeFile from '../assets/files/resume.pdf';
import { Link } from 'react-router-dom';

const VkIcon = () => (
  <img src={vkIcon} alt="VK" style={{ width: '1rem', height: '1rem' }} />
);

const Home: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const socialLinks = [
    { icon: <GitHubIcon />, url: 'https://github.com/dolkons', label: 'GitHub' },
    { icon: <LinkedInIcon />, url: 'https://linkedin.com/in/dolkons', label: 'LinkedIn' },
    { icon: <TelegramIcon />, url: 'https://t.me/dolkons', label: 'Telegram' },
    { icon: <VkIcon />, url: 'https://vk.com/dolkons', label: 'VK' },
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
          background: 'linear-gradient(180deg, rgba(245,245,245,0.95) 0%, rgba(235,235,235,0.85) 100%)',
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
        {/* Кнопки в правом верхнем углу */}
        <Box
          sx={{
            position: 'fixed',
            top: 20,
            right: 20,
            display: 'flex',
            gap: 1,
            zIndex: 1000,
            flexWrap: 'wrap',
            justifyContent: 'flex-end',
          }}
        >
          {/* Кнопка "Блог" */}
          <Button
            component={Link}
            to="/qa"
            variant="contained"
            size="small"
            color="primary"
            sx={{
              px: 1.5,
              py: 0.5,
              fontSize: '0.7rem',
              textTransform: 'none',
              borderRadius: 1.5,
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              transition: 'all 0.3s ease-in-out',
              backgroundColor: 'rgba(117, 117, 117, 0.8)',
              backdropFilter: 'blur(4px)',
              '&:hover': {
                transform: 'translateY(-2px)',
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                backgroundColor: 'rgba(117, 117, 117, 0.9)',
              }
            }}
          >
            Блог
          </Button>

          {/* Кнопка "Мои жизненные принципы" */}
          <Button
            component={Link}
            to="/principles"
            variant="contained"
            size="small"
            color="primary"
            sx={{
              px: 1.5,
              py: 0.5,
              fontSize: '0.7rem',
              textTransform: 'none',
              borderRadius: 1.5,
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              transition: 'all 0.3s ease-in-out',
              backgroundColor: 'rgba(117, 117, 117, 0.8)',
              backdropFilter: 'blur(4px)',
              '&:hover': {
                transform: 'translateY(-2px)',
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                backgroundColor: 'rgba(117, 117, 117, 0.9)',
              }
            }}
          >
            Мои принципы
          </Button>

          {/* Кнопка "Итоги по годам" */}
          <Button
            component={Link}
            to="/years"
            variant="contained"
            size="small"
            color="primary"
            sx={{
              px: 1.5,
              py: 0.5,
              fontSize: '0.7rem',
              textTransform: 'none',
              borderRadius: 1.5,
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              transition: 'all 0.3s ease-in-out',
              backgroundColor: 'rgba(117, 117, 117, 0.8)',
              backdropFilter: 'blur(4px)',
              '&:hover': {
                transform: 'translateY(-2px)',
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                backgroundColor: 'rgba(117, 117, 117, 0.9)',
              }
            }}
          >
            Итоги по годам
          </Button>

          {/* Кнопка резюме */}
          <Button
            variant="contained"
            size="small"
            color="primary"
            sx={{
              px: 1.5,
              py: 0.5,
              fontSize: '0.7rem',
              textTransform: 'none',
              borderRadius: 1.5,
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              transition: 'all 0.3s ease-in-out',
              backgroundColor: 'rgba(117, 117, 117, 0.8)',
              backdropFilter: 'blur(4px)',
              '&:hover': {
                transform: 'translateY(-2px)',
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                backgroundColor: 'rgba(117, 117, 117, 0.9)',
              }
            }}
            href={resumeFile}
            download="resume.pdf"
          >
            Скачать резюме
          </Button>
        </Box>

        {/* Социальные сети */}
        <Box 
          display="flex" 
          gap={1}
          sx={{
            position: 'fixed',
            top: 60,
            right: 20,
            zIndex: 1000,
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
                width: 28,
                height: 28,
                backgroundColor: 'rgba(25, 118, 210, 0.08)',
                transition: 'all 0.3s ease-in-out',
                '&:hover': {
                  backgroundColor: 'rgba(25, 118, 210, 0.15)',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 4px 12px rgba(25, 118, 210, 0.2)',
                },
                '& svg': {
                  fontSize: '1rem'
                }
              }}
              aria-label={social.label}
            >
              {social.icon}
            </IconButton>
          ))}
        </Box>

        {/* Аватар */}
        <Avatar
          src={avatarImage}
          sx={{ 
            width: { xs: 80, sm: 110 }, 
            height: { xs: 80, sm: 110 },
            border: '1px solid',
            borderColor: 'primary.main',
            boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
            mt: { xs: -32, sm: -48 },
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
              background: 'linear-gradient(45deg, #757575, #9e9e9e)',
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
      </Box>
    </MainLayout>
  );
};

export default Home;