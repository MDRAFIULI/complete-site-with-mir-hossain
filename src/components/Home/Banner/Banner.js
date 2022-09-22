import React from 'react';
import cleaner from '../../../images/cleaner.png';

const Banner = () => {
    return (
        <div>
            <div className="hero h-screen lg:h-[68vh] bg-accent">
  <div className="hero-content flex-col lg:flex-row">
    
    <div className='w-'>
      <h1 className="text-4xl font-bold" data-aos="fade-right" data-aos-duration="1700">Professional Cleaning <br/> Service</h1>
      <p className="py-6 max-w-xl" data-aos="fade-right" data-aos-duration="1000" data-aos-delay='400'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has</p>
      <button className="btn btn-primary" data-aos="zoom-in" data-aos-delay="1700">Get Started</button>
    </div>
    <div className='h-[60vh] shrink-0' data-aos="fade-left" data-aos-duration="1700">
    <img src={cleaner} className="h-full" />
    </div>
  </div>
</div>
<div className='w-5/6 mx-auto mt-[-50px] relative shadow-lg p-10 bg-base-100 z-20 rounded-2xl' data-aos="fade-right" data-aos-duration="1700">
    <h1 className='text-2xl mb-5'>Get Free Estimate</h1>
    <div className='grid grid-cols-1 lg:grid-cols-4 gap-4'>
    <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
    <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
    <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
    <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
    <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
    <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
    <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
    <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
    </div>
</div>
        </div>
    );
};

export default Banner;