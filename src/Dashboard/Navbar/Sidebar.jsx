import { Button } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { AppState } from '../../context/ContextProvider'
import ThemeToggleButton from './ThemeToggleButton'
import SidebarComponents from './SidebarComponents'

function Sidebar() {
    const { thememode } = AppState()
    const navigate = useNavigate();

    return (
        <Box sx={{ background: thememode ? '#171d37' : '#ffffff73', width: 280, height: 1, display: { xs: 'none', sm: 'none', md: 'none', lg: 'block', xl: 'block' } }}>

            <SidebarComponents/>
        </Box>
    )
}

export default Sidebar