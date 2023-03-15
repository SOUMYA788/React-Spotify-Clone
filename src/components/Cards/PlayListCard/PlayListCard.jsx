import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'
import { Link } from 'react-router-dom';
import "./PlayListCard.css"
const PlayListCard = ({ playlist }) => {
    
    return (
        <Link to={`/playlist/${playlist?.id}`} className='playlistLink'>
            <Box sx={{
                width: "60px",
                height: "60px",
                marginRight: "15px"
            }}>
                <Box sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain"
                }} component='img' src={playlist?.images[0]?.url} />
            </Box>
            <Box sx={{ flex: "1" }}>
                <Typography component="h2" variant='h2' sx={{
                    fontSize: "1.5em"
                }}>
                    {playlist?.name}
                </Typography>
            </Box>
        </Link>
    )
}

export { PlayListCard }