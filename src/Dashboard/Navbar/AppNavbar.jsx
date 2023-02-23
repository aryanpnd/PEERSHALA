import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { AppState } from '../../context/ContextProvider';
import ThemeToggleButton from './ThemeToggleButton';
import AppDrawer from './AppDrawer';
import logo from '../../assets/logo.png';


export default function AppNavbar() {
    const { thememode, setThememode, toggleTheme } = AppState()


    return (
        <Box sx={{ flexGrow: 1, display: { xs: 'block',sm:'block', md: 'block', lg: 'none',xl: 'none' } }}>

            <AppBar position="static" sx={{
                background: thememode ? "#070c27" : "#f6f7fb",
                color: thememode ? "white" : "black",
            }}>

                <Toolbar sx={{display:"flex",justifyContent:"space-between"}}>

                    <AppDrawer />

                    <img src={logo} alt="Peershala" style={{ fontSize: "2rem", filter: thememode ? 'invert(100%)' : "", height: "2.5rem" }} />

                    
                    <Button color="inherit">Login</Button>

                </Toolbar>
            </AppBar>
        </Box>
    );
}