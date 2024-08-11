import React from 'react';

const Cart = ({ cartItems, isOpen, closeCart }) => {
  const totalCost = cartItems.reduce((total, item) => total + parseFloat(item.price.slice(1)), 0);
  const itemCount = cartItems.length;

  return (
    <div
      className={`fixed inset-y-0 right-0 w-64 bg-white shadow-lg p-5 transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`} bg-blue-500 shadow-lg p-5 transform transition-transform duration-300 ease-in-out
    >
      <button onClick={closeCart} className='mb-4 text-lg font-semibold'>
        Close
      </button>
      <h2 className='text-2xl mb-4'>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>  
      ) : (
        <div>
          {cartItems.map((item, index) => (
            <div key={index} className='border p-4 mb-2 rounded flex items-center'>
              {item.image && (
                <img src={item.image} alt={item.name} className='w-16 h-16 object-cover rounded mr-4' />
              )}
              <div>
                <h3 className='text-xl font-bold'>{item.name}</h3>
                <p>{item.description}</p>
                <p className='text-lg font-semibold'>{item.price}</p>
              </div>
            </div>
          ))}
          <div className='mt-4'>
            <p className='text-xl font-bold'>Total: ${totalCost.toFixed(2)}</p>
            <p className='text-lg'>Items: {itemCount}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
