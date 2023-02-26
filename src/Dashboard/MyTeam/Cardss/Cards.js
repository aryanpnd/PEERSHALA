/*import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import "../team.css"
function Cards(props) {
  return (
    <div className="hover_prop ">
    <Card className="card_res " style={{hover:"background-color: #222747 "}} sx={{marginLeft:"110%",opacity: 0.5,backgroundColor:"#0a0d1f",color:"white", boxShadow: 5, border: "1px solid black"}} >
       
        <CardContent >
          <Typography className='font-resp2' sx={{color:"white"}} gutterBottom variant="h6" component="div">
            {props.heading}
          </Typography>
          <Typography className='font-resp2' sx={{color:"white"}} variant="body2" color="text.secondary">
            {props.matter}
          </Typography>
        </CardContent>

    </Card></div>
  )
}

export default Cards*/
import { Card, CardContent, makeStyles, Typography } from "@mui/material";
import React from "react";

export default function Cards(props) {

  return (
    <Card  variant="outlined">
      <CardContent>
        <Typography
          
          color="textSecondary"
          gutterBottom
        >
        
        {props.heading}
        </Typography>
         <Typography variant="body2" component="p">
          {props.matter}
          </Typography>
      </CardContent>
    </Card>
  );
}