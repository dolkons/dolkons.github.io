import React, { useState, useEffect } from 'react';
import { Typography, TypographyProps } from '@mui/material';

interface TypewriterTextProps extends TypographyProps {
  text: string;
  delay?: number;
  onComplete?: () => void;
}

const TypewriterText: React.FC<TypewriterTextProps> = ({ 
  text, 
  delay = 100, 
  onComplete,
  ...props 
}) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, delay);

      return () => clearTimeout(timeout);
    } else if (onComplete) {
      onComplete();
    }
  }, [currentIndex, delay, text, onComplete]);

  return (
    <Typography {...props}>
      {displayText}
      <span style={{ 
        display: 'inline-block',
        width: '2px',
        height: '1em',
        backgroundColor: 'currentColor',
        marginLeft: '2px',
        animation: 'blink 1s step-end infinite'
      }} />
    </Typography>
  );
};

export default TypewriterText; 