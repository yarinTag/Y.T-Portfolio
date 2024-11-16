'use strict';
import React from 'react';

interface IContextProps {
  theme: 'white' | '#0D0D0D';
  toggleTheme: (value: boolean) => void;
}

export const ThemeContext = React.createContext<IContextProps>({
  theme: 'white',
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = React.useState<'white' | '#0D0D0D'>('white');

  const toggleTheme = (value: boolean) => {
    setTheme(value ? '#0D0D0D' : 'white');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div
        className={`bg-[${theme}] text-${theme === '#0D0D0D' ? 'white' : '#0D0D0D'}`}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
};
