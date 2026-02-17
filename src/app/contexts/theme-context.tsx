import { createTheme, ThemeProvider, useMediaQuery } from '@mui/material';
import { createContext, ReactNode, useContext, useMemo, useState } from 'react';

interface ThemeModeContextValue {
  toggleColorMode: () => void;
  mode: 'light' | 'dark';
}

export const ThemeModeContext = createContext({} as ThemeModeContextValue);

export function ThemeModeContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const storedMode = localStorage.getItem('themeMode');

  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: light)');

  const [mode, setMode] = useState<'light' | 'dark'>(
    storedMode === 'light' || storedMode === 'dark'
      ? (storedMode as 'light' | 'dark')
      : prefersDarkMode
        ? 'dark'
        : 'light',
  );

  function toggleColorMode() {
    setMode((prev) => {
      const nextMode = prev === 'light' ? 'dark' : 'light';
      localStorage.setItem('themeMode', nextMode);
      return nextMode;
    });
  }
  const theme = useMemo(
    () =>
      createTheme({
        palette: { mode },
      }),
    [mode],
  );

  return (
    <ThemeModeContext.Provider value={{ toggleColorMode, mode }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeModeContext.Provider>
  );
}

export function useThemeMode() {
  const context = useContext(ThemeModeContext);
  if (!context)
    throw new Error(
      'useThemeMode must be used within ThemeModeContextProvider',
    );
  return context;
}
