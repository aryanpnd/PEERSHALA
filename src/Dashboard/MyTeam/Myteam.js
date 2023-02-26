import { Box, Grid, Paper, Typography } from '@mui/material';
import React from 'react'
import styled from 'styled-components';
import Cards from "./Cardss/Cards";
import data from "./data";
import "./team.css"
function Myteam() {
  const Item = styled(Paper)(({ theme }) => ({

  }));
  return (
    <Box sx={{overflow:"scroll",borderRadius: "15px" ,padding:"1rem"}} >
      <Typography variant="h3" className="text-center " sx={{ marginBottom: 8, marginTop: 5 }} ><b><p className='font-resp'>About Peershala</p></b></Typography>
      <div className="grid place-content-center text-center" sx={{ width: "60%" }}><Typography variant="h6" className="text-justify" sx={{ marginBottom: 8 }}><p className=' font-resp2'>
        Many desktop publishing packages and web page editors now use Lorem Ipsum as their
        default model text,and a search for 'lorem ipsum' will uncover many web sites still
        in their infancy. Various versions have evolved over the years,
        sometimes by accident, sometimes on purpose (injected and the like).
      </p></Typography></div>
      <Grid
        container
        spacing={4}
        justify="center"
      >

        <Grid item xs={12} sm={12} md={12} lg={4}>
          <Cards

            heading={data[0].heading}
            matter={data[0].matter} />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={4}>
          <Cards

            heading={data[1].heading}
            matter={data[1].matter} />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Cards
            heading={data[0].heading}
            matter={data[0].matter} />
        </Grid>
      </Grid>
      </Box>
  )
}

export default Myteam
