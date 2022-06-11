import React from 'react'
import { FcShop } from "react-icons/fc";
import blocket from '../assets/Logo/blocket-logo.png'
import heroImg1 from '../assets/pictures/hero/hero-main-1.jpg'
import heroImg2 from '../assets/pictures/hero/hero-main-2.jpg'
import heroImg3 from '../assets/pictures/hero/hero-main-3.jpg'

const Hero = () => {
  return (
    <div name='hero' className='w-full h-screen bg-[#ff9cce]'>
      
      {/* Text Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full text-white'>
        <h1 className='text-6xl mb-2'>Hej!</h1>
        <p className='text-2xl underline decoration-4 underline-offset-2'>Och välkommen till min shop sida!</p>
        <p className='mt-2'>Här hittar du allt som har och göra med Makrame. Allt från bordslampor till kläder eller accessoarer.</p>
        <p>Allt är såklart handgjort av mig och trådarna är av högsta kvalité.</p>
        <p>Och det är 100% återvunnen tråd för miljöns skull.</p>
        <p className='flex place-items-center'>Alla mina produkter finns på och kan beställas från <a className='hover:scale-110 duration-100' href="https://www.blocket.se/profil/39896919"><img src={blocket} alt="Blocket Logo" style={{width: '65px'}}/></a></p>
        <p className='flex place-items-center mt-4 text-2xl font-bold'>Så tveka inte! Det är bara att sätta igån och shoppa!</p>
      </div>

      {/* Picture Container */}
      <div className='w-full h-screen flex flex-col-3 justify-center -mt-[300px] bg-[#ff9cce]'>
        <img src={heroImg2} alt="Makrame image example 1" className='w-[450px] h-[80%] rounded-l-xl' /*style={{width: '450px'}}*/ />
        <img src={heroImg1} alt="Makrame image example 2" className='w-[450px] h-[80%]' /*style={{width: '450px'}}*/ />
        <img src={heroImg3} alt="Makrame image example 3" className='w-[450px] h-[80%] rounded-r-xl' /*style={{width: '450px'}}*/ />
      </div>
    </div>
  )
}

export default Hero