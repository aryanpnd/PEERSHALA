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

export default function AppNavbar() {
    const { thememode, setThememode, toggleTheme } = AppState()


    return (
        <Box sx={{ flexGrow: 1, display: { xs: 'block',sm:'block', md: 'block', lg: 'none',xl: 'none' } }}>

            <AppBar position="static" sx={{
                background: thememode ? "#070c27" : "#f6f7fb",
                color: thememode ? "white" : "black",
            }}>

                <Toolbar>

                    <AppDrawer />

                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        PEERSHALAA
                    </Typography>

                    <ThemeToggleButton />
                    
                    <Button color="inherit">Login</Button>

                </Toolbar>
            </AppBar>
        </Box>
    );
}