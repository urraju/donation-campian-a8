

import React from 'react'

const Banner = () => {
    return (
        <div className='flex justify-center items-center h-80'>
        <div  className='bg-[url(https://i.ibb.co/tPz3tK9/Rectangle-4281.png?fbclid=IwAR2NBwfDCkiqEsYvwH7XU4DncCodQZZ34f3ILeWty0nbKGW4r4MPa7atIfU)] w-full h-[600px] absolute top-0 flex  justify-center  bg-cover bg-no-repeat items-center opacity-10  '>

           
              
         </div>
             <div className=' text-center z-30 '>
              <h1 className=' text-2xl md:text-4xl lg:text-5xl font-bold'>I Grow By Helping People In Need</h1>
              
              <div className='bg-white rounded text-black border'>
              <input className='bg-transparent outline-none mt-10' type="text" />
              <button className='bg-rose-500 px-4 py-2'>Search</button>
              </div>
             </div>
           </div>
        
    )
}

export default Banner