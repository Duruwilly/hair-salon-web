import React, { useEffect, useState, useRef } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar'
import Home from './components/Home'
import Dropdown from './components/Dropdown';
import Booking from './components/page/Booking';
import Footer from './components/Footer';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  const scroll = () => {
    if(window.scrollY >= 30) {
      setIsOpen(false)
    }
  }

  window.addEventListener('scroll', scroll);

  const about = useRef(null)
 const services = useRef(null)
 const pricing = useRef(null)
 const contact = useRef(null)

 const scrollToSection = (elementRef) => {
  window.scrollTo({
    top: elementRef.current.offsetTop,
    behavior:'smooth'
  })
 }

  return (
    <BrowserRouter>
      <Navbar
        toggle={toggle} 
        about={about}
        services={services}
        pricing={pricing}
        scrollToSection={scrollToSection}
      />
      <Dropdown 
        isOpen={isOpen} 
        toggle={toggle}
        about={about}
        services={services}
        pricing={pricing}
        scrollToSection={scrollToSection}
      />
      <Routes>
        <Route path='/' element={<Home
          about={about}
          services={services}
          pricing={pricing} 
        />} 
        />
        <Route path='booking' element={<Booking />} />
      </Routes>
      <Footer
        about={about}
        services={services}
        pricing={pricing}
        scrollToSection={scrollToSection} 
      />
    </BrowserRouter>
  );
}

export default App;
