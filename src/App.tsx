import React, { useEffect } from 'react';
import './App.css';
import { ThemeProvider } from 'react-bootstrap';
import API from './services/api.services';
import Layout from './layout';
import UnauthRoutes from './unauthpages/unauth.routes';
import { BrowserRouter } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { logedin, thememode } from './context/atoms';
import { createTheme } from '@mui/material';

function App() {
  const api = new API();

  const [isAuthenticated, setLogedIn] = useRecoilState(logedin);
  const [themeMode, setThemeMode] = useRecoilState(thememode);

  const theme = createTheme({
    palette: {
      primary: {
        light: '#757ce8',
        main: '#3f50b5',
        dark: '#002884',
        contrastText: '#fff',
      },
      mode: (themeMode == 'light') ? 'light' : 'dark',
    },
  });

  const onLoad = async () => {
    setLogedIn(isAuthenticated);
  }

  useEffect(() => { onLoad() })

  return (
    <div className={`App ${themeMode}`}>
      <ThemeProvider
        breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
        minBreakpoint="xxs"
        theme={theme}
      >
        <BrowserRouter>
          {
            (isAuthenticated) ? (<Layout />) : (<UnauthRoutes />)
          }
        </BrowserRouter>

      </ThemeProvider>
    </div>
  );
}

export default App;
