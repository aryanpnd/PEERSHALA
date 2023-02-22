import { Button } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { AppState } from '../../context/ContextProvider'
import ThemeToggleButton from './ThemeToggleButton'

function Sidebar() {
    const { thememode } = AppState()
    const navigate = useNavigate();
    
  return (
    <Box sx={{background:thememode?'#171d37':'white',width:280,height:1 ,display: { xs: 'none',sm:'none', md: 'none', lg: 'block',xl:'block' }}}>

        <Box sx={{display:"flex"}}>

        <ThemeToggleButton />
        </Box>
        <Button onClick={()=> navigate("/dashboard")} >profile</Button>
        <Button onClick={()=> navigate("/dashboard/achieve")} >Achievements</Button>
        <Button onClick={()=> navigate("/dashboard/myteam")} >my teams</Button>
    </Box>
  )
}

export default Sidebar