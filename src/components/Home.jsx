import React from 'react';
import Header from './Header';
import Hero from './Hero';
import Testimonials from './Testimonials';
import BottomHero from './BottomHero';
import BottomTestimonials from './BottomTestimonials';
import Footer from './Footer'


const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Testimonials />
      <BottomHero />
      <BottomTestimonials />
      <Footer />
    </div>
  )
}

export default Home