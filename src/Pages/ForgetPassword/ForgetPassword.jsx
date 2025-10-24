import React, { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import { toast, ToastContainer } from "react-toastify";

const ForgetPassword = () => {
  const navigate = useNavigate();
  const { forgetPassword } = use(AuthContext);
  const location = useLocation();
  const preEmail = location.state?.email || "";
  const [email, setEmail] = useState(preEmail);

  const handleForgetPassword = (event) => {
    event.preventDefault();
    if (!email) {
      alert("Please Enter Your Email First");
      return;
    }
    forgetPassword(email)
      .then(() => {
        toast.success("Password Reset email sent! Check your Inbox", {
          onClose: () => navigate("/auth/login"),
        });
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <title>ToyTopia - Forget Password</title>
      <ToastContainer />
      <div className="card bg-base-100 w-[95%]   md:w-[60%] lg:w-[35%] rounded-[5px] shadow-2xl ">
        <div className="card-body px-15 flex-1">
          <h1 className="text-4xl font-semibold text-center mt-[30px] pb-10 border-b border-base-300 px-5">
            Forget Your Password
          </h1>
          <form onSubmit={handleForgetPassword}>
            <fieldset className="fieldset">
              <label className="label text-xl font-semibold text-[#403F3F] mb-3">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input w-full text-[16px] font-normal mb-5 bg-[#F3F3F3]"
                placeholder="Enter your email address"
              />
              <p className="text-[16px] font-semibold text-[#706F6F] text-center">
                Go Login?
                <Link
                  className="ml-1 text-[#F75B5F] hover:underline"
                  to="/auth/login"
                >
                  Login
                </Link>
              </p>

              <button
                type="submit"
                className="btn bg-linear-to-r from-[#FA6775]  to-[#F52549] text-white mt-4 mb-2"
              >
                Forget Password
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
