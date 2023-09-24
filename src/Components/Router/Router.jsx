

import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Donation from '../pages/Donation'
import Home from '../pages/Home'
import Statistics from '../pages/Statistics'
import Root from '../Roots/Root'

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
                element : <Donation />
            },
            {
                path : "/statistics",
                element : <Statistics />
            }
        ]
    }
])
     
 

export default router;