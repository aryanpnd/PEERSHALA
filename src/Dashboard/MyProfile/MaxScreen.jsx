import { Box, Paper } from '@mui/material'
import React from 'react'
import { AppState } from '../../context/ContextProvider'

function MaxScreen() {
    const { thememode } = AppState()
    return (
        <Box

            sx={{
                display: { xs: 'none', sm: 'none', md: 'none', lg: 'flex', xl: 'flex' },
                flexWrap: 'wrap',
                '& > :not(style)': {
                    m: 1,
                    width: 128,
                    height: 128,
                },
                background: thememode ? "#1a203c" : "#e7e7e7", borderRadius: "8px" 
            }}
        >
            <h1></h1>
        </Box>
    )
}

export default MaxScreen