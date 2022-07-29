import React from 'react'

const Booking = () => {
  return (
    <section className='flex justify-center text-whit py-8 px-4'>
      <div className=' w-full max-w-screen-lg'>
        <h3 className='m-0 font-bold text-4xl text-center text-white capitalize'>bookings</h3>
        <p className='text-center opacity-95 mt-3 text-white'>Book an appointment with us for any kind of services provided by our salon.</p>
        <form action="" className='mt-8'>
          <input type="text" className='my-2 mx-0 w-full p-3 border border-white block bg-transparent text-white focus:outline-none focus:bg-white focus:text-black placeholder-white' placeholder='FullName' />
          <input type="text" className='my-2 mx-0 w-full p-3 border border-white block bg-transparent text-white focus:outline-none focus:bg-white focus:text-black placeholder-white' placeholder='Email' />
          <select name="" id="" className='my-2 mx-0 w-full p-3 border border-white block bg-transparent text-white focus:outline-none focus:bg-white focus:text-black placeholder-white'>
            <option value="">Select Service</option>
            <option value="male haircut">male haircut</option>
            <option value="female haircut">female haircut</option>
            <option value="manicure and pedicure">manicure and pedicure</option>
            <option value="manicure">manicure</option>
            <option value="pedicure">pedicure</option>
            <option value="spa">spa</option>
            <option value="massage">massage</option>
            <option value="hair treatment">hair treatment</option>
          </select>
          <select className='my-2 mx-0 w-full p-3 border border-white block bg-transparent text-white focus:outline-none focus:bg-white focus:text-black placeholder-white'>
            <option value="in-service">in-service</option>
            <option value="home service">home service</option>
          </select>
          <input type="datetime-local" name="" id="" className='my-2 mx-0 w-full p-3 border border-white block bg-transparent text-white focus:outline-none focus:bg-white focus:text-black placeholder-white' />
          <textarea name="Message" placeholder='Message' className='h-36 my-2 mx-0 w-full p-3 border border-white block bg-transparent text-white focus:outline-none focus:bg-white focus:text-black placeholder-white'></textarea>
          <button type="submit" className='w-full p-3 bg-mobile-nav-bg uppercase font-bold hover:bg-transparent hover:text-white hover:border'>submit</button>
        </form>
      </div>
    </section>
  )
}

export default Booking