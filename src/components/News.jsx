import React from 'react'

const news = () => {
  return (
    <div name='news' className='w-full h-screen bg-[#f3c2db]'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
          <div className='sm:pb-8 pl-4 mt-80 '>
            <h1 className='text-6xl text-white align-middle'>Nyheter!</h1>
          </div>
          <div className='max-w-[1000px] w-full grid grid-cols-2 row-span-2 gap-8'>
            <div className='bg-[#2b8894] p-6 rounded-xl'>
              <h2 className='text-4xl text-white'>Nyheter Huvud</h2>
              <p className='text-white whitespace-normal'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>      
          </div>
        </div>
    </div>
  )
}

export default news