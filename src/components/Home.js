import React from 'react'
import Hero from './Hero'
import About from './About'
import Services from './Services'
import Gallery from './Gallery'
import BookingAd from './BookingAd'
import Pricing from './Pricing'
import ScrollToTop from './ScrollToTop'


const Home = ({about, services, pricing}) => {
  return (
    <>
     <Hero />
     <About 
      about={about} 
     />
     <Services 
     services={services}
     />
     <Gallery />
     <BookingAd />
     <Pricing 
      pricing={pricing} 
     />
     <ScrollToTop />
    </>
  )
}

export default Home