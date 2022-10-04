import React from 'react'
import { Outlet } from 'react-router-dom'
import Appbar from './features/appbar/Appbar';

function App() {
    return (
        <>
            <Appbar />
            <Outlet />
        </>
    )
}

export default App