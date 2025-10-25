import React from 'react';
import { Navigate } from 'react-router';
import { toast } from 'react-toastify';

const NewsLetter = () => {

    const handlesubscribe =(e) => {
        e.preventDefault();
       toast.success("Thank For Joining US !");
       e.target.reset();
    }
    return (
        <div className='bg-linear-to-r from-[#FA6775]  to-[#F52549]'>
             <div className='flex flex-col justify-center items-center py-10'> 
                <h2 className='text-xl md:text-2xl lg:text-4xl font-bold'>Join Our Kid Toy Newsletter</h2>
                <p className='text-[14px] md:text-[18px] text-xl font-medium py-6 text-center'>Get the latest updates,exclusive offer,and community,news straight to your inbox</p>
                <div className='w-full gap-6'>
                        <form onSubmit={handlesubscribe} className='w-full flex items-center justify-center gap-5'>
                            <input className=' px-4 py-2 w-[60%]  md:w-[30%] bg-[#F6F6F4] text-gray-400 rounded-full' type="email" name="" id="" placeholder='Enter Your Email' required />
                        <button className=' btn text-[12px] md:text-[16px] bg-black text-white rounded-full border-none outline-none px-3 md:px-5 py-1 hover:bg-white hover:text-black '>Subscribe</button>
                        </form>
                    
                </div>
             </div>
        </div>
    );
};

export default NewsLetter;