import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/shared/Navbar';
import Footer from '../Components/shared/Footer';
import { ToastContainer } from 'react-toastify';

const RootLayout = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
            <ToastContainer />
        </div>
    );
};

export default RootLayout;