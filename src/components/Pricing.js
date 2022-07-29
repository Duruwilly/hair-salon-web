import React, {useRef} from 'react'
import Contact from './Contact'

const Pricing = ({pricing}) => {
  return (
    <section className='flex justify-center pt-12 px-4 text-white' ref={pricing}>
     <div className='w-full max-w-screen-lg'>
      <h2 className='after:w-[10%] after:left-[47%]'>our pricing</h2>
      <div className='border border-deco-text mt-5'>
       <ul className='capitalize flex flex-wrap gap-8 py-2 px-6'>
        <li>pedicure: 5000</li>
        <li>manicure: 5000</li>
        <li>male haircut: 5000</li>
        <li>female haircut: 5000</li>
        <li>female hair making: 5000</li>
        <li>spa: 5000</li>
        <li>body massage: 5000</li>
        <li>home service: 5000</li>
       </ul>
       <Contact />
      </div>
     </div>
    </section>
  )
}

export default Pricing