import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Home/Footer/Footer';

const MainLayout = () => {
    return (
        <div>
            <Navbar />
           
            <Outlet />
             <Footer />
        </div>
    );
};

export default MainLayout;