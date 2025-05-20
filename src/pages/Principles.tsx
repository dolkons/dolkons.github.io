import React from 'react';
import { Box, Typography, Avatar, Paper, useTheme } from '@mui/material';
import MainLayout from '../layouts/MainLayout';
import avatarImage from '../assets/images/avatar.jpg';

const PrinciplesPage: React.FC = () => {
  const theme = useTheme();

  const principles = [
    { title: 'Семья', content: 'Гармоничные отношения, поддержка, совместное развитие' },
    { title: 'Здоровье', content: 'Регулярные check-up, сбалансированное питание, профилактика' },
    { title: 'Спорт', content: '3-4 тренировки в неделю, развитие выносливости и силы' },
    { title: 'Карьера', content: 'Постоянное развитие навыков, значимые проекты, баланс' },
    { title: 'Финансы', content: 'Инвестиции, пассивный доход, финансовая подушка' },
    { title: 'Развитие', content: 'Чтение, курсы, изучение нового, выход из зоны комфорта' },
    { title: 'Творчество', content: 'Реализация идей, side projects, нестандартные решения' },
    { title: 'Духовность', content: 'Медитации, рефлексия, осознанность, благодарность' },
  ];

  return (
    <MainLayout>
      <Box
        sx={{
          minHeight: '100vh',
          py: 8,
          px: { xs: 2, sm: 4 },
          background: 'linear-gradient(180deg, rgba(245,245,245,0.95) 0%, rgba(235,235,235,0.85) 100%)',
          position: 'relative',
          overflow: 'hidden',
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
        <Typography 
          variant="h4" 
          align="center" 
          sx={{ 
            mb: 6,
            fontWeight: 500,
            color: theme.palette.primary.main,
            position: 'relative',
            '&::after': {
              content: '""',
              display: 'block',
              width: '80px',
              height: '3px',
              background: theme.palette.primary.main,
              margin: '16px auto 0',
              borderRadius: '3px'
            }
          }}
        >
          Мои жизненные принципы
        </Typography>

        <Box
          sx={{
            position: 'relative',
            maxWidth: '900px',
            margin: '0 auto',
            height: { xs: 'auto', md: '600px' },
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          {/* Центральный аватар */}
          <Avatar
            src={avatarImage}
            sx={{
              width: { xs: 120, sm: 150, md: 180 },
              height: { xs: 120, sm: 150, md: 180 },
              border: `3px solid ${theme.palette.primary.main}`,
              boxShadow: theme.shadows[8],
              position: { xs: 'static', md: 'absolute' },
              top: '50%',
              left: '50%',
              transform: { xs: 'none', md: 'translate(-50%, -50%)' },
              mb: { xs: 4, md: 0 },
              zIndex: 2,
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: { xs: 'scale(1.05)', md: 'translate(-50%, -50%) scale(1.05)' },
                boxShadow: theme.shadows[16]
              }
            }}
            alt="Костя Долгий"
          />

          {/* Блоки принципов по кругу */}
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr 1fr', md: '1fr 1fr 1fr 1fr' },
              gap: 3,
              position: 'relative',
              zIndex: 1,
              width: '100%',
              mt: { xs: 0, md: 0 }
            }}
          >
            {principles.map((principle, index) => (
              <Paper
                key={index}
                elevation={3}
                sx={{
                  p: 3,
                  borderRadius: '16px',
                  background: `linear-gradient(135deg, ${theme.palette.background.paper} 0%, #f5f5f5 100%)`,
                  border: `1px solid ${theme.palette.divider}`,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: theme.shadows[6],
                    background: `linear-gradient(135deg, ${theme.palette.grey[100]} 0%, #e0e0e0 100%)`
                  },
                  position: 'relative',
                  overflow: 'hidden',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '4px',
                    height: '100%',
                    background: theme.palette.primary.main,
                    transition: 'all 0.3s ease'
                  },
                  '&:hover::before': {
                    width: '8px'
                  }
                }}
              >
                <Typography 
                  variant="h6" 
                  sx={{ 
                    mb: 1.5,
                    color: theme.palette.primary.dark,
                    fontWeight: 600,
                    display: 'flex',
                    alignItems: 'center',
                    '&::before': {
                      content: '""',
                      display: 'inline-block',
                      width: '12px',
                      height: '12px',
                      borderRadius: '50%',
                      background: theme.palette.primary.main,
                      marginRight: '10px'
                    }
                  }}
                >
                  {principle.title}
                </Typography>
                <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                  {principle.content}
                </Typography>
              </Paper>
            ))}
          </Box>
        </Box>

        {/* Цитата внизу страницы */}
        <Box sx={{ mt: 8, textAlign: 'center', maxWidth: '600px', mx: 'auto' }}>
          <Typography 
            variant="body1" 
            sx={{ 
              fontStyle: 'italic',
              color: theme.palette.text.secondary,
              position: 'relative',
              '&::before, &::after': {
                content: '"\\201C"',
                fontSize: '3rem',
                color: theme.palette.primary.light,
                position: 'absolute',
                opacity: 0.3
              },
              '&::before': {
                top: '-20px',
                left: '-30px'
              },
              '&::after': {
                bottom: '-40px',
                right: '-30px',
                transform: 'rotate(180deg)'
              }
            }}
          >
            Жизнь - это не поиск себя, а создание себя. Каждый день я сознательно работаю над тем, 
            чтобы стать лучшей версией себя во всех сферах жизни.
          </Typography>
        </Box>
      </Box>
    </MainLayout>
  );
};

export default PrinciplesPage;