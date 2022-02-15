import { createContext, useReducer } from 'react';

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  // future custom logic will go here

  return (
    <ThemeContext.Provider value={{ color: 'darkslategray' }}>
      {children}
    </ThemeContext.Provider>
  );
}
