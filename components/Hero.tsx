"use client";


import image from 'next/image';
import CustomButton from './CustomButton';

const Hero = () => {
  const handleScroll =()=>{

  }
  return (
    <div className='hero'>
      <div className='flex-1 pt-36 padding-x'>
        <h1 className="hero__title">
          Find, Book, or rent a car &mdash; quckly and easily
        </h1>
        <p className="hero__subtitle">
          streamline your car rental experince with your effortless booking process.
        </p>

        <CustomButton 
        title="Explore cars"
        containerStyles="bg-primary-blue text-white rounded-full mt-10"
        handleClick={handleScroll}
        />

      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <img src='/hero.png' alt="hero"
            className="object-contain" />

           <div className="hero__image-overlay" />

        </div>
      </div>
    </div>
  )
}

export default Hero
