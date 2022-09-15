import React, { useEffect } from 'react';
import './App.css';
import { ThemeProvider } from 'react-bootstrap';
import API from './services/api.services';
import Layout from './layout';
import UnauthRoutes from './unauthpages/unauth.routes';

function App() {
  const api = new API();

  const isAuthenticated = true;

  const onLoad = async () => {
    let response = await api.login('Joe', '01011000');
    console.log(response);
  }

  useEffect(() => { onLoad() })

  return (
    <div className="App">
      <ThemeProvider
        breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
        minBreakpoint="xxs"
      >
        {
          (isAuthenticated) ? (<Layout />) : (<UnauthRoutes />)
        }
      </ThemeProvider>
    </div>
  );
}

export default App;
