import React from 'react'
import newsimg1 from '../assets/pictures/news/mak1.jpg'

const news = () => {
  return (
    <div name='news' className='w-full h-full bg-[#f3c2db]'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
          <div className='sm:pb-8 pl-4'>
            <h1 className='text-6xl text-white align-middle'>Nyheter!</h1>
          </div>
          <div className='max-w-[1000px] w-screen grid grid-cols-2 row-span-2 gap-8'>
            <div className='bg-[#2b8894] p-6 rounded-xl row-span-1'>
              <h2 className='text-4xl text-white'>Nyheter Huvud</h2>
              <img className='p-4 rounded-[25%]' src={newsimg1} alt="news image" />
              <p className='text-justify text-white whitespace-normal'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className='bg-[#2b8894] p-6 rounded-xl col-span-1'>
              <h2 className='text-4xl text-white'>Nyheter Huvud</h2>
              <img className='scale-[50%] p-4 rounded-[25%]' src={newsimg1} alt="news image" />
              <p className='text-justify text-white whitespace-normal'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className='bg-[#2b8894] p-6 rounded-xl col-span-2'>
              <h2 className='text-4xl text-white'>Nyheter Huvud</h2>
              <img className='scale-[50%] p-4 rounded-[25%]' src={newsimg1} alt="news image" />
              <p className='text-justify text-white whitespace-normal'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default news