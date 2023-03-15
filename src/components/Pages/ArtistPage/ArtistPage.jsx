import { Box, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import { useCurrentState } from '../../../Service/Context';
import { getArtist, getArtistTracks } from '../../../Service/Spotify/API';
import { TrackLists } from '../../';

import './ArtistPage.css'
const ArtistPage = () => {
    const [artistMeta, setArtistMeta] = useState(null)
    const [artistData, setArtistData] = useState([])
    const { artistId } = useParams();
    const [{ token }, dispatch] = useCurrentState();

    useEffect(() => {
        getArtist(token, artistId).then((data) => {
            setArtistMeta(data.data);
        })
        getArtistTracks(token, artistId).then((data) => {
            setArtistData(data?.data?.tracks);
        })
    }, [artistId, token])

    const setFollowers = (followers) => {
        if (followers) {
            return `${followers.toLocaleString()} Followers`;
        }
    }

    return (
        <Box sx={{ width: "100%", height: "100%" }}>
            <Box sx={{
                width: "90%",
                height: "50%",
                margin: "0 auto",
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center"
            }}>
                <Box sx={{
                    width: "250px",
                    height: "250px",
                    margin: "0 2% 0 0",
                    background: `url(${artistMeta?.images[0]?.url}) no-repeat`,
                    backgroundSize: "cover",
                }} />

                <Box sx={{
                    width: "80%",
                    flex: "1",
                    height: "100%",
                    padding: "10px 0",
                    gap: "10px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "flex-start"
                }}>
                    <Typography
                        component='h2'
                        variant='h2' sx={{ fontSize: "4em", fontWeight: "600", color: 'white' }}>
                        {artistMeta?.name}
                    </Typography>

                    <Typography component='p' variant='p' sx={{ fontSize: "1em", color: 'white' }}>
                        {setFollowers(artistMeta?.followers?.total)}
                    </Typography>
                </Box>
            </Box>

            <Box sx={{
                width: "100%",
                padding: "10px",
                background: "rgba(0,0,0,0.8)",
                backdropFilter: "blur(5px)"
            }}>
                <TrackLists callFrom='artist' tracksArr={artistData} />
            </Box>

        </Box>
    )
}

export { ArtistPage }