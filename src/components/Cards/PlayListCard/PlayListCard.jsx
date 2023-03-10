import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'
import "./PlayListCard.css"
const PlayListCard = ({ playlist }) => {
    return (
        <Box sx={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            background:"rgba(164, 166, 166, 0.5)",
            backdropFilter:"blur(10px)",
            cursor:"pointer",
            transition:"0.2s ease",
            ":hover":{
                background:"rgba(100, 100, 100, 0.5)",
            }
        }}>
            <Box sx={{
                width: "60px",
                height: "60px",
                marginRight: "15px"
            }}>
                <Box sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain"
                }} component='img' src={playlist.images[0].url} />
            </Box>
            <Box sx={{ flex: "1" }}>
                <Typography component="h2" variant='h2' sx={{
                    fontSize: "1.5em"
                }}>
                    {playlist.name}
                </Typography>
            </Box>
        </Box>
    )
}

export { PlayListCard }