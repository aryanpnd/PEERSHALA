import { styled, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import stpic from "../../assets/stpic.webp";
import ndpic from "../../assets/ndpic.webp";

const Details = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    gap: theme.spacing(10),
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      textAlign: "center",
    },
  }));

  const ImgContainer = styled(Box)(({ theme }) => ({
    width: "100%",
    [theme.breakpoints.down("md")]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  }));

  const LargeText = styled(Typography)(({ theme }) => ({
    fontSize: "64px",
    color: "#000",
    fontWeight: "700",
    [theme.breakpoints.down("md")]: {
      fontSize: "32px",
    },
  }));

  const SmallText = styled(Typography)(({ theme }) => ({
    fontSize: "18px",
    color: "#7B8087",
    fontWeight: "500",
    [theme.breakpoints.down("md")]: {
      fontSize: "14px",
    },
  }));

  const TextFlexbox = styled(Box)(({ theme }) => ({
    marginTop: theme.spacing(7),
    display: "flex",
    justifyContent: "space-between",
    padding: theme.spacing(0, 5, 0, 5),
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      gap: theme.spacing(5),
    },
  }));

  const Divider = styled("div")(({ theme }) => ({
    width: "13%",
    height: "5px",
    backgroundColor: "grey",
    [theme.breakpoints.down("md")]: {
      marginLeft: "auto",
      marginRight: "auto",
    },
  }));

  return (
    <Box sx={{ py: 10,mt:16 }}>
      <Container>
        <CustomBox>
          <ImgContainer>
            <img src={stpic} alt="house" style={{ maxWidth: "90%" }} />
          </ImgContainer>

          <Box>
            <Divider />
            <Typography
              sx={{
                fontSize: "35px",
                fontWeight: "700",
                my: 3,
              }}
            >
             Our Mision
            </Typography>

            <Typography
              sx={{
                fontSize: "16px",
                color: "#5A6473",
                lineHeight: "27px",
              }}
            >
              At Peershala, we encourage peer learning, which is primarily founded on the idea of
              the Power of Association, so that students can learn crucial skills in small peer 
              groups under the supervision of a mentor who is an authority on that particular topic.
            </Typography>
          </Box>
        </CustomBox>
        <CustomBox sx={{ marginTop:9}}>
          <ImgContainer>
            <img src={ndpic} alt="house" style={{ maxWidth: "90%" }} />
          </ImgContainer>

          <Box>
            <Divider />
            <Typography
              sx={{
                fontSize: "35px",
                fontWeight: "700",
                my: 3,
              }}
            >
             Our Vision
            </Typography>

            <Typography
              sx={{
                fontSize: "16px",
                color: "#5A6473",
                lineHeight: "27px",
              }}
            >
              A large demand for inexpensive and simple ways to learn different skills has been 
              created by the online shift and changes in education system the covid and related 
              problems. Peershala is here as a result to solve those inconveniences faced by the individuals.
            </Typography>
          </Box>
        </CustomBox>

      </Container>
    </Box>
  );
};

export default Details;