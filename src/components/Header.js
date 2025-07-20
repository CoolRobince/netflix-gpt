import React from 'react'
import { auth } from '../utils/firebase';
import { signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const navigate = useNavigate();
  const user= useSelector((store) => store.user);
  console.log("user in header", user);
  signOut(auth).then(() => {
  navigate('/'); // Redirect to Login page after sign out
}).catch((error) => {
  navigate('/error'); // Handle error if needed
});
  };
  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-30 flex justify-between'>
        <img className='w-44' src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-07-01/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="Netflix Logo" />
        {user && <div className="flex p-2">
          <img
            className='w-10 h-10 rounded-full mr-2'
            alt="usericon"
            src={user?.photoURL}
          />
          <button className='font-bold text-white' onClick={handleSignOut}>Sign Out</button>
        </div>}
    </div>
  )
}

export default Header;