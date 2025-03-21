import React from 'react';
import Cookies from 'js-cookie';
import {Navigate, Outlet} from 'react-router-dom';

export default function PrivateRoute() {
    const token = Cookies.get('access_token');
    console.log(Cookies.get('access_token'));
    console.log("token", token);
    if (!token) {
        console.log("No token");
        return <Navigate to="/" />;
    }
    return  <Outlet />; 
  
}
