import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import { Outlet } from 'react-router';
import { ToastContainer } from 'react-toastify';

const HomeLayout = () => {
    return (
        <div className='bg-[#F6F6F4] flex flex-col'>
            <ToastContainer position="top-right" autoClose={3000} />
            <header>
                <nav>
                    <Navbar></Navbar>
                </nav>
            </header>
            <main className='flex-1 min-h-screen'>
                 <Outlet></Outlet>
            </main>
            <footer>
              <Footer></Footer>
            </footer>
        </div>
    );
};

export default HomeLayout;