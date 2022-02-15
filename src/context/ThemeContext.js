import { createContext, useReducer } from 'react';

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  return (
    <ThemeContext.Provider value={{ color: 'darkslategray' }}>
      {children}
    </ThemeContext.Provider>
  );
}
