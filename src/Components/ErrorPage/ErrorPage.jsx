import React from 'react';
import Error from '../../assets/undraw_page-not-found_6wni.svg'
import { Link } from 'react-router';
const ErrorPage = () => {
    return (
        <div>
            <div className=' flex justify-center items-center mt-25'>
                <img  src={Error} alt="" /> 
            </div>
            <h1 className='text-2xl font-medium text-center mt-6 text-[#020203]'>Page Not Found</h1>

            <div className='flex justify-center items-center mt-10'>
                <Link to='/' className='text-xl font-medium text-white bg-[#6C63FF] px-6 py-2 rounded-[8px]'>
                  Go Back
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;