import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../../Provider/AuthProvider/AuthProvider';
import { use, useState } from 'react';

const Register = () => {
     
const {createUser,setUser,updateUser,signInGoogle } = use(AuthContext);
const navigate = useNavigate();
const [error, setError] = useState("");
const [showPassword, setShowPassword] = useState(false);

const handleSignInGoogle =() =>{
signInGoogle()
.then( result => {
  console.log(result.user);
})
.catch(error => {
  console.log(error.message);
})
}

const handleRegister = (event) => {
event.preventDefault();
const name = event.target.name.value;
const photo = event.target.photo.value;
const email = event.target.email.value;
const password = event.target.password.value;
 if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }
    if (!/[A-Z]/.test(password)) {
      setError("Password must have at least one uppercase letter.");
      return;
    }
    if (!/[a-z]/.test(password)) {
      setError("Password must have at least one lowercase letter.");
      return;
    }
 createUser(email,password)
 .then(result => 
 {
    const user = result.user;
    updateUser({
        displayName:name,
        photoURL:photo,
    })
    .then(()=>{
        setUser({
            ...user,
            displayName:name,
            photoURL:photo,
        });
        navigate('/');
    })
 }
 ).catch( error => {
    console.log(error.message);
 })

}


    return (
        <div>
             <div className='flex justify-center  items-center min-h-screen '>
             <div className="card bg-base-100 w-[35%] shrink-0 rounded-[5px]  shadow-2xl">
      <div className="card-body px-15">
        <h1 className='text-4xl font-semibold text-center mt-[30px] pb-10 border-b border-base-300'>Register your account</h1>
       <form onSubmit={handleRegister}>
         <fieldset className="fieldset ">
          <label className="label text-xl font-semibold text-[#403F3F] mb-3">Your Name</label>
          <input type="text" name='name' className="input w-full text-[16px] font-normal mb-5 bg-[#F3F3F3]" placeholder="Enter your name" required />
          <label className="label text-xl font-semibold text-[#403F3F] mb-3">Photo URL</label>
          <input type="text" name='photo' className="input w-full text-[16px] font-normal mb-5 bg-[#F3F3F3]" placeholder="Enter your Photo URL" required />
          <label className="label text-xl font-semibold text-[#403F3F] mb-3">Email</label>
          <input type="email" name='email' className="input w-full text-[16px] font-normal mb-5 bg-[#F3F3F3]" placeholder="Enter your email address" required  />
            <label className="label text-xl font-semibold text-[#403F3F] mb-3">Password</label>
          <div className="relative">
          <input
                  type={showPassword ? "text" : "password"}
                  name='password'
                  className="input w-full text-[16px] font-normal mb-3 bg-[#F3F3F3]"
                  placeholder="Enter your password"
                  required
                />
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute top-3 right-4 cursor-pointer text-[16px]"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
          </div>
          {error && <p className="text-red-600">{error}</p>}
          <button type='submit' className="btn btn-neutral mt-4 mb-2">Register</button>
            
        </fieldset>
       </form>
       <button
       onClick={handleSignInGoogle}
       className="btn bg-white text-black border-[#e5e5e5]">
                <svg
                  aria-label="Google logo"
                  width="16"
                  height="16"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <g>
                    <path d="m0 0H512V512H0" fill="#fff"></path>
                    <path
                      fill="#34a853"
                      d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                    ></path>
                    <path
                      fill="#4285f4"
                      d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                    ></path>
                    <path
                      fill="#fbbc02"
                      d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                    ></path>
                    <path
                      fill="#ea4335"
                      d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                    ></path>
                  </g>
                </svg>
                Register with Google
              </button>
        <p className='text-[16px] font-semibold text-[#706F6F] text-center'>
                 Already Have An Account ? <Link className='text-[#F75B5F] hover:underline' to='/auth/login'>Login</Link>
               </p>
      </div>
             </div>
        </div>
        </div>
    );
};

export default Register;