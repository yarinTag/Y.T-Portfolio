'use strict';
import React from 'react';

interface IContextProps {
  theme: 'white' | 'black';
  toggleTheme: (value: boolean) => void;
}

export const ThemeContext = React.createContext<IContextProps>({
  theme: 'white',
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = React.useState<'white' | 'black'>('white');

  const toggleTheme = (value: boolean) => {
    setTheme(value ? 'black' : 'white');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div
        className={`bg-${theme} text-${theme === 'black' ? 'white' : 'black'}`}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
};
