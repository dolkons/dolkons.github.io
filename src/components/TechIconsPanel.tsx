import React from 'react';
import { Box, Typography, useTheme, useMediaQuery } from '@mui/material';
import jsIcon from '../assets/icons/javascript.svg';
import tsIcon from '../assets/icons/typescript.svg';
import playwrightIcon from '../assets/icons/playwright.svg';
import dockerIcon from '../assets/icons/docker.svg';
import reactIcon from '../assets/icons/react.svg';
import nodeIcon from '../assets/icons/nodejs.svg';
import gitIcon from '../assets/icons/git.svg';
import gitlabCIIcon from '../assets/icons/gitlabci.svg';
import vscodeIcon from '../assets/icons/vscode.svg';
import qaIcon from '../assets/icons/qa.svg';
import allureIcon from '../assets/icons/allure.svg';

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
    { icon: gitlabCIIcon, label: 'Gitlab CI' },
    { icon: vscodeIcon, label: 'VSCode' },
    { icon: qaIcon, label: 'QA' },
    { icon: allureIcon, label: 'Allure' },
  ];

  return (
    <Box
      sx={{
        position: 'fixed',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, 1%)',
        width: '100%',
        maxWidth: '800px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 2,
        zIndex: 1000,
        overflow: 'hidden'
      }}
    >
      <Typography
        variant={isMobile ? "subtitle2" : "subtitle1"}
        sx={{
          color: 'text.secondary',
          fontWeight: 500,
          opacity: 0.7,
          letterSpacing: '0.05em',
          mb: 2
        }}
      >
        Профессиональные навыки
      </Typography>

      <Box
        sx={{
          display: 'flex',
          overflow: 'hidden',
          gap: { xs: 2, sm: 4 },
          animation: 'slideRight 90s linear infinite',
          '@keyframes slideRight': {
            '0%': {
              transform: 'translateX(0%)',
            },
            '100%': {
              transform: 'translateX(-50%)',
            },
          },
        }}
      >
        {[...techIcons, ...techIcons, ...techIcons].map((tech) => (
          <Box
            key={tech.label}
            sx={{
              display: 'flex',
              flexShrink: 0,
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