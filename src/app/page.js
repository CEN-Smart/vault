import Features from '@/components/features/Features';
import Navbar from '@/components/header/Navbar';
import Hero from '@/components/hero/Hero';
import React from 'react';

const Home = () => {
  return (
    <>
      <section className='bg-primary'>
        <Navbar />
        <Hero />
      </section>
      <Features />
    </>
  );
};

export default Home;
