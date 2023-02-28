import { Box, Button, styled, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import CustomButton from "./CustomButton";
import Process from "./Process";
import Details from "./Details";
import coee from "../../assets/coee.png";

const Myteam = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    gap: theme.spacing(5),
    marginTop: theme.spacing(3),
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
    },
  }));

  const Title = styled(Typography)(({ theme }) => ({
    fontSize: "64px",
    fontWeight: "bold",
    margin: theme.spacing(4, 0, 4, 0),
    [theme.breakpoints.down("sm")]: {
      fontSize: "40px",
    },
  }));

  return (
    <Box sx={{ minHeight: "80vh" }}>
      <Container>

        <CustomBox>
          <Box sx={{ flex: "1" }}>
            <Typography
              variant="body2"
              sx={{
                fontSize: "22px",
                fontWeight: "800",
                mt: 10,
                mb: 4,
              }}
            >
              Welcome to Peershala
            </Typography>
            <Title variant="h3">
              Discover a place where you'll learn
            </Title>
            <CustomButton
              backgroundColor="#0F1B4C"
              color="#fff"
              buttonText="Start Learning"
              heroBtn={true}
            />
          </Box>

          <Box sx={{ flex: "1.5" }}>
            <img
              src={coee}
              style={{ maxWidth: "100%", marginTop: "2rem" }}
            />
          </Box>
        </CustomBox>
         <Details></Details>
        <Process></Process>
       
      </Container>
    </Box>
  );
};

export default Myteam;
