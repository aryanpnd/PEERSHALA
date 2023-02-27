import { Box, Button, styled, Typography } from "@mui/material";
import React from "react";

import users from "../../assets/users.png";
import day from "../../assets/day.png";
import certificat from "../../assets/certificat.png";
import board from "../../assets/board.svg";
import user from "../../assets/user.png";

const Process = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    width: "30%",
    [theme.breakpoints.down("md")]: {
      width: "75%",
    },
  }));

  const GuidesBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-around",
    width: "80%",
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: "0",
      flexDirection: "column",
    },
  }));

  const GuideBox = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: theme.spacing(5),
    [theme.breakpoints.down("sm")]: {
      margin: theme.spacing(2, 0, 2, 0),
    },
  }));

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "5%",
          height: "5px",
          backgroundColor: "#000339",
          margin: "0 auto",
        }}
      ></div>

      <Typography
        variant="h2"
        sx={{ fontSize: "40px", fontWeight: "bold",  my: 3 }}
      >
       Our Process
      </Typography>


      <GuidesBox>
        <GuideBox>
          <img src={user}  />
            <Box
            sx={{
              cursor: "pointer",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              variant="body2"
              sx={{ fontWeight: "bold", fontSize: "14px", color: "#0689FF" }}
            >
              Registeration
            </Typography>
           
          </Box>
        </GuideBox>

        <GuideBox>
          <img sx={{width:2}} src={day}  />
          <Box
            sx={{
              cursor: "pointer",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              variant="body2"
              sx={{ fontWeight: "bold", fontSize: "14px", color: "#0689FF" }}
            >
            Date and Time Slot
            </Typography>
          
          </Box>
        </GuideBox>

        <GuideBox>
          <img sx={{height:2}} src={certificat}  />
          <Box
            sx={{
              cursor: "pointer",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              variant="body2"
              sx={{ fontWeight: "bold",marginTop:1, fontSize: "14px", color: "#0689FF" }}
            >
              Certificates
            </Typography>
            
          </Box>
          
        </GuideBox>
         <GuideBox>
          <img sx={{height:2}} src={board}  />
          <Box
            sx={{
              cursor: "pointer",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              variant="body2"
              sx={{ fontWeight: "bold",marginTop:2, fontSize: "14px", color: "#0689FF" }}
            >
              Online Classes
            </Typography>
           
          </Box>
        </GuideBox>
         <GuideBox>
          <img src={users}  />
          <Box
            sx={{
              cursor: "pointer",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              variant="body2"
              sx={{ fontWeight: "bold", fontSize: "14px", color: "#0689FF" }}
            >
             Peer to Peer Discussion
            </Typography>
            
          </Box>
        </GuideBox>
      </GuidesBox>

     
    </Box>
  );
};

export default Process;