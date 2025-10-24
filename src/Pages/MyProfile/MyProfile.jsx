import React, { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import { toast, ToastContainer } from "react-toastify";
import { useLocation, useNavigate } from "react-router";

const MyProfile = () => {
  const { user, setUser, updateUser } = useContext(AuthContext);
  const [name, setName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
  const [editing, setEditing] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleUpdate = (e) => {
    e.preventDefault();
    updateUser(user, {
      displayName: name,
      photoURL: photoURL,
    })
      .then(() => {
        setUser({ ...user, displayName: name, photoURL: photoURL });
        toast.success("Profile Update Successful!", {
          onClose: () => navigate(location.state?.from || "/my-profile"),
        });
        setEditing(false);
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div>
      <title> ToyTopia - My Profile</title>
      <div className="flex justify-center items-center  mt-40">
        <div className="card bg-white w-[95%] max-w-md sm:max-w-lg lg:w-[30%] shadow-xl p-6 sm:p-8 rounded-2xl">
          <h1 className="text-2xl sm:text-3xl lg:text-3xl font-semibold text-center mb-4 sm:mb-6 border-b pb-2">
            My Profile
          </h1>
          <div className="flex flex-col items-center mb-5">
            <img
              className="w-30 h-30 rounded-full mb-3 border border-red-400"
              src={
                user?.photoURL ||
                "https://img.icons8.com/?size=60&id=9q3GMpxNIMjC&format=png"
              }
              alt="User Avatar"
            />
            <h3 className="text-xl font-semibold">{user?.displayName}</h3>
            <p className="text-gray-500">{user?.email}</p>
          </div>
          {editing ? (
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
              <div className="flex gap-2">
                <button type="submit" className="btn bg-green-400 w-full">
                  Update Profile
                </button>
              </div>
            </form>
          ) : (
            <button
              type="button"
              onClick={() => setEditing(true)}
              className="btn bg-red-400 w-full"
            >
              Edit Profile
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
