import React from 'react'
import blocket from '../assets/Logo/blocket-logo.png'
import heroImg1 from '../assets/pictures/hero/hero-main-1.jpg'
import heroImg2 from '../assets/pictures/hero/hero-main-2.jpg'
import heroImg3 from '../assets/pictures/hero/hero-main-3.jpg'

const Hero = () => {
  return (
    <div name='hero' className='w-screen h-full pt-[200px] pb-[50%] md:pt-[180px] md:pb-[70%] bg-[#f3c2db]'>
      
      {/* Text Container */}
      <div className='flex flex-col'>
        <div className='max-w-full m-auto px-8 flex flex-col justify-center h-full text-white'>
          <h1 className='text-6xl mb-2'>Hej!</h1>
          <p className='xl:text-2xl text-xl underline decoration-4 underline-offset-2'>Och välkommen till min shop sida!</p>
          <p className=''>Här hittar du allt som har och göra med Makrame. Allt från bordslampor till kläder eller accessoarer.</p>
          <p>Allt är såklart handgjort av mig och trådarna är av högsta kvalité.</p>
          <p>Och det är 100% återvunnen tråd för miljöns skull.</p>
          <p className='lg:flex place-items-center'>Alla mina produkter finns på och kan beställas från <a className='hover:scale-110 duration-100' href="https://www.blocket.se/profil/39896919"><img src={blocket} alt="Blocket Logo" style={{width: '65px'}}/></a></p>
          <p className='place-items-center mt-4 text-2xl font-bold'>Så tveka inte! Det är bara att sätta igån och shoppa!</p>
        </div>
        {/* Picture Container */}
        <div className='flex max-h-[250px] ml-[3.5%] md:flex sm:max-h-[500px] sm:justify-center'>
          <div className='inline-flex mt-12 w-[50%] bg-[#f3c2db]'>
            <img src={heroImg2} alt="Makrame image example 1" className='rounded-l-xl' />
            <img src={heroImg1} alt="Makrame image example 2" />
            <img src={heroImg3} alt="Makrame image example 3" className='rounded-r-xl' />
          </div>
        </div>
        
      </div>

      
    </div>
  )
}

export default Hero