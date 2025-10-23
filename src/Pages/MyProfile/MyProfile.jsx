import React, {  useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";

const MyProfile = () => {
  const {user, setUser,updateUser} = useContext(AuthContext);
  const [name, setName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");


  const handleUpdate = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
     
    updateUser(user,{
        displayName:name,
        photoURL:photoURL,
    })
    .then(() => {
        setUser({...user,displayName:name,photoURL:photoURL});
        setSuccess("Profile update successfully");
    })
    .catch(error => {
        setError(error.message);
    });
  };

  return (
    <div>
      <div className="min-h-screen flex justify-center items-center bg-base-300">
        <div className="card w-[30%] bg-white shadow-xl p-8 rounded-2xl">
          <h1 className="text-3xl font-semibold text-center mb-5 border-b pb-3">
            My Profile
          </h1>
          <div className="flex flex-col items-center mb-5">
            <img
              className="w-30 h-30 rounded-full mb-3 border"
              src={
                user?.photoURL ||
                "https://img.icons8.com/?size=60&id=9q3GMpxNIMjC&format=png"
              }
              alt="User Avatar"
            />
            <h3 className="text-xl font-semibold">{user?.displayName}</h3>
            <p className="text-gray-500">{user?.email}</p>
          </div>

          <form onSubmit={handleUpdate}>
            <div className="form-control mb-4">
              <label className="label text-lg font-medium">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="input input-bordered w-full"
                placeholder="Enter new name"
                required
              />
            </div>

            <div className="form-control mb-4">
              <label className="label text-lg font-medium">Photo URL</label>
              <input
                type="text"
                value={photoURL}
                onChange={(e) => setPhotoURL(e.target.value)}
                className="input input-bordered w-full"
                placeholder="Enter new photo URL"
              />
            </div>
            
          <button type="submit" className="btn btn-neutral w-full">
            Update Profile
          </button>
          </form>
           {success && (
          <p className="text-green-600 text-center mt-3 font-medium">
            {success}
          </p>
        )}
        {error && (
          <p className="text-red-500 text-center mt-3 font-medium">{error}</p>
        )}
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
