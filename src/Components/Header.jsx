import React, { useState } from 'react';
import { FaBars, FaShoppingCart } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { TiShoppingCart } from 'react-icons/ti';

const Header = ({ cartItems = [], openCart }) => {
  const [dropdown, setDropdown] = useState(false);

  return (
    <>
      <div className='w-full relative h-16 bg-gray-800 border-b border-red-200 px-5 flex justify-between items-center'>
        <div className='flex justify-start gap-20 items-center'>
          <h1 className='text-5xl text-white'>Shopify</h1>
        </div>
        <div className='hidden md:flex justify-center items-center'>
          <ul className='flex gap-8 text-white text-2xl'>
            <li>
              <Link to='/' className="hover:text-red-500 hover:bg-gray-200 px-4 py-2 rounded-lg">Home</Link>
            </li>
            <li>
              <Link to='/products' className="hover:text-red-500 hover:bg-gray-200 px-4 py-2 rounded-lg">Products</Link>
            </li>
            <li>
              <Link to='/aboutus' className="hover:text-red-500 hover:bg-gray-200 px-4 py-2 rounded-lg">About Us</Link>
            </li>
            <li>
              <Link to='/login' className="hover:text-red-500 hover:bg-gray-200 px-4 py-2 rounded-lg">Login</Link>
            </li>
          </ul>
        </div>
        <div className='flex items-center'>
          <div className='relative cursor-pointer' onClick={openCart} aria-label="Open cart">
            <FaShoppingCart className='text-white text-3xl' />
            {cartItems.length > 0 && (
              <span className='absolute -top-1 -right-1 bg-red-500 text-white text-sm w-5 h-5 rounded-full flex items-center justify-center'>
                {cartItems.length}
              </span>
            )}
          </div>
          <div className='md:hidden flex items-center'>
            {dropdown ? (
              <IoMdClose
                className='text-white text-3xl cursor-pointer'
                onClick={() => setDropdown(false)}
                aria-label="Close menu"
              />
            ) : (
              <FaBars
                className='text-white text-3xl cursor-pointer'
                onClick={() => setDropdown(true)}
                aria-label="Open menu"
              />
            )}
          </div>
        </div>
      </div>
      {dropdown && (
        <div className='w-full bg-red-400 flex flex-col items-center md:hidden'>
          <ul className='flex flex-col gap-4 text-white text-2xl'>
            <li>
              <Link to='/' className="hover:text-red-500 hover:bg-gray-200 px-4 py-2 rounded-lg" onClick={() => setDropdown(false)}>Home</Link>
            </li>
            <li>
              <Link to='/products' className="hover:text-red-500 hover:bg-gray-200 px-4 py-2 rounded-lg" onClick={() => setDropdown(false)}>Products</Link>
            </li>
            <li>
              <Link to='/aboutus' className="hover:text-red-500 hover:bg-gray-200 px-4 py-2 rounded-lg" onClick={() => setDropdown(false)}>About Us</Link>
            </li>
            <li>
              <Link to='/login' className="hover:text-red-500 hover:bg-gray-200 px-4 py-2 rounded-lg" onClick={() => setDropdown(false)}>Login</Link>
            </li>
            
            {user ? (<><span className='user'>{user.name.charAt(0)}</span> <button onClick={logOut}>Logout</button></>)  : (<Link to='/login'><FaUser /></Link>) }
            <TiShoppingCart onClick={togglecart}/>
          </ul>
        </div>
      )}
    </>
  );
};

export default Header;
