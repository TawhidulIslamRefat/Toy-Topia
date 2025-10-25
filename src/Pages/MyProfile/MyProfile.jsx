import React, {useContext, useState } from 'react';
import {AuthContext} from "../../Provider/AuthProvider/AuthProvider"
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
const MyProfile = () => {
  const {user,setUser,updateUser} = useContext(AuthContext);
  const [name,setName] = useState(user?.displayName ||"");
  const [photoURL,setPhotoURL] = useState(user?.photoURL || "");
  const [editing,setEditing] = useState(false);
  const navigate = useNavigate();

  const handleUpdateProfile = (event) => {
    event.preventDefault();
    updateUser(user,{
      displayName:name,
      photoURL:photoURL,
    })
    .then(()=> {
      setUser({...user,
        displayName:name,
        photoURL:photoURL
      });
      toast.success("Profile Update Successfully",
        {
          onClose:() => navigate("/my-profile"),
        });
        setEditing(false);
    })
    .catch(error => {
      toast.error(error.message);
    });
  }
   return (
    <div>
      <title>ToyTopia - My Profile</title>
        <div className='flex justify-center items-center mt-40'>
          <div className='card bg-white w-[95%] sm:max-w-lg lg:w-[40%] shadow-2xl p-6 sm:p-8 rounded-2xl'>
              <h1 className='text-2xl md:text-3xl font-semibold text-center mb-4 sm:mb-6 border-b pb-2'>
                My Profile
              </h1>
              <div className='flex flex-col items-center mb-5'>
               <img 
               className='w-30 h-30 rounded-full mb-3 border border-red-400'
               src={
                user?.photoURL || "https://img.icons8.com/?size=50&id=23265&format=png"
               } alt="User Avator" />
               <h2 className='text-xl font-semibold'>
                 {
                  user?.displayName
                 }
               </h2>
               <p className='text-gray-600'>
                {
                  user?.email
                }
               </p>
              </div>
              {
                editing? (
                  <form onSubmit={handleUpdateProfile}>
                    <div className='mb-4'>
                      <label className='text-lg font-medium'>
                        Name
                      </label>
                      <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className='border p-1 w-full'
                      placeholder='Enter Your Name'
                      required
                      />
                    </div>
                    <div className='mb-4'>
                      <label className='text-lg font-medium'>
                        Photo URL
                      </label>
                      <input
                      type="text"
                      value={photoURL}
                      onChange={(e) => setPhotoURL(e.target.value)}
                      className='border p-1 w-full'
                      placeholder='Enter Your photo URL'
                      required
                      />
                    </div>
                    <div className='flex gap-2'>
                      <button type='submit'
                      className='btn bg-green-400 w-full text-white'
                      >
                       Update Profile
                      </button>
                    </div>
                  </form>
                ) :(<button
                type='button'
                onClick={()=> setEditing(true)}
                className='btn bg-red-400 text-white'
                >
                   Edit Profile
                </button>)
              }
          </div>
        </div>
    </div>
  );
};

export default MyProfile;