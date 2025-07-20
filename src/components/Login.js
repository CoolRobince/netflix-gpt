import { use, useRef, useState } from 'react'
import Header from './Header';
import { checkValidateData } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    const message = checkValidateData(email.current?.value, password.current?.value);
    setErrorMessage(message);
    if (message) return;

    if (!isSignInForm) {
      // Handle Sign Up logic here
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          updateProfile(user, {
            displayName: "Robince Gupta",//user.current.value,
            photoURL: "https://avatars.githubusercontent.com/u/29700169?v=4"
          }).then(() => {
            const { uid, email, displayName, photoURL } = auth.currentUser;
            dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
            navigate('/browse');
          }).catch((error) => {
            setErrorMessage(error.message);
          });
          // Navigate to Browse page after successful sign in

        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });

    } else {
      // Handle Sign in logic here
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          navigate('/browse'); // Navigate to Browse page after successful sign in

        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });

    }
  };
  // This function toggles between Sign In and Sign Up forms
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className='absolute'>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/05e91faa-6f6d-4325-934e-5418dcc2567b/web/IN-en-20250630-TRIFECTA-perspective_159086b1-425f-435b-bcd5-1ed8039cdef9_large.jpg" alt="preloadImage" />
      </div>
      <form onSubmit={(e) => e.preventDefault()} className=' w-3/12 absolute bg-black p-12 my-36 mx-auto left-0 right-0 text-white bg-opacity-80 rounded-lg'>
        <h1 className='font-bold text-2xl py-4'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {
          !isSignInForm && <input type="text" placeholder='Full Name' className='p-4 my-4 w-full bg-gray-700' />
        }

        <input ref={email} type="text" placeholder='Email' className='p-4 my-4 w-full bg-gray-700' />
        <input ref={password} type="password" placeholder='Password' className='p-4 my-4 w-full bg-gray-700' />
        <p className='text-red-500 font-bold'>{errorMessage}</p>
        <button className='p-4 my-6 bg-red-700 w-full rounded-lg' onClick={handleButtonClick}>{isSignInForm ? "Sign In" : "Sign Up"}</button>
        <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ? "New to Neflix?Sign Up Now" : "Already registered?Sign In Now"}</p>
      </form>
    </div>
  )
}

export default Login;