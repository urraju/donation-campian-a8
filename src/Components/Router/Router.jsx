

import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Donation from '../pages/Donation'
import Home from '../pages/Home'
import Statistics from '../pages/Statistics'
import Root from '../Roots/Root'
import DonationDetails from '../DonationDetails/DonationDetails'
import Banner from '../Banner/Banner'

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
                element : <Statistics />,
                loader : () => fetch('/public/data.json')
            },
            {
                path : "/donation/:id",
                element : <DonationDetails />,
                loader : () => fetch('/public/data.json')

            },
            {
                path : "/banner",
                element : <Banner />,
                loader : () => fetch('/public/data.json')
            }
        ]
    }
])
     
 

export default router;