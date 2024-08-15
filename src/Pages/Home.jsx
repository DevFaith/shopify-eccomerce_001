import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Kids1 from '../assets/kids1.webp';
import Mens1 from '../assets/mens1.png';
import Mens2 from '../assets/mens2.jpg';
import Ads from '../assets/ads.mp4';

const Home = () => {
  const products = [
    {
      name: 'Kids Clothes',
      description: 'Stylish and comfortable clothes for kids.',
      price: '$30',
      discount: '10% off',
      image: Kids1,
    },
    {
      name: 'Adult Clothes',
      description: 'Durable and trendy clothes for adults.Adult clothes of all sizes,suitable for any age group and style which last longer than a day once You have already placed an order.',
      price: '$50',
      discount: '15% off',
      image: Mens2,
    },
    {
      name: 'Adult Shoes',
      description: 'Durable and trendy shoes for adults. Adult shoes of all sizes,suitable for any age group and style which last longer than a day once You have already placed an order.',
      price: '$50',
      discount: '15% off',
      image: Mens1,
    },
    {
      name: 'Kids Shoes',
      description: 'Durable and trendy shoes for kids.Kids shoes of all sizes,suitable for any age group and style which last longer than a day once You have already placed an order.',
      price: '$50',
      discount: '15% off',
      image: Mens1,
    },
  ];

  return (
    <div className='p-5 w-full mx-auto'>
      <h2 className='text-2xl mb-4'>Welcome to Shopify</h2>
      
      {/* Video */}
      <div className='mb-6'>
        <video 
          src={Ads} 
          autoPlay 
          loop 
          muted 
          className='w-full h-auto rounded-lg' 
          controls
        ></video>
      </div>

      {/* Carousel */}
      <div className='mb-6'>
        <h2 className='text-xl mb-4'>Our Featured Products</h2>
        <Carousel showThumbs={false} infiniteLoop autoPlay>
          {products.map((product, index) => (
            <div key={index} className='p-4'>
              <img 
                src={product.image} 
                alt={product.name} 
                className='w-full h-60 object-cover mb-4 rounded-lg' 
              />
              <h3 className='text-xl font-bold'>{product.name}</h3>
              <p>{product.description}</p>
              <p className='text-lg font-semibold'>{product.price}</p>
              <p className='text-red-500'>{product.discount}</p>
            </div>
          ))}
        </Carousel>
      </div>

      {/* Google Map */}
      <div className='mb-6'>
        <h2 className='text-xl mb-4'>Our Location</h2>
        <div className='w-full h-64'>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.84860962261!2d36.89666295767467!3d-1.205215684005333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1d94e87a5bdb%3A0x1db5fa0f9e8f0d3a!2sKahawa%20Wendani%2C%20Kenya!5e0!3m2!1sen!2sus!4v1689464721563!5m2!1sen!2sus'
            width='100%'
            height='100%'
            style={{ border: 0 }}
            allowFullScreen=''
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
          ></iframe>
        </div>
      </div>

      {/* Contact Details */}
      <div className='mb-6'>
        <h2 className='text-xl mb-4'>Contact Us</h2>
        <p>Email: info@ourshop.com</p>
        <p>Phone: +254 700 000 000</p>
        <p>Address: Kahawa Wendani, Nairobi, Kenya</p>
      </div>
    </div>
  );
};

export default Home;
