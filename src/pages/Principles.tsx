import React from 'react';
import { Box, Typography, Avatar, Paper, useTheme, useMediaQuery, Grid, Breadcrumbs, Link as MuiLink } from '@mui/material';
import MainLayout from '../layouts/MainLayout';
import avatarImage from '../assets/images/avatar.jpg';
import HomeIcon from '@mui/icons-material/Home';
import { Link as RouterLink } from 'react-router-dom';

const principles = [
  { title: 'Семья', content: 'Здоровые отношения в семье, воспитание детей и помощь своим родным' },
  { title: 'Здоровье', content: 'Здоровое, умеренное питание, регулярные проверки здоровья и уход за собой' },
  { title: 'Спорт', content: 'Ежедневная практика асан, поддержание себя в хорошей физической форме. Бег 3-4 раза в неделю' },
  { title: 'Карьера', content: 'Изучение React и ИИ, движение в сторону фронтенд-разработки' },
  { title: 'Финансы', content: 'Инвестиции, пассивный доход, финансовая подушка' },
  { title: 'Развитие', content: 'Изучение философии йоги' },
  { title: 'Творчество', content: 'Обучение игре на гитаре' },
  { title: 'Духовность', content: 'Медитации, йога, соблюдение принципов Яма и Нияма' },
];

// Индексы для сетки 3x3, где центр — аватар, остальные — принципы
const gridMap = [
  0, 1, 2,
  7, null, 3,
  6, 5, 4
];

const PrincipleBlock = ({ title, content }: { title: string; content: string }) => {
  const theme = useTheme();
  return (
    <Paper
      elevation={3}
      sx={{
        p: 2,
        borderRadius: '16px',
        background: `linear-gradient(135deg, ${theme.palette.background.paper} 0%, #f5f5f5 100%)`,
        border: `1px solid ${theme.palette.divider}`,
        transition: 'all 0.3s ease',
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        '&:hover': {
          boxShadow: theme.shadows[6],
          background: `linear-gradient(135deg, ${theme.palette.grey[100]} 0%, #e0e0e0 100%)`
        }
      }}
    >
      <Typography
        variant="h6"
        sx={{
          mb: 1,
          color: theme.palette.primary.dark,
          fontWeight: 600,
          display: 'flex',
          alignItems: 'center',
          fontSize: { xs: '1.1rem', md: '1rem' },
          '&::before': {
            content: '""',
            display: 'inline-block',
            width: '10px',
            height: '10px',
            borderRadius: '50%',
            background: theme.palette.primary.main,
            marginRight: '8px'
          }
        }}
      >
        {title}
      </Typography>
      <Typography
        variant="body2"
        sx={{
          color: theme.palette.text.secondary,
          fontSize: { xs: '0.9rem', md: '0.8rem' }
        }}
      >
        {content}
      </Typography>
    </Paper>
  );
};

const PrinciplesPage: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <MainLayout>
      <Box
        sx={{
          minHeight: '100vh',
          py: isMobile ? 8 : 4,
          px: { xs: 2, sm: 4 },
          background: 'linear-gradient(180deg, rgba(245,245,245,0.95) 0%, rgba(235,235,235,0.85) 100%)',
          position: 'relative',
          overflow: isMobile ? 'visible' : 'hidden',
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
        {/* Хлебные крошки */}
        <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 2 }}>
          <MuiLink
            component={RouterLink}
            to="/"
            sx={{ display: 'flex', alignItems: 'center', color: 'inherit' }}
            underline="hover"
          >
            <HomeIcon sx={{ mr: 0.5, fontSize: 18 }} />
            Главная
          </MuiLink>
          <Typography color="text.primary">Принципы</Typography>
        </Breadcrumbs>
        <Typography
          variant="h4"
          align="center"
          sx={{
            mb: isMobile ? 6 : 4,
            fontWeight: 500,
            color: 'text.secondary',
            position: 'relative',
          }}
        >
          Мои жизненные принципы
        </Typography>

        {isMobile ? (
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3 }}>
            <Avatar
              src={avatarImage}
              sx={{
                width: 120,
                height: 120,
                border: `3px solid ${theme.palette.primary.main}`,
                boxShadow: theme.shadows[8],
                mb: 3
              }}
              alt="Костя Долгий"
            />
            {principles.map((p, i) => (
              <Box key={i} sx={{ width: '100%', maxWidth: 400 }}>
                <PrincipleBlock title={p.title} content={p.content} />
              </Box>
            ))}
          </Box>
        ) : (
          <Grid
            container
            spacing={3}
            sx={{
              width: 600,
              maxWidth: '100%',
              height: 600,
              margin: '0 auto',
              position: 'relative',
              alignItems: 'center',
              justifyContent: 'center',
              display: 'grid',
              gridTemplateRows: 'repeat(3, 1fr)',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 3
            }}
          >
            {gridMap.map((idx, i) =>
              idx === null ? (
                <Box
                  key="avatar"
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%',
                    height: '100%',
                  }}
                >
                  <Avatar
                    src={avatarImage}
                    sx={{
                      width: 160,
                      height: 160,
                      border: '1px solid',
                      borderColor: 'primary.main',
                      boxShadow: theme.shadows[8],
                    }}
                    alt="Костя Долгий"
                  />
                </Box>
              ) : (
                <PrincipleBlock
                  key={idx}
                  title={principles[idx].title}
                  content={principles[idx].content}
                />
              )
            )}
          </Grid>
        )}

        {/* Цитата внизу */}
        <Box sx={{ mt: 6, textAlign: 'center', maxWidth: '600px', mx: 'auto' }}>
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
            Жизнь — самая большая ценность и счастье. Моя миссия - работать на благо всех живых существ вокруг
          </Typography>
        </Box>
      </Box>
    </MainLayout>
  );
};

export default PrinciplesPage;
