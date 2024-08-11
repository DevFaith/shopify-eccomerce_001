import React from 'react';
import Kids2 from '../assets/kids2.jpg';
import Mens2 from '../assets/mens2.jpg';
import Kids3 from '../assets/kids3.webp';
import Mens1 from '../assets/mens1.png';
import Cloth4 from '../assets/cloth4.jpg';

const Products = ({ addToCart }) => {
  const items = [
    {
      name: 'Kids T-shirt',
      description: 'Comfortable and stylish T-shirt for kids.',
      price: '$25',
      image: Kids2,
    },
    {
      name: 'Men\'s Jacket',
      description: 'Warm and durable jacket for men.',
      price: '$35',
      image: Mens2,
    },
    {
      name: 'Kids Hoodie',
      description: 'Cozy hoodie for kids, perfect for chilly days.',
      price: '$30',
      image: Kids3,
    },
    {
      name: 'Men\'s Trousers',
      description: 'Classic button-down shirt for a polished look.',
      price: '$40',
      image: Mens1,
    },
    {
      name: 'Women\'s Dress',
      description: 'Elegant dress for special occasions.',
      price: '$50',
      image: Cloth4,
    },
    {
      name: 'Women\'s Top',
      description: 'Lightweight and breezy top for casual outings.',
      price: '$20',
    },
  ];

  return (
    <div className='p-5'>
      <h2 className='text-2xl mb-6'>Products</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {items.map((item, index) => (
          <div
            key={index}
            className='border p-4 rounded-lg flex flex-col items-center bg-white shadow-md'
          >
            {item.image && (
              <img
                src={item.image}
                alt={item.name}
                className='w-full h-48 object-cover mb-4 rounded'
              />
            )}
            <div className='text-center'>
              <h3 className='text-xl font-bold mb-2'>{item.name}</h3>
              <p className='mb-2'>{item.description}</p>
              <p className='text-lg font-semibold text-blue-600'>{item.price}</p>
              <button
                className='mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600'
                onClick={() => addToCart(item)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
