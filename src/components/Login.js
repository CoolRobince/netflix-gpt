import {useState} from 'react'
import Header from './Header';

const Login = () => {

  const [isSignInForm, setIsSignInForm]= useState(true);

  const toggleSignInForm = () => {
      setIsSignInForm(!isSignInForm);
  }
  return (
    <div>
        <Header/>
        <div className='absolute'>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/05e91faa-6f6d-4325-934e-5418dcc2567b/web/IN-en-20250630-TRIFECTA-perspective_159086b1-425f-435b-bcd5-1ed8039cdef9_large.jpg" alt="preloadImage" />
        </div>
         <form className=' w-3/12 absolute bg-black p-12 my-36 mx-auto left-0 right-0 text-white bg-opacity-80 rounded-lg'>
         <h1 className='font-bold text-2xl py-4'>{isSignInForm?"Sign In":"Sign Up"}</h1>
         {
          !isSignInForm && <input type="text" placeholder='Full Name' className='p-4 my-4 w-full bg-gray-700'/>
         }
         
            <input type="text" placeholder='Email' className='p-4 my-4 w-full bg-gray-700'/>
            <input type="password" placeholder='Password' className='p-4 my-4 w-full bg-gray-700' />
            <button className='p-4 my-6 bg-red-700 w-full rounded-lg'>{isSignInForm?"Sign In":"Sign Up"}</button>
            <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm?"New to Neflix?Sign Up Now":"Already registered?Sign In Now"}</p>
         </form>
    </div>
  )
}

export default Login;