import Features from '@/components/features/Features';
import Navbar from '@/components/header/Navbar';
import Hero from '@/components/hero/Hero';
import HowItWorks from '@/components/how-it-works/HowItWorks';
import React from 'react';

const Home = () => {
  return (
    <>
      <section className='bg-center bg-no-repeat bg-cover bg-primary'>
        <Navbar />
        <Hero />
      </section>
      <Features />
      <HowItWorks />
    </>
  );
};

export default Home;
