import React from 'react';
import { Box, useTheme, useMediaQuery } from '@mui/material';
import jsIcon from '../assets/icons/javascript.svg';
import tsIcon from '../assets/icons/typescript.svg';
import playwrightIcon from '../assets/icons/playwright.svg';
import dockerIcon from '../assets/icons/docker.svg';
import reactIcon from '../assets/icons/react.svg';
import nodeIcon from '../assets/icons/nodejs.svg';
import gitIcon from '../assets/icons/git.svg';
import jestIcon from '../assets/icons/jest.svg';

const TechIconsPanel: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const techIcons = [
    { icon: jsIcon, label: 'JavaScript' },
    { icon: tsIcon, label: 'TypeScript' },
    { icon: playwrightIcon, label: 'Playwright' },
    { icon: dockerIcon, label: 'Docker' },
    { icon: reactIcon, label: 'React' },
    { icon: nodeIcon, label: 'Node.js' },
    { icon: gitIcon, label: 'Git' },
    { icon: jestIcon, label: 'Jest' },
  ];

  return (
    <Box
      sx={{
        position: 'fixed',
        left: { xs: 10, sm: 60 },
        top: 0,
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: { xs: 2, sm: 4 },
        zIndex: 1000,
        overflow: 'hidden',
        '&::before, &::after': {
          content: '""',
          position: 'absolute',
          left: 0,
          right: 0,
          height: '150px',
          zIndex: 2,
          pointerEvents: 'none',
        },
        '&::before': {
          top: 0,
          background: 'linear-gradient(to bottom, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0) 100%)',
        },
        '&::after': {
          bottom: 0,
          background: 'linear-gradient(to top, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0) 100%)',
        }
      }}
    >
      <Box
        sx={{
          animation: 'slideDown 30s linear infinite',
          '@keyframes slideDown': {
            '0%': {
              transform: 'translateY(-100%)',
            },
            '100%': {
              transform: 'translateY(100%)',
            },
          },
        }}
      >
        {techIcons.map((tech, index) => (
          <Box
            key={tech.label}
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: { xs: 1, sm: 2 },
              padding: { xs: '6px 10px', sm: '10px 18px' },
              transition: 'all 0.3s ease-in-out',
              marginBottom: { xs: 2, sm: 4 },
              borderRadius: '8px',
              '&:hover': {
                transform: 'scale(1.1)',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                backgroundColor: 'rgba(255,255,255,0.1)',
                '& img': {
                  filter: 'drop-shadow(0 0 8px rgba(0,0,0,0.2))',
                },
                '& span': {
                  color: theme.palette.primary.main,
                }
              },
              '@media (hover: none)': {
                '&:active': {
                  transform: 'scale(1.05)',
                }
              }
            }}
          >
            <Box
              component="img"
              src={tech.icon}
              alt={tech.label}
              sx={{
                width: { xs: 24, sm: 28 },
                height: { xs: 24, sm: 28 },
                objectFit: 'contain',
                transition: 'all 0.3s ease-in-out',
                filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))',
              }}
            />
            <Box
              component="span"
              sx={{
                fontSize: { xs: '0.8rem', sm: '1rem' },
                fontWeight: 600,
                color: 'text.primary',
                display: { xs: 'none', sm: 'block' },
                transition: 'color 0.3s ease-in-out',
                textShadow: '0 1px 2px rgba(0,0,0,0.1)',
              }}
            >
              {tech.label}
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default TechIconsPanel; 