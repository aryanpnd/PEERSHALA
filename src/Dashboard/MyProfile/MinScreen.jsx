import { Avatar, Box, Paper, Typography } from '@mui/material'
import React from 'react'
import { AppState } from '../../context/ContextProvider'

function MinScreen() {
  const { thememode } = AppState()

  return (
    <div style={{overflow:"scroll"}}>
      <Paper
        sx={{
          display: { xs: 'flex', sm: 'flex', md: 'flex', lg: 'none', xl: 'none' },
          flexDirection:"column",
          borderRadius: "8px",
          justifyContent: "space-evenly",
          padding: "15px",
          paddingRight: "2rem",
          paddingLeft: "2rem",
          background: thememode ? "#1a203c" : "#e7e7e7",
          borderRadius: "8px",
          color: thememode ? "#afafaf" : "#43464a",
        }}
      >

        <Box sx={{ display: "flex", justifyContent: 'center', marginBottom: "2rem" }}>
          
          <Avatar
            alt="User"
            
            src=""
            sx={{ width: 100, height: 100 }}
          />
        </Box>

        <Paper elevation={3} padding={3} sx={{ 
          display: "flex", flexDirection: "column",
          color: thememode ? "#afafaf" : "#43464a",
           background: thememode ? "#101534" : "#d9d9d9",
            borderRadius: "15px", textAlign: "center" }}>

          <Typography variant="h6" component="h2">
            Name
          </Typography>
          <Typography color={"grey"} variant="subtitle1" gutterBottom>
            Vinay Chitade
          </Typography>

          <Typography variant="h6" component="h2">
            Email
          </Typography>
          <Typography overflow={"clip"} color={"grey"} variant="subtitle1" gutterBottom>
            Vinay@sociovative.org
          </Typography>

          <Typography variant="h6" component="h2">
            College Name
          </Typography>
          <Typography color={"grey"} variant="subtitle1" gutterBottom>
            Rajarshi Shahu Mahavidyalaya
          </Typography>

          <Typography variant="h6" component="h2">
            Mentor Name
          </Typography>
          <Typography color={"grey"} variant="subtitle1" gutterBottom>
            Sudip das
          </Typography>

          <Typography variant="h6" component="h2">
            Course Name
          </Typography>
          <Typography color={"grey"} variant="subtitle1" gutterBottom>
            web intern
          </Typography>

          <Typography variant="h6" component="h2">
            Course Duration
          </Typography>
          <Typography color={"grey"} variant="subtitle1" gutterBottom>
            6 months
          </Typography>
        </Paper>

      </Paper>
      </div>
  )
}

export default MinScreen