import React from 'react'
import newsimg1 from '../assets/pictures/news/mak1.jpg'

const news = () => {
  return (
    <div name='news' className='flex w-full h-full justify-center bg-[#f3c2db]'>
        <div className='grid grid-row-3 justify-center items-center mt-[10%] w-full h-full'>
          <div className='sm:pb-8 pl-4'>
            <h1 className='text-6xl text-white align-middle'>Nyheter!</h1>
          </div>
          <div className='max-w-[900px] grid grid-rows-2 gap-4'>

            {/* Main news container */}
            <div className='bg-[#2b8894] h-[100%] w-[100%] p-4 rounded-xl col-span-2'>
              <h2 className='text-4xl text-white'>Nyheter Huvud</h2>
              <div className='flex flex-row-2 align-center'>
                <p className='mt-4 text-white whitespace-normal'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <div className='w-full'>
                  <img className='w-[250px] ml-6 rounded-[15%]' src={newsimg1} alt="news image" />
                </div>
              </div>
            </div>

            {/* secondary news container */}
            <div className='bg-[#2b8894] h-[100%] w-[100%] p-4 rounded-xl row-span-1'>
              <h2 className='text-4xl text-white'>Nyheter Sekundär</h2>
              {/* <img className='scale-[50%] p-4 rounded-[25%]' src={newsimg1} alt="news image" /> */}
              <p className='text-justify text-white whitespace-normal'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>

            {/* secondary news container */}
            <div className='bg-[#2b8894] h-[95.5%] w-[100%] p-4 rounded-xl row-span-2'>
              <h2 className='text-4xl text-white'>Nyheter Sekundär</h2>
              {/* <img className='scale-[50%] p-4 rounded-[25%]' src={newsimg1} alt="news image" /> */}
              <p className='text-justify text-white whitespace-normal'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default news