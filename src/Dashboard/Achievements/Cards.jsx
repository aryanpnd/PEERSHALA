import { Box, Button, Paper, Typography } from '@mui/material'
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import React from 'react'
import { AppState } from '../../context/ContextProvider'

function Cards() {
    const { thememode } = AppState()

    return (
        <>

{/* --------------------------------Card I----------------------------------- */}

            <Paper id="slideFromBottomAnim" elevation={6} sx={{
                display: "flex",
                flexDirection: "column",
                color: thememode ? "#afafaf" : "#43464a",
                background: thememode ? "#101534" : "#d9d9d9",
                borderRadius: "6px", padding: "inherit",
                width: "13rem",
                height: "20rem",
                marginTop:"1rem"
            }}>

                <Box sx={{
                    background: thememode ? "#0e122c" : "#bdbdbd",
                    marginBottom: "1rem",
                    height: "5rem",
                    width: "9rem",
                    borderRadius: "6px", padding: "inherit"
                }}>

                </Box>

                <Box sx={{ wordWrap: "break-word" }} >
                    <Typography variant="h4" component="h2">
                        Offer Letter
                    </Typography>
                    <Typography margin={3} variant="p" component="p">
                        Please download your Offer Letter from here...
                    </Typography>
                </Box>

                <Box display={"flex"} justifyContent={"center"} sx={{ width: "100%" }}><Button
                    startIcon={<CloudDownloadIcon />} 
                    style={{
                        background:"#7b1fa2",
                        width: "70%",
                        borderRadius: "7px", height: "3rem", color: "white",
                    }} variant="contained" >Download</Button>
                </Box>

            </Paper>

{/* ------------------------------CARD II ------------------------------ */}

            <Paper id="slideFromBottomAnim" elevation={6} sx={{
                display: "flex",
                flexDirection: "column",
                color: thememode ? "#afafaf" : "#43464a",
                background: thememode ? "#101534" : "#d9d9d9",
                borderRadius: "6px", padding: "inherit",
                width: "13rem",
                height: "20rem",
                marginTop:"1rem"
            }}>

                <Box sx={{ wordWrap: "break-word" }} >
                    <Typography variant="h4" component="h2">
                    Internship Completion Certificate
                    </Typography>
                    <Typography margin={3} variant="p" component="p">
                    Please download your Internship Completion Certificate from here...
                    </Typography>
                </Box>

                <Box display={"flex"} justifyContent={"center"} sx={{ width: "100%" }}><Button
                    startIcon={<CloudDownloadIcon />} 
                    style={{
                        background:"#7b1fa2",
                        width: "70%",
                        borderRadius: "7px", height: "3rem", color: "white",
                    }} variant="contained" >Download</Button>
                </Box>

            </Paper>


{/* --------------------------------- Card III ------------------------------- */}

            <Paper id="slideFromBottomAnim" elevation={6} sx={{
                display: "flex",
                flexDirection: "column",
                color: thememode ? "#afafaf" : "#43464a",
                background: thememode ? "#101534" : "#d9d9d9",
                borderRadius: "6px", padding: "inherit",
                width: "13rem",
                height: "20rem",
                marginTop:"1rem"
            }}>

                <Box sx={{ wordWrap: "break-word" }} >
                    <Typography variant="h4" component="h2">
                    Letter Of Recommendation
                    </Typography>
                    <Typography margin={3} variant="p" component="p">
                    Please download your Letter Of Recommendation from here...
                    </Typography>
                </Box>

                <Box display={"flex"} justifyContent={"center"} sx={{ width: "100%" }}><Button
                    startIcon={<CloudDownloadIcon />} 
                    style={{
                        background:"#7b1fa2",
                        width: "70%",
                        borderRadius: "7px", height: "3rem", color: "white",
                    }} variant="contained" >Download</Button>
                </Box>

            </Paper>

        </>
    )
}

export default Cards