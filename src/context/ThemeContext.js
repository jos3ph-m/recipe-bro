import { createContext, useReducer } from 'react';

export const ThemeContext = createContext();

const themeReducer = () => {};

export function ThemeProvider({ children }) {
  useReducer(themeReducer);
  return (
    <ThemeContext.Provider value={{ color: 'darkslategray' }}>
      {children}
    </ThemeContext.Provider>
  );
}
