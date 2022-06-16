import React from 'react'
import newsimg1 from '../assets/pictures/news/mak1.jpg'

const news = () => {
  return (
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

          </div>
        </div>
      </div>
    </div>
  )
}

export default news