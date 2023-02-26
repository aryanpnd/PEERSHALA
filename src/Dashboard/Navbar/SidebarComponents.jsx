import { Avatar, Box, Button, Divider } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { AppState } from '../../context/ContextProvider';
import ThemeToggleButton from './ThemeToggleButton'
import logo from '../../assets/logo.png';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import GroupsIcon from '@mui/icons-material/Groups';
import Alert from './Alert';


function SidebarComponents() {
  const { thememode } = AppState()
  const navigate = useNavigate()

  return (
    <Box sx={{ height: 1, overflow: "scroll" }}>

      <Box sx={{ display: "flex", paddingX: 2, paddingY: 2 }}>
        <img src={logo} alt="Peershala" style={{ fontSize: "2rem", filter: thememode ? 'invert(100%)' : "", height: "3rem" }} />
      </Box>


      <Box sx={{ display: "flex", justifyContent: 'center', flexDirection: "column", paddingX: 2 }}>
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <ThemeToggleButton />
        </Box>

        <Box sx={{ display: "flex", justifyContent: 'center' }}>
          <Avatar
            alt="User"
            src=""
            sx={{ width: 100, height: 100 }}
          />
        </Box>

        <Box sx={{ display: "flex", justifyContent: 'center', marginY: 1 }}>

        </Box>
      </Box>

      <Box sx={{ paddingX: 2 }}>
        <Divider sx={{ background: thememode ? "grey" : "white", marginY: 3, }} />
      </Box>


      <Box sx={{ display: "flex", flexDirection: "column", paddingX: 2 }}>

        <Box sx={{ display: "flex", flexDirection: "column", marginY: 2 }}>

          <Button sx={{ marginY: 1 }} onClick={() => navigate("/dashboard")} >
            <AccountCircleIcon sx={{ marginX: 1 }} />Profile
          </Button>

          <Button sx={{ marginY: 1 }} onClick={() => navigate("/dashboard/achieve")} >
            <EmojiEventsIcon sx={{ marginX: 1 }} /> Achievements
          </Button>

          <Button sx={{ marginY: 1 }} onClick={() => navigate("/dashboard/myteam")} >
            <GroupsIcon sx={{ marginX: 1 }} /> My teams
          </Button>

        </Box>

        <Divider sx={{ background: thememode ? "grey" : "white" }} />

        <Box sx={{ display: "flex", flexDirection: "column", marginY: 2 }}>

          <Alert />

          <Button
            color="primary"
            disabled={false}
            size="small"
            variant="outlined">
            Need help ?
          </Button>

        </Box>

      </Box>

    </Box>
  )
}

export default SidebarComponents