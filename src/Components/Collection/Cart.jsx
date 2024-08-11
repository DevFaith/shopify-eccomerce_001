import React from 'react';

const Cart = () => {
    return (
      <>
      <form action="">
        <input type="text" name="name" placeholder="Name" required id='name' />
        <input type="number" name="price" placeholder="Price" required id='price' />
         <textarea name="description" id="description" cols="30" rows="10"></textarea>
         <button >Add</button>
      </form>
      
      </>
    );
};

export default Cart;