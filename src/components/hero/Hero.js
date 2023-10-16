'use client';
import React from 'react';
import Container from '../Container';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className='pb-12 pt-28 '>
      <Container className='flex flex-col items-center gap-6 mx-auto xl:gap-20 md:flex-row'>
        <div className='flex flex-col w-[100%] md:w-[50%] gap-4'>
          <h1 className='mb-6 text-2xl font-[800] md:text-4xl  2xl:text-[3rem] 2xl:leading-[3.5rem]'>
            Save & Invest In Crypto
          </h1>
          <p className='text-md text-white/70'>
            Saving Made Simple, Earnings Made Easy
          </p>
          <Link
            className='bg-button py-2 px-4 hover:scale-105 active:scale-95 transition duration-300 rounded-md text-center font-semibold text-sm md:text-base 2xl:text-lg'
            href='/form'
          >
            Get Started
          </Link>
        </div>
        <div className='relative w-full h-full md:h-[50%] md:w-[50%]'>
          <picture>
            <img
              className='object-cover w-full h-full shrink-0'
              src='/hero.svg'
              alt='Logo'
            />
          </picture>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
