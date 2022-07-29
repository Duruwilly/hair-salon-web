import React, {useState, useEffect} from 'react'
import { FaAngleUp } from 'react-icons/fa'

const ScrollToTop = () => {
 const [showScrollToTop, setShowScrollTotop] = useState(false)

 useEffect(() => {
  window.addEventListener('scroll', () => {
   if(window.scrollY > 300) {
    setShowScrollTotop(true)
   } else {
    setShowScrollTotop(false)
   }
  })
 }, [])

 const scrollTop = () => {
  window.scrollTo({
    top: 0,
    behavior:'smooth'
  });
 };

  return (
    <>
     {showScrollToTop && <FaAngleUp onClick={scrollTop} className='fixed bottom-4 right-5 h-10 w-10 rounded-full bg-deco-text text-main-dark-bg cursor-pointer' />
     }
    </>
  )
}

export default ScrollToTop