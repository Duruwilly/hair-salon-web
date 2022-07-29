import React from 'react'
import { Link } from 'react-router-dom'
import servicesTop from '../assets/booking.jpg'

const BookingAd = () => {
  return (
    <section className='bg-opacity flex justify-center px-4'>
     <div className='w-full max-w-screen-lg'>
      <div className='bg-mobile-nav-bg '>
       <div className='grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-10 py-12 px-9'>
        <div>
         <h1 className='text-3xl md:text-4xl font-bold'>Get Discount off your first booking</h1>
         <p className='text-base mt-3'>Get your discount by booking appointment with us</p>
        </div>
        <img src={servicesTop} alt="" className='w-full h-56 object-cover' />
       </div>
       <Link to='booking' className='bg-main-dark-bg py-1.5 px-2 capitalize text-light-gray'>book appointment</Link>
      </div>
     </div>
    </section>
  )
}

export default BookingAd