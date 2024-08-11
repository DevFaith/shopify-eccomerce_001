import React, { useState } from 'react';
import { db, auth } from '../Auth/Firebase';
import { collection, addDoc } from 'firebase/firestore';
import { signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword } from 'firebase/auth';
import { FaGoogle, FaEyeSlash, FaEye } from 'react-icons/fa';

function Login({ updateUserInfo = () => {} }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const submit = async (e) => {
    e.preventDefault();

    if (!firstName || !lastName || !email || !password || !confirmPassword) {

      alert('All fields are required');
      return;
    }

    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    const user = {
      displayName: `${firstName} ${lastName}`,
    };

    try {
      const result = await createUserWithEmailAndPassword(auth, email, password);

      await addDoc(collection(db, 'users'), {
        first: firstName,
        last: lastName,
        email: email,
        userId: result.user.uid,
      });
      alert(`Welcome ${user.displayName}!`);

      updateUserInfo(result.user);
    } catch (error) {
      console.error("Sign-up error: ", error);
      alert(`Sign-up failed: ${error.message}`);
    }
  };

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // Split the display name into first and last names safely
      const [first, last = ''] = user.displayName?.split(' ') || [''];

      // Store user info in Firestore
      await addDoc(collection(db, 'users'), {
        first: first,
        last: last,
        email: user.email,
        userId: user.uid,
      });

   

      updateUserInfo(user);
    } catch (error) {
      console.error("Google sign-in error: ", error);
      alert(`Google sign-in failed: ${error.message}`);
    }
  };

  return (
    <div className='flex items-center justify-center h-screen'>
      <div className='max-w-md w-full p-5 border rounded-lg'>
        <h2 className='text-2xl mb-4'>Sign Up</h2>
        <form onSubmit={submit}>
          <input
            type='text'
            placeholder='First Name'
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className='w-full mb-3 p-2 border'
          />
          <input
            type='text'
            placeholder='Last Name'
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className='w-full mb-3 p-2 border'
          />
          <input
            type='email'
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='w-full mb-3 p-2 border'
          />
          <div className='relative'>
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder='Create Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='w-full mb-3 p-2 border'
            />
            <span
              className='absolute right-2 top-2 cursor-pointer'
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
          <div className='relative'>
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder='Confirm Password'
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className='w-full mb-3 p-2 border'
            />
            <span
              className='absolute right-2 top-2 cursor-pointer'
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
          <button type='submit' className='w-full p-2 bg-blue-500 text-white'>
            Sign Up
          </button>
        </form>
        <div className='mt-4 flex items-center justify-center'>
          <button
            className='flex items-center gap-2 p-2 border'
            onClick={signInWithGoogle}
          >
            <FaGoogle className='text-red-500' /> Sign Up with Google
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
