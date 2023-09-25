

import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Donation from '../pages/Donation'
import Home from '../pages/Home'
import Statistics from '../pages/Statistics'
import Root from '../Roots/Root'
import DonationDetails from '../DonationDetails/DonationDetails'

const router = createBrowserRouter([
    {
        path: "/",
        element : <Root /> ,
        children : [
            {
                path : "/",
                element : <Home />,
                loader : () => fetch('/public/data.json')
            },
            {
                path : "/donation",
                element : <Donation />,
                loader : () => fetch('/public/data.json')
            },
            {
                path : "/statistics",
                element : <Statistics />
            },
            {
                path : "/donation/:id",
                element : <DonationDetails />,
                loader : () => fetch('/public/data.json')

            }
        ]
    }
])
     
 

export default router;