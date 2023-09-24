

import React from 'react'
import { NavLink } from 'react-router-dom'

const MainLayout = () => {

    const Link = <>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/donation">Donation</NavLink>
    <NavLink to="/statistics">Statistics</NavLink>
    
</>
    return (
       <div className='w-full py-12 px-2 absolute'>
          <div className='flex flex-col  md:flex-row lg:flex-row justify-between w-9/12 mx-auto'>
            <img className='md:w-44 lg:w-44' src="/src/assets/Resources/Logo.png" alt="" />
            <div className='flex gap-6 font-light'>
                {Link}
            </div>
        </div>
       </div>
    )
}

export default MainLayout;