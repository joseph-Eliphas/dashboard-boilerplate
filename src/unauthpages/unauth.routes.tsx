import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import Login from '../authpages/login';
import Recover from '../authpages/recover';
import Reset from '../authpages/reset';

const UnauthRoutes = () => {

    useEffect(() => {

    })

    return (
        <Router>
            <div className="d-flex align-items-center justify-content-center h-100">
                <Routes>
                    <Route path='/' element={<Login />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/reset' element={<Reset />} />
                    <Route path='/recover' element={<Recover />} />
                </Routes>
            </div>
        </Router>
    );
}

export default UnauthRoutes;