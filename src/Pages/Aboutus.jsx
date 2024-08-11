import React from 'react';
import Animate1 from '../assets/animate1.webp';
import Animate2 from '../assets/animate2.jpg';
import Animate3 from '../assets/animate3.webp';

const About = () => {
  const benefits = [
    "Free shipping on orders over $50",
    "30-day return policy",
    "Exclusive discounts for members",
    "24/7 customer support",
    "Secure online payments"
  ];

  const testimonials = [
    {
      name: "John Doe",
      review: "Amazing products and fast shipping. I highly recommend shopping here!",
      image: Animate1, 
    },
    {
      name: "Jane Smith",
      review: "Excellent customer service and top-notch quality. I'm a loyal customer now!",
      image: Animate3,
    },
    {
      name: "Michael Johnson",
      review: "The discounts for members are fantastic. I saved a lot on my recent purchase.",
      image: Animate2,
    },
  ];

  return (
    <div className='p-5'>

      <section className='mb-10'>
        <h2 className='text-3xl font-bold text-center mb-6'>About Us</h2>
        <p className='text-lg leading-relaxed text-center max-w-2xl mx-auto'>
          Welcome to our online store, where we offer a curated selection of the latest fashion and
          accessories for all ages. Our mission is to provide our customers with the best shopping
          experience, combining quality products, exceptional customer service, and unbeatable value.
          Shop with us and discover why we are the preferred destination for stylish shoppers worldwide.
        </p>
      </section>

      <section className='mb-10'>
        <h2 className='text-2xl font-bold text-center mb-6'>Why Shop with Us?</h2>
        <ul className='list-disc ml-5 text-lg leading-relaxed max-w-2xl mx-auto'>
          {benefits.map((benefit, index) => (
            <li key={index} className='mb-3'>{benefit}</li>
          ))}
        </ul>
      </section>

      <section className='mb-10'>
        <h2 className='text-2xl font-bold text-center mb-6'>What Our Customers Say</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {testimonials.map((testimonial, index) => (
            <div key={index} className='p-6 bg-gray-200 shadow-lg rounded-lg text-center'>
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className='w-20 h-20 object-cover rounded-full mx-auto mb-4'
              />
              <h3 className='text-xl font-semibold mb-2'>{testimonial.name}</h3>
              <p className='text-gray-700'>{testimonial.review}</p>
            </div>
          ))}
        </div>
      </section>

      <section className='mb-10 text-center'>
        <h2 className='text-2xl font-bold mb-4'>Join Our Community</h2>
        <p className='text-lg leading-relaxed mb-6 max-w-xl mx-auto'>
          Sign up for our newsletter to receive exclusive discounts, the latest product updates, and
          more directly to your inbox. Don't miss out on being part of our growing community of
          fashion enthusiasts!
        </p>
        <button className='bg-blue-500 text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-blue-600 transition duration-300'>
          Sign Up Now
        </button>
      </section>
    </div>
  );
};

export default About;
