import React, { useState } from 'react'
import Box from '@mui/material/Box';
import { CardMedia, Chip, Divider, Grid, IconButton, InputAdornment, OutlinedInput, Paper } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import logo from '../assets/logo.png';
import google from '../assets/google.png';
import facebook from '../assets/facebook.png';
import { styled } from '@mui/material/styles';
import { purple } from '@mui/material/colors';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { width } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import ThemeToggleButton from './ThemeToggleButton';
import { Visibility, VisibilityOff } from '@mui/icons-material';

function Login() {


  const navigate = useNavigate()

  const [loginthememode, setloginThememode] = useState(false)

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const toggleTheme = () => {
    loginthememode === false ? setloginThememode(true) : setloginThememode(false)
  }

  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[900],
    width: "100%",
    height: "3rem",
    fontWeight: "bold",
    borderRadius: "8px",
    '&:hover': {
      backgroundColor: purple[700],
    },
  }));

  const CssTextField = styled(TextField,OutlinedInput)({
    '& label.Mui-focused': {
      color: loginthememode ? "white" : "blue",
    },
    label: {
      color: loginthememode ? "#bbbbbb" : "grey",
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: "blue",
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: "grey",
      },
      '&:hover fieldset': {
        borderColor: loginthememode ? "white" : "black",
      },
      '&.Mui-focused fieldset': {
        borderColor: '#1976d2',
      },
      input: {
        color: loginthememode ? "white" : "black",
      }
    },
  });



  return (
    <Box sx={{
      overflow: "scroll",
      display: "flex",
      flexDirection: { xs: 'column', sm: 'column', md: 'column', lg: '', xl: '' },
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: loginthememode ? "#0e122c" : "#dfdfdf",
      height: "100%",
      width: "100%",
      color: loginthememode ? "white" : "black"
    }}>

      <Box onClick={toggleTheme} sx={{ display: "flex", justifyContent: "flex-end" }}>
        <ThemeToggleButton />
      </Box>

      {/* <img src={logo} alt="Peershala" style={{marginTop:"10rem", fontSize: "2rem", height: "5rem" }} /> */}

      <Paper elevation={3} sx={{
        background: loginthememode ? "#1a203c" : "#ffffff",
        padding: "3rem",
        borderRadius: "12px",
        width: { xs: '70%', sm: '70%', md: '70%', lg: '30%', xl: '30%' },
        height: { xs: '80%', sm: '80%', md: '80%', },
        overflow: "scroll",
        color: loginthememode ? "white" : "black"
      }}>

        <Box sx={{ display: "flex", flexDirection: "column" }}>

          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <img src={logo} alt="Peershala" style={{ filter: loginthememode ? 'invert(100%)' : "", fontSize: "1rem", height: "5rem", width: "70%" }} />
          </Box>


          <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "space-evenly", height: "20rem", color: loginthememode ? "white" : "black" }}>

            <Box sx={{ display: "flex", justifyContent: "space-between", color: loginthememode ? "white" : "black" }}>
              <CssTextField fullWidth label="Name" />
              <Box width={"3rem"}></Box>
              <CssTextField fullWidth label="Last name" />
            </Box>
            <CssTextField type="email" fullWidth label="Email" />

            <CssTextField  fullWidth label="Password" />
            <CssTextField fullWidth label="Confirm Password"/>

          </Box>

          <Box sx={{ display: "flex", flexDirection: "column", height: "5rem", width: "100%", justifyContent: "space-between" }}>
            <ColorButton variant="contained" onClick={() => navigate("/dashboard")}>Sign Up</ColorButton>
            <Link href="#" underline="hover">
              {'Forget Password?"'}
            </Link>
            {/* <Box sx={{display:"flex",justifyContent:"space-between"}}>
            </Box> */}
          </Box>

          <Divider sx={{ color: loginthememode ? "#afafaf" : "#43464a", marginY: 3, }}>
            Already have an account?
          </Divider>


          <Box display={"flex"} justifyContent={"center"} sx={{ width: "100%" }}>
            <Button
              onClick={() => navigate("/login")}
              startIcon={<ExitToAppIcon />} style={{
                width: "70%",
                borderRadius: "7px", height: "3rem", color: "white", textTransform: "capitalize"
              }} variant="contained">Login</Button>
          </Box>


        </Box>

      </Paper>

    </Box>
  )
}

export default Login