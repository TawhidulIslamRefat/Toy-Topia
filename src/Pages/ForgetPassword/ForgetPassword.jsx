import React, { use} from 'react';
import { useNavigate } from 'react-router';
import { AuthContext } from '../../Provider/AuthProvider/AuthProvider';


const ForgetPassword = () => {

 const navigate  = useNavigate();
 const {forgetPassword} =use(AuthContext);

    const handleForgetPassword = (event) => {
      event.preventDefault();
    const email = event.target.email.value;
  if (!email) {
    alert("Please Enter Your Email First");
  }
  forgetPassword(email)
  .then(()=> {
    alert("Password Reset email send ! Check your Inbox");
    navigate(`${location.state? location.state:'/auth/login'}`)
  })
  .catch(error => {
    alert(error.message);
  })
};
    return (
        <div className="flex justify-center items-center my-35">
            <div className="card bg-base-100 w-[35%] rounded-[5px] shadow-2xl ">
        <div className="card-body px-15 flex-1">
          <h1 className="text-4xl font-semibold text-center mt-[30px] pb-10 border-b border-base-300 px-5">
            Forget Your Password
          </h1>
          <form onSubmit={handleForgetPassword}>
            <fieldset className="fieldset ">
              <label className="label text-xl font-semibold text-[#403F3F] mb-3">
                Email
              </label>
              <input
                type="email"
                name="email"
                className="input w-full text-[16px] font-normal mb-5 bg-[#F3F3F3]"
                placeholder="Enter your email address"
              />
              <button type="submit" className="btn btn-neutral mt-4 mb-2">
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