import { createContext, useReducer } from 'react';

export const ThemeContext = createContext();

const themeReducer = () => {};

export function ThemeProvider({ children }) {
  const [state, dispatch] = useReducer(themeReducer, {
    color: 'darkslategray',
  });
  return (
    <ThemeContext.Provider value={{ color: 'darkslategray' }}>
      {children}
    </ThemeContext.Provider>
  );
}
