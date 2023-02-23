import { Box, Button } from '@mui/material'
import React from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import { AppState } from '../context/ContextProvider'
import Achievements from './Achievements/Achievements'
import Myprofile from './MyProfile/Myprofile'
import Myteam from './MyTeam/Myteam'
import AppDrawer from './Navbar/AppDrawer'
import AppNavbar from './Navbar/AppNavbar'
import Sidebar from './Navbar/Sidebar'

function Dashboard() {
    const { thememode } = AppState()


    return (
        <Box component="div" sx={{
            display: { xs: 'block', sm: 'block', md: 'block', lg: 'flex', xl: 'flex' },
            background: thememode ? "#0e122c" : "#d9d9d9",
            color: thememode ? "white" : "black",
            width: "100%", height: "100%", padding: "0", margin: "0"
        }}>

            <AppNavbar />

            <Sidebar />

            <div style={{width:"90%",height:"80%",padding:"1rem"}}>
                <Outlet />
            </div>
        </Box>
    )
}

export default Dashboard