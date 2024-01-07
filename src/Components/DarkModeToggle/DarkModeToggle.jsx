import { useTheme } from '../../contexts/ThemeContext';

const DarkModeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <>
      <div className="moon-sun-toggle" onClick={toggleTheme}>
    {isDarkMode ? '🌙' : '☀️'} </div>
    </>
  )
};

export default DarkModeToggle;
