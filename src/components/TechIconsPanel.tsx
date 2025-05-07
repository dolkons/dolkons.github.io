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
          height: '100px',
          zIndex: 2,
          pointerEvents: 'none',
        },
        '&::before': {
          top: 0,
          background: 'linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)',
        },
        '&::after': {
          bottom: 0,
          background: 'linear-gradient(to top, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)',
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
              padding: { xs: '4px 8px', sm: '8px 16px' },
              transition: 'transform 0.2s',
              marginBottom: { xs: 2, sm: 4 },
              '&:hover': {
                transform: 'scale(1.1)',
              },
            }}
          >
            <Box
              component="img"
              src={tech.icon}
              alt={tech.label}
              sx={{
                width: { xs: 20, sm: 24 },
                height: { xs: 20, sm: 24 },
                objectFit: 'contain'
              }}
            />
            <Box
              component="span"
              sx={{
                fontSize: { xs: '0.7rem', sm: '0.9rem' },
                fontWeight: 500,
                color: 'text.primary',
                display: { xs: 'none', sm: 'block' }
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