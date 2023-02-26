import { Avatar, Box, Divider, Paper, Typography } from '@mui/material'
import React from 'react'
import { AppState } from '../../context/ContextProvider'
import logo from '../../assets/logo.png';

function MaxScreen() {
    const { thememode } = AppState()
    return (
        <div style={{ overflow: "scroll" }}>


            <Paper
                elevation={3}
                sx={{
                    display: { xs: 'none', sm: 'none', md: 'none', lg: 'flex', xl: 'flex' },
                    borderRadius: "8px",
                    justifyContent: "space-evenly",
                    padding: "15px",
                    paddingRight: "5rem",
                    paddingLeft: "5rem",
                    background: thememode ? "#1a203c" : "#e7e7e7",
                    borderRadius: "8px",
                    color: thememode ? "#afafaf" : "#43464a"
                }}
            >

                <Paper elevation={3} sx={{
                    display: "flex",
                    flexDirection: "column",
                    color: thememode ? "#afafaf" : "#43464a",
                    background: thememode ? "#101534" : "#d9d9d9", borderRadius: "15px", padding: "inherit"
                }}>
                    <Box sx={{ display: "flex", justifyContent: 'center', marginBottom: "2rem" }}>

                        <Avatar
                            alt="User"

                            src=""
                            sx={{ width: 100, height: 100 }}
                        />
                    </Box>

                    <Typography variant="h6" component="h2">
                        Name
                    </Typography>
                    <Typography color={"grey"} variant="subtitle1" gutterBottom>
                        Vinay Chitade
                    </Typography>

                    <Typography variant="h6" component="h2">
                        Email
                    </Typography>
                    <Typography color={"grey"} variant="subtitle1" gutterBottom>
                        Vinay@sociovative.org
                    </Typography>

                </Paper>

                <Paper elevation={3} overflow={"scroll"} sx={{
                    background: thememode ? "#101534" : "#d9d9d9",
                    color: thememode ? "#afafaf" : "#43464a",
                    borderRadius: "15px", padding: "inherit"
                }} >
                    <Typography variant="h6" component="h2">
                        College Name
                    </Typography>
                    <Typography color={"grey"} variant="subtitle1" gutterBottom>
                        Rajarshi Shahu Mahavidyalaya
                    </Typography>

                    <Typography variant="h6" component="h2">
                        Mentor Name
                    </Typography>
                    <Typography color={"grey"} variant="subtitle1" gutterBottom>
                        Sudip das
                    </Typography>

                    <Typography variant="h6" component="h2">
                        Course Name
                    </Typography>
                    <Typography color={"grey"} variant="subtitle1" gutterBottom>
                        web intern
                    </Typography>

                    <Typography variant="h6" component="h2">
                        Course Duration
                    </Typography>
                    <Typography color={"grey"} variant="subtitle1" gutterBottom>
                        6 months
                    </Typography>

                </Paper>

            </Paper>
        </div>
    )
}

export default MaxScreen