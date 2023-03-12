import { Box, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useParams } from "react-router-dom";
import { useCurrentState } from '../../../Service/Context';
import { getArtist } from '../../../Service/Spotify/API';

import './ArtistPage.css'
const ArtistPage = () => {
    const { artistId } = useParams();
    const [{ token }, dispatch] = useCurrentState();
    // create a new artist use state data to store that info to use here...
    useEffect(() => {
        getArtist(token, artistId).then((data) => {
            console.log(data);
        })
    }, [artistId])

    return (
        <Box sx={{
            width: "100%",
            height: "100%",
            position: "relative"
        }}>
            <Box >

            </Box>
            <Typography component='h2' variant='h2' sx={{ fontSize: "1em" }}>
                ArtistPage
            </Typography>
        </Box>
    )
}

export { ArtistPage }