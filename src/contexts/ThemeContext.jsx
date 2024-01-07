//context created to manage theme globally across application
//useContext hook is used to access theme state and toggle 
import { createContext, useContext, useState } from 'react';

//create context to manage theme globally across this app
const ThemeContext = createContext();

// useTheme function = custom hook created using the useContext hook. Allows you to access the current theme state and the toggleTheme function within your components.
export const useTheme = () => {
  return useContext(ThemeContext);
};

// ThemeProvider component that wraps the entire application and provides the theme context
export const ThemeProvider = ({ children }) => {
  //uses useState to track current state of dark or light mode
  const [isDarkMode, setIsDarkMode] = useState(false);

  //function toggles b/t dark and light modes. It's a simple function that updates the isDarkMode state.
  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const theme = isDarkMode ? { background: '#333', color: '#fff' } : { background: '#fff', color: '#333' }
  return (
      // Providing theme, isDarkMode, and toggleTheme to the context
    <ThemeContext.Provider value={{isDarkMode, toggleTheme, theme }}>
      {/* almost like props, it passes these variables to the child components */}
      {children}
    </ThemeContext.Provider>
  );
};