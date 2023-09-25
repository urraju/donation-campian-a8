

import React from 'react'
import { useLoaderData , useParams} from 'react-router-dom'
import { storedDataSave } from '../LocalStorage/LocalStorage'

const DonationDetails = () => {

    const donation = useLoaderData()
    // console.log(donation);
    const {id} = useParams()
    const idInt = parseInt(id)
    const donattionId = donation.find(item => item.id === idInt)
    const {picture,description, price, title, category, category_bg_color, card_bg_color, text_button_bg_color} = donattionId;
     
    const priceHandler = () => {
        storedDataSave(idInt)
    }
    return (
        <div className='w-full my-10'>
            <div className='w-9/12 mx-auto '>
            <div className='relative mx-auto'>
            <img className='md:w-10/12 lg:w-9/12 
            lg:rounded-b-2xl mx-auto rounded-lg md:roundedb-2xl ' src={picture} alt="" />
            <div className='bg-black mx-auto absolute bottom-0 md:w-10/12 lg:rounded-b-2xl rounded-b-lg opacity-50 md:roundedb-2xl  lg:w-9/12  w-full h-16 md:h-24 lg:h-24    md:ml-[62px] lg:right-[179px]  '></div>

            <button onClick={priceHandler} style={{background : text_button_bg_color}} className=' absolute z-30 md:bottom-5 bottom-3 lg:bottom-5 left-5 lg:left-52 md:left-20 py-2 px-4 rounded text-white font-light'>Donate ${price}</button>

            </div>
             
            <div className='mt-8 md:ml-16 lg:ml-40 lg:px-5'>
            <p className=' text-2xl md:text-3xl lg:text-3xl font-bold mb-4'>{title}</p>
            <p className='text-gray-500 font-light'>{description}</p>
            </div>
            </div>
        </div>
    )
}

export default DonationDetails