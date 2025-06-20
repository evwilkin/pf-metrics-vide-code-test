import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(() => {
    // Check localStorage for saved theme preference
    const savedTheme = localStorage.getItem('pf-theme');
    return savedTheme === 'dark';
  });

  useEffect(() => {
    // Apply theme to document HTML element
    const html = document.documentElement;

    if (isDarkTheme) {
      html.classList.add('pf-v6-theme-dark');
      localStorage.setItem('pf-theme', 'dark');
    } else {
      html.classList.remove('pf-v6-theme-dark');
      localStorage.setItem('pf-theme', 'light');
    }
  }, [isDarkTheme]);

  const toggleTheme = () => {
    setIsDarkTheme((prev) => !prev);
  };

  const value = {
    isDarkTheme,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
