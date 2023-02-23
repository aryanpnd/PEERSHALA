import { Box, Paper } from '@mui/material'
import React from 'react'
import { AppState } from '../../context/ContextProvider'

function MinScreen() {
    const { thememode } = AppState()

  return (
    <Box
    
      sx={{
        display: { xs: 'flex', sm: 'flex', md: 'flex', lg: 'none', xl: 'none' },
        flexDirection:"column",
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 128,
          height: 128,
        },
        background: thememode ? "#1a203c" : "#d9d9d9", borderRadius: "8px" 
      }}
    >
      <Paper elevation={3} >h1</Paper>
      <Paper elevation={3} >h1</Paper>
    </Box>
  )
}

export default MinScreen