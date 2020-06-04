import React, { createContext } from 'react';
import { useDarkMode } from '../utils/useDarkMode';


export const ThemeContext = createContext();

export const ThemeProvider = (props) => {
  const [theme, themeToggler, mountedComponent] = useDarkMode();
  return (
    <ThemeContext.Provider value={[theme, themeToggler, mountedComponent]}>
      {props.children}
    </ThemeContext.Provider>
  )
}
