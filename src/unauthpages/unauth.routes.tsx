import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import Login from './login';
import Recover from './recover';
import Reset from './reset';

const UnauthRoutes = () => {

    useEffect(() => {

    })

    return (
        <div className="d-flex align-items-center justify-content-center h-100">
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/login' element={<Login />} />
                <Route path='/reset' element={<Reset />} />
                <Route path='/recover' element={<Recover />} />
            </Routes>
        </div>
    );
}

export default UnauthRoutes;