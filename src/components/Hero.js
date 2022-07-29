import React from 'react'
import { Link } from 'react-router-dom'
import HeroBg from '../assets/hero-bg.jpg'
import HeroImg from '../assets/hero-img.jpg'

export const HeroBgStyle = {
 width: '100%',
 padding: '0',
 backgroundImage: `url(${HeroBg})`,
 backgroundPosition: 'center',
 backgroundSize: 'cover',
 backgroundRepeat: 'no-repeat',
 height: '30rem',
}

const Hero = () => {
  return (
    <section className='flex justify-center text-white py-8 px-4'>
     <div className='flex flex-col md:flex-row justify-between gap-10 items-center w-full max-w-screen-lg relative'>
      <div className='flex flex-col gap-3'>
       <h1 className='font-semibold text-4xl'>We will give you an impeccable Look</h1>
        <p className='text-base text-light-gray'>with the best team in our salon, you'll leave looking astonished.</p>
        <Link to='booking' className='mt-6 text-light-gray'>
         <span className='bg-mobile-nav-bg pl-2 py-3 capitalize'>book appoint</span><span>ment</span>
        </Link>
      </div>
      <div style={HeroBgStyle}>
        <div style={{background: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(2px)', height: '100%'}}>
          <img src={HeroImg} alt="" className=' h-3/4 w-2/4 object-cover border rounded-b-full rounded-t-l-full' />
        </div>
      </div>
       
     </div>     
    </section>
  )
}

export default Hero