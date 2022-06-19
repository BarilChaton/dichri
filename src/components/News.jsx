import React from 'react'
import newsimg1 from '../assets/pictures/news/mak1.jpg'

const news = () => {
  return (
<<<<<<< HEAD
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
=======
    <div name='news' className='w-full h-full bg-[#f3c2db] text-white'>
      {/* news container main */}
      <div className='flex justify-center items-center'>
        <h1 className='text-xl'>Nyheter.</h1>
        <div className='grid grid-rows-3 grid-flow-col gap-4'>
          {/* object 1 */}
          <div className='w-90% h-50% bg-slate-500'>

          </div>
          {/* object 2 */}
          <div>

          </div>
          {/* object 3 */}
          <div>

>>>>>>> b97977e401a66ac7d6ed61daf024a9cee328d8b5
          </div>
        </div>
      </div>
    </div>
  )
}

export default news