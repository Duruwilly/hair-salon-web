import React from 'react'

const Contact = () => {
  return (
    <>
     <div className='border-t border-t-deco-text grid grid-cols-1 md:grid-cols-2'>
        <div className='md:border-r md:border-r-deco-text pt-4 pb-3 md:p-9'>
         <h3 className='text-center text-deco-text font-bold text-2xl uppercase font-serif'>contact info</h3>
         <div className='mt-4 text-center'>
          <p>
           <span className='text-deco-text capitalize'>address - </span>32 avenue, gowon estate, lagos nigeria
          </p>
           <p>
           <span className='text-deco-text capitalize'>email - </span><a href="mailto:homieunisexsalon@gmail.com" className='text-light-gray'>homieunisexsalon@gmail.com</a>
          </p>
          <p>
           <span className='text-deco-text capitalize'>phone no - </span><a href="tel:+23490000000" className='text-light-gray'>+23490000000</a>
          </p>
         </div>
        </div>
        <div className='pt-4 pb-3 md:p-9'>
         <h3 className='text-center text-deco-text font-bold text-2xl uppercase font-serif'>timing</h3>
         <div className='mt-4 text-center'>
          <p>
           <span className='text-deco-text capitalize'>monday - friday: </span>08:00am - 10:00pm
          </p>
           <p>
           <span className='text-deco-text capitalize'>saturday - sunday: </span>09:00am - 10:00pm
          </p>
         </div>
        </div>
       </div>
    </>
  )
}

export default Contact