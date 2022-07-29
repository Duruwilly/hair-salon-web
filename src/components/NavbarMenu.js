import React, { useState, useRef,forwardRef } from 'react'
import { Link } from 'react-router-dom'


const NavbarMenu = ({about, services, pricing, scrollToSection}) => {
 const [activeTab, setActiveTab] = useState('tab1')

 const toggleTab = (index) => {
  setActiveTab(index)
 }

  return (
    <ul className='flex text-white uppercase cursor-pointer'>
       <li className='px-4'>
        <Link to='/' 
        className={activeTab === 'tab1' ? 'border-b-4 border-b-deco-text' : ''} 
        onClick={() => toggleTab('tab1')} >
         home
        </Link>
       </li>
       <li className='px-4' onClick={() => scrollToSection(about)}>
         about us
       </li>
       <li className='px-4' onClick={() => scrollToSection(services)}>
         services
       </li>
       <li className='px-4'>
        <Link to='booking' className={activeTab === 'tab4' ? 'border-b-4 border-b-deco-text' : ''} 
        onClick={() => toggleTab('tab4')}>
         booking
        </Link>
       </li>
       <li className='px-4' onClick={() => scrollToSection(pricing)}>
         pricing
       </li>
      </ul>
  )
}

export default NavbarMenu