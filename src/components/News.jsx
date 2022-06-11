import React from 'react'

const news = () => {
  return (
    <div name='news' className='w-full h-screen bg-[#ff9cce]'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4 mt-60'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#5ce1e6]'>Nyheter</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default news