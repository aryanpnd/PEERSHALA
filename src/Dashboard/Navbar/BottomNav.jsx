import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import GroupsIcon from '@mui/icons-material/Groups';
import { AppState } from '../../context/ContextProvider';
import { useNavigate } from 'react-router-dom';

export default function BottomNav() {
    const [value, setValue] = React.useState(0);
    const { thememode } = AppState()
    const navigate = useNavigate();

    return (
        <Box sx={{
            display: { xs: 'block', sm: 'block', md: 'block', lg: 'none', xl: 'none' },
            position: "absolute",
            bottom: "1px",
            width: "100%"
        }}>
            <BottomNavigation
                sx={{
                    background: thememode ? "#070c27" : "#f6f7fb",

                }}
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            >
                <BottomNavigationAction onClick={() => navigate("/dashboard")} sx={{ color: thememode ? "white" : "black", }} label="Profile" icon={<AccountCircleIcon />} />
                <BottomNavigationAction onClick={() => navigate("/dashboard/achieve")} sx={{ color: thememode ? "white" : "black", }} label="Achivements" icon={<EmojiEventsIcon />} />
                <BottomNavigationAction onClick={() => navigate("/dashboard/myteam")} sx={{ color: thememode ? "white" : "black", }} label="My team" icon={<GroupsIcon />} />
            </BottomNavigation>
        </Box>
    );
}