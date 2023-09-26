

import React from 'react'
import { NavLink } from 'react-router-dom'
// import { AiOutlineMenu } from 'react-icons/ai';

const MainLayout = () => {

    const Link = <>
    <NavLink className={({isActive, isPending}) => isPending ? 'pending' : isActive ? 'text-rose-500 underline' : ''} to="/">Home</NavLink>
    <NavLink className={({isActive, isPending}) => isPending ? 'pending' : isActive ? 'text-rose-500 underline' : ''} to="/donation">Donation</NavLink>
    <NavLink className={({isActive, isPending}) => isPending ? 'pending' : isActive ? 'text-rose-500 underline' : ''} to="/statistics">Statistics</NavLink>
    
</>
    return (
       <div className='w-full py-12 relative z-30 px-2 '>
          <div className='flex flex-col items-center  md:flex-row lg:flex-row justify-between w-9/12 mx-auto'>
            <img className='md:w-44 lg:w-44' src="/src/assets/Resources/Logo.png" alt="" />
            
            <div className='flex bg-sky-500 gap-6 font-bold'>
                {Link}
            </div>
        </div>
       </div>
    )
}

export default MainLayout;