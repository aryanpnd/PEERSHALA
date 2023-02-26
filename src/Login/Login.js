import React from 'react'
import Box from '@mui/material/Box';
import { CardMedia } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import "./login.css"
import { Facebook, Google } from '@mui/icons-material';
function Login() {
  return (
     <Box sx={{backgroundColor:"#0e122c"}} className="h-screen w-screen grid place-items-center outer">
          {/*For large resolution*/}
         <Box  
        className="h-fit w-3/4 bg-white lrge_version mt-10" >
         <Box class="grid grid-cols-2 gap-0">
         <Box>
            <CardMedia
             sx={{height: 537 }}
             component="img"
             image="./images/login2.jpg"
             alt="login image"></CardMedia>
         </Box>
         <Box>
            <CardContent className=''>
                <Typography variant="h4" sx={{marginBottom:8 }} color="black"><b>Welcome Back!</b></Typography>
                <TextField className="w-3/4 text_input " sx={{marginBottom:3 }} label="Email" variant="outlined" /><br/>
                <TextField className="w-3/4 text_input" sx={{marginBottom:3 }} variant="outlined" id="outlined-basic" label="Password"  /><br/>
                <Button className="w-3/4 " style={{ borderRadius: 50 ,textTransform:"capitalize" }} sx={{marginBottom:2 }} variant="contained">Login</Button><br/>
                <hr /><br/>
                <Button className="w-3/4" startIcon={<Facebook/>} style={{backgroundColor: "red",textTransform:"capitalize"}} sx={{marginBottom:1 }} variant="contained">Login with Google</Button><br/>
                <Button className="w-3/4" startIcon={<Google/>} style={{backgroundColor: "rgb(59,89,152)",textTransform:"capitalize"}} sx={{marginBottom:2 }} variant="contained">Login with Facebook</Button><br/><hr />
            </CardContent>
            <Link variant="body2" href="#">Forgot Password?</Link><br/>
            <Link variant="body2"href="#">Create an Account!</Link>
         </Box>
          </Box>
         </Box>
         {/*For mobile resolution*/}
         <Box className="h-fit w-3/4 bg-white  mobile_version">
          <Box>
            <CardContent className=''>
                <Typography variant="h6" sx={{marginBottom:3 }} color="black"><b>Welcome Back!</b></Typography>
                <TextField className="w-3/4 text_input " sx={{marginBottom:2 }} label="Email" variant="outlined" /><br/>
                <TextField className="w-3/4 text_input" sx={{marginBottom:2 }} variant="outlined" id="outlined-basic" label="Password"  /><br/>
                <Button className="w-3/4 " style={{ borderRadius: 50 ,textTransform:"capitalize" }} sx={{marginBottom:2 }} variant="contained">Login</Button><br/>
                <hr /><br/>
                <Button className="w-3/4" startIcon={<Facebook/>} style={{backgroundColor: "red",textTransform:"capitalize"}} sx={{marginBottom:1 }} variant="contained">Login with Google</Button><br/>
                <Button className="w-3/4" startIcon={<Google/>} style={{backgroundColor: "rgb(59,89,152)",textTransform:"capitalize"}} sx={{marginBottom:1 }} variant="contained">Login with Facebook</Button><br/><hr />
            </CardContent>
            <Link variant="body2" href="#">Forgot Password?</Link><br/>
            <Link variant="body2"href="#">Create an Account!</Link>
         </Box>
         </Box>
     </Box>
      

  )
}

export default Login