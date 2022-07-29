import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import NavbarMenu from './NavbarMenu'
import { MdMenu } from 'react-icons/md'


const Navbar = ({toggle, about, services, pricing, scrollToSection}) => {
  const [matches, setMatches] = useState(
    window.matchMedia('(min-width: 860px)').matches
  )

  useEffect(() => {
    window
    .matchMedia('(min-width: 860px)')
    .addEventListener('change', e => setMatches(e.matches))
  }, [])

  return (
    <>
    <header className='bg-main-dark-bg h-20 px-4 flex justify-center drop-shadow-2xl'>
     <div className='w-full max-w-screen-lg flex items-center justify-between'>
      <Link to='/'><span className='text-deco-text font-bold uppercase'>Homie unisex salon</span></Link>
      <div>
        {
          matches && <NavbarMenu
          about={about}
          services={services}
          pricing={pricing}
          scrollToSection={scrollToSection} />
        }
        {
          !matches && <MdMenu className='text-4xl text-white cursor-pointer' onClick={toggle} />
        }
      </div>
     </div>
    </header>
    </>
  )
}

export default Navbar