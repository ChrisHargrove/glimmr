import { createContext, useContext } from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface DefaultTheme {} // <- empty default

const ThemeContext = createContext<DefaultTheme | undefined>(undefined);

export const ThemeProvider = ThemeContext.Provider;

export const useTheme = (): DefaultTheme | undefined =>
  useContext(ThemeContext);
