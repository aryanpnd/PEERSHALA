import { Box, Paper, Typography } from '@mui/material'
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import React from 'react'
import { AppState } from '../../context/ContextProvider';
import Cards from './Cards';

function Achievements() {

  const { thememode } = AppState()

  return (
    <div style={{ overflow: "scroll", background: "", height: "100%", borderRadius: "10px" }}>

      <Paper elevation={5} id="slideInAnim" sx={{
        marginTop: "10px",
        display: "flex", justifyContent: "center", alignItems: "center", background: thememode ? "#7e0b932e" : "#e7e7e7", color: thememode ? "white" : "black",
        borderRadius: "10px", height: "3rem"
      }}>
        <Typography fontWeight={"bold"} variant="h5" component="h3">
          Achievements
        </Typography>
      </Paper>

      <Box sx={{
        display: { xs: 'flex', sm: 'flex', md: 'flex', lg: 'flex', xl: 'flex' },
        flexDirection: { xs: 'column', sm: 'column', md: 'column', lg: 'row', xl: 'row' },
        marginTop: "1rem",
        alignItems: "center",
        justifyContent: "space-evenly",
        padding: "2rem"
      }}>

        <Cards />

      </Box>


    </div>
  )
}

export default Achievements
