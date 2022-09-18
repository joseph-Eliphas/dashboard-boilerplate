import React, { useEffect } from 'react';
import './App.css';
import { ThemeProvider } from 'react-bootstrap';
import API from './services/api.services';
import Layout from './layout';
import UnauthRoutes from './unauthpages/unauth.routes';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

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
      <RecoilRoot>
        <ThemeProvider
          breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
          minBreakpoint="xxs"
        >
          <BrowserRouter>
            {
              (isAuthenticated) ? (<Layout />) : (<UnauthRoutes />)
            }
          </BrowserRouter>

        </ThemeProvider>
      </RecoilRoot>
    </div>
  );
}

export default App;
