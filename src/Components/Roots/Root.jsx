

import React from 'react'
// import { ImMenu } from 'react-icons/im';
import { Outlet } from 'react-router-dom'
import MainLayout from '../layout/MainLayout';

const Root = () => {
    return (
        <div>
            {/* <ImMenu /> */}
            <MainLayout />
            <Outlet />
        </div>
    )
}

export default Root;