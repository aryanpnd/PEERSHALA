import { Box, Typography } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'
import banner from '../../assets/banner.png';
import { AppState } from '../../context/ContextProvider';
import MaxScreen from './MaxScreen';
import MinScreen from './MinScreen';

function Myprofile() {
  const { thememode } = AppState()
  return (
    <Box sx={{overflow:"scroll",borderRadius: "15px" ,padding:"1rem"}}>
      <>
        <img src={banner} style={{ width: "100%", borderRadius: "15px" }} alt="" />
      </>

      <Box margin={1} sx={{ background: thememode ? "#1a203c" : "#e7e7e7", borderRadius: "8px", padding: "0px" }}>
        <Typography fontWeight={"bold"} textAlign={"center"} variant="h5" component="h2">
          MY PROFILE
        </Typography>
      </Box >

      <Box marginTop={2} sx={{ width: "100%" }}>
        <div style={{ overflow: "scroll" }}><MinScreen /></div>
        <div style={{ overflow: "scroll" }}><MaxScreen /></div>
      </Box>
    </Box>
  )
}

export default Myprofile