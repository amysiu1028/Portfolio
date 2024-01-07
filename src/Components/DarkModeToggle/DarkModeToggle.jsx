// import Switch from 'react-switch';
import { useTheme } from '../../contexts/ThemeContext';

const DarkModeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <>
      {/* <Switch/> */}
      <div className="moon-sun-toggle" onClick={toggleTheme}>
    {isDarkMode ? '🌙' : '☀️'} </div>
    </>
    
      // onChange={toggleTheme}
      // checked={isDarkMode}
      // onColor="#3C3C3C"
      // offColor="#D3D3D3"
      // checkedIcon={false}
      // uncheckedIcon={false}
  )
};

export default DarkModeToggle;
