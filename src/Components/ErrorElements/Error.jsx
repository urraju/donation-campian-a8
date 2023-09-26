

import React from 'react'

const Error = () => {
    return (
        <div className='w-full'>
           <div className='w-9/12 h-[600px] mx-auto flex items-center justify-center'>
            <div className='text-center'>
            <img className='mb-6 mx-auto' src="/src/assets/Resources/error-2.png" alt="" />
            <h1 className=' text-xl mb-2 lg:text-4xl md:text-4xl font-bold'>Page Not Found </h1>
            <p className='text-5xl  font-bold'>4<span className='text-rose-600'>0</span>4</p>
            </div>
           </div>
        </div>
    )
}

export default Error