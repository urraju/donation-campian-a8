
import React from 'react'
import { NavLink, useLoaderData } from 'react-router-dom'
import Banner from '../Banner/Banner'
import HomeCard from '../HomeCard/HomeCard'

const Home = () => {

    const data = useLoaderData()
  
    return (
        <div>
        <Banner />
         <div className='grid mt-24 w-9/12 mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14'>
            {
                data.map(item => <HomeCard key={item.id} data={item} />)
            }
         </div>
        </div>
    )
}

export default Home