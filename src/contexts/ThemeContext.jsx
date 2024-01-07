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

  // // This retrieves the value stored in the local storage under the key 'theme' and assigns it to the variable savedTheme.
  // const savedTheme = localStorage.getItem('theme')
  // //if value exists, it converts stored string into a js object assigning it to initialTheme
  // //if savedTheme is false, it means no theme has changed. No value is stored/added into the localStorage bc nothing has changed.
  // const initialTheme = savedTheme ?  JSON.parse(savedTheme) : { isDarkMode: false };


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

//useContext:
//is a way for react to share values (like states or functions) without having to explicitly pass through as props at every level.

//context = central place to store and manage certain pieces of info or functionality that you want to be accessible by various components.

//Using useContext, you can create a global variable (or a set of variables) and make them accessible to any component. This helps avoid "prop drilling," where you pass data through multiple levels of components. 

//examples: themes, user authentication status, language preferences, or anything that can be passed as a prop (data/functions that you want shared across multiple components). 