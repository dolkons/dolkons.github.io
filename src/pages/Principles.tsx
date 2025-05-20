import React, { useRef, useEffect, useState } from 'react';
import { Box, Typography, Avatar, Paper, useTheme, useMediaQuery } from '@mui/material';
import MainLayout from '../layouts/MainLayout';
import avatarImage from '../assets/images/avatar.jpg';

const PrinciplesPage: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const containerRef = useRef<HTMLDivElement>(null);
  const blockRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [lines, setLines] = useState<{ x1: number; y1: number; x2: number; y2: number }[]>([]);

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

  const positions = [
    { top: '10%', left: '50%', transform: 'translateX(-50%)' },
    { top: '20%', left: '80%', transform: 'translateX(-50%)' },
    { top: '50%', left: '90%', transform: 'translateX(-50%)' },
    { top: '80%', left: '80%', transform: 'translateX(-50%)' },
    { top: '90%', left: '50%', transform: 'translateX(-50%)' },
    { top: '80%', left: '20%', transform: 'translateX(-50%)' },
    { top: '50%', left: '10%', transform: 'translateX(-50%)' },
    { top: '20%', left: '20%', transform: 'translateX(-50%)' },
  ];

  useEffect(() => {
    if (!containerRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const centerX = containerRect.left + containerRect.width / 2;
    const centerY = containerRect.top + containerRect.height / 2;

    const newLines = blockRefs.current.map((block) => {
      if (!block) return { x1: 0, y1: 0, x2: 0, y2: 0 };

      const blockRect = block.getBoundingClientRect();
      const blockX = blockRect.left + blockRect.width / 2;
      const blockY = blockRect.top + blockRect.height / 2;

      return {
        x1: centerX - containerRect.left,
        y1: centerY - containerRect.top,
        x2: blockX - containerRect.left,
        y2: blockY - containerRect.top,
      };
    });

    setLines(newLines);
  }, [isMobile]);

  return (
    <MainLayout>
      <Box
        sx={{
          height: isMobile ? 'auto' : '100vh',
          minHeight: isMobile ? '100vh' : 'auto',
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
        <Typography
          variant="h4"
          align="center"
          sx={{
            mb: isMobile ? 6 : 4,
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
          ref={containerRef}
          sx={{
            position: 'relative',
            width: '100%',
            height: isMobile ? 'auto' : 'calc(100vh - 200px)',
            minHeight: isMobile ? 'auto' : '500px',
            maxHeight: isMobile ? 'none' : '800px',
            margin: '0 auto',
          }}
        >
          {/* Центральный аватар */}
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              zIndex: 2,
              width: isMobile ? '120px' : '160px',
              height: isMobile ? '120px' : '160px',
            }}
          >
            <Avatar
              src={avatarImage}
              sx={{
                width: '100%',
                height: '100%',
                border: `3px solid ${theme.palette.primary.main}`,
                boxShadow: theme.shadows[8],
                transition: 'all 0.5s ease',
                '&:hover': {
                  transform: 'scale(1.05)',
                  boxShadow: theme.shadows[16]
                }
              }}
              alt="Костя Долгий"
            />
          </Box>

          {/* Блоки принципов */}
          {principles.map((principle, index) => {
            const angle = (360 / principles.length) * index;
            const radius = isMobile ? 0 : 240; // радиус круга в px
            const angleInRad = (angle - 90) * (Math.PI / 180); // -90, чтобы начать сверху

            const top = `calc(50% + ${radius * Math.sin(angleInRad)}px)`;
            const left = `calc(50% + ${radius * Math.cos(angleInRad)}px)`;

  return (
    <Paper
      key={index}
      elevation={3}
      sx={{
        p: 2,
        borderRadius: '16px',
        background: `linear-gradient(135deg, ${theme.palette.background.paper} 0%, #f5f5f5 100%)`,
        border: `1px solid ${theme.palette.divider}`,
        transition: 'all 0.3s ease',
        position: isMobile ? 'relative' : 'absolute',
        width: isMobile ? '100%' : '180px',
        maxWidth: isMobile ? '400px' : 'none',
        margin: isMobile ? '16px auto' : '0',
        zIndex: 3,
        '&:hover': {
          transform: isMobile ? 'none' : 'translate(-50%, -50%) scale(1.05)',
          boxShadow: theme.shadows[6],
          background: `linear-gradient(135deg, ${theme.palette.grey[100]} 0%, #e0e0e0 100%)`
        },
        ...(!isMobile && {
          top,
          left,
          transform: 'translate(-50%, -50%)',
        }),
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
          fontSize: isMobile ? '1.1rem' : '1rem',
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
        {principle.title}
      </Typography>
      <Typography 
        variant="body2" 
        sx={{ 
          color: theme.palette.text.secondary,
          fontSize: isMobile ? '0.9rem' : '0.8rem'
        }}
      >
        {principle.content}
      </Typography>
    </Paper>
  );
})}
        </Box>

        {/* Цитата внизу */}
        {isMobile && (
          <Box sx={{ mt: 4, textAlign: 'center', maxWidth: '600px', mx: 'auto' }}>
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
              Жизнь — это не поиск себя, а создание себя. Каждый день я сознательно работаю над тем, 
              чтобы стать лучшей версией себя во всех сферах жизни.
            </Typography>
          </Box>
        )}
      </Box>
    </MainLayout>
  );
};

export default PrinciplesPage;
