import ReactDOM from 'react-dom/client';
import App from './Components/App/App.jsx';
import './index.css';
import { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, useTheme } from './contexts/ThemeContext.jsx';

const ThemeWrapper = () => {
  const { theme } = useTheme();

  useEffect(() => {
    document.body.style.transition = 'background-color 0.3s, color 0.3s';
    document.body.style.backgroundColor = theme.background;
    document.body.style.color = theme.color;
  }, [theme]);

  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider>
    <ThemeWrapper/>
  </ThemeProvider>
);