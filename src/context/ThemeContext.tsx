import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type ThemeMode = 'cyberpunk' | 'matrix' | 'midnight' | 'sunset';

interface Theme {
  primary: string;
  secondary: string;
  background: string;
  surface: string;
  text: string;
  accent: string;
  code: {
    background: string;
    text: string;
    comment: string;
    keyword: string;
    string: string;
    function: string;
    variable: string;
  };
}

const themes: Record<ThemeMode, Theme> = {
  cyberpunk: {
    primary: '#f0f',
    secondary: '#0ff',
    background: '#000',
    surface: '#1a1a2e',
    text: '#fff',
    accent: '#f0f',
    code: {
      background: '#1a1a2e',
      text: '#fff',
      comment: '#666',
      keyword: '#f0f',
      string: '#0ff',
      function: '#f90',
      variable: '#0f0'
    }
  },
  matrix: {
    primary: '#00ff00',
    secondary: '#003300',
    background: '#000000',
    surface: '#001100',
    text: '#00ff00',
    accent: '#00ff00',
    code: {
      background: '#001100',
      text: '#00ff00',
      comment: '#006600',
      keyword: '#00ff00',
      string: '#33ff33',
      function: '#00cc00',
      variable: '#00ff33'
    }
  },
  midnight: {
    primary: '#60a5fa',
    secondary: '#818cf8',
    background: '#0f172a',
    surface: '#1e293b',
    text: '#f1f5f9',
    accent: '#34d399',
    code: {
      background: '#1e293b',
      text: '#f1f5f9',
      comment: '#64748b',
      keyword: '#60a5fa',
      string: '#34d399',
      function: '#f59e0b',
      variable: '#818cf8'
    }
  },
  sunset: {
    primary: '#f59e0b',
    secondary: '#ef4444',
    background: '#18181b',
    surface: '#27272a',
    text: '#fafafa',
    accent: '#f59e0b',
    code: {
      background: '#27272a',
      text: '#fafafa',
      comment: '#71717a',
      keyword: '#f59e0b',
      string: '#ef4444',
      function: '#3b82f6',
      variable: '#a855f7'
    }
  }
};

interface ThemeContextType {
  theme: ThemeMode;
  currentTheme: Theme;
  setTheme: (theme: ThemeMode) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<ThemeMode>('midnight');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as ThemeMode;
    if (savedTheme && themes[savedTheme]) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.documentElement.style.setProperty('--primary', themes[theme].primary);
    document.documentElement.style.setProperty('--background', themes[theme].background);
    // ... autres propriétés CSS
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, currentTheme: themes[theme], setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}; 