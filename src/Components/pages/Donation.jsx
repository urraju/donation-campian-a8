

import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import { getStoreData } from '../LocalStorage/LocalStorage'
import DonatePrice from '../DonationDetails/DonatePrice'

const Donation = () => {

    const priceButtonData = useLoaderData()
     
    const [clickButton, setClickButton] = useState([])
    useEffect(() => {
        const storedCardPrice = getStoreData()
        if(priceButtonData.length > 0) {
            const priceApplied = priceButtonData.filter(item => storedCardPrice.includes(item.id))
            setClickButton(priceApplied)
        }
    }, [])
    return (
        <div>
            <div className='w-9/12 my-10 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5'>
               {
                clickButton.map(item => <DonatePrice key={item.id} buttonData={item} />)
               }
            </div>
        </div>
    )
}

export default Donation;