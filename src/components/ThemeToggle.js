import React from 'react';
import { Button, Tooltip } from '@patternfly/react-core';
import { MoonIcon, SunIcon } from '@patternfly/react-icons';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle = () => {
  const { isDarkTheme, toggleTheme } = useTheme();

  return (
    <Tooltip
      content={isDarkTheme ? 'Switch to light theme' : 'Switch to dark theme'}
    >
      <Button
        variant="plain"
        aria-label={
          isDarkTheme ? 'Switch to light theme' : 'Switch to dark theme'
        }
        onClick={toggleTheme}
        className="pf-v6-u-color-light-100"
      >
        {isDarkTheme ? <SunIcon /> : <MoonIcon />}
      </Button>
    </Tooltip>
  );
};

export default ThemeToggle;
