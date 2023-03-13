import { Box, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react';
import { AppContext } from '../../../Service/Context';

import "./TrackCard.css"

const TrackCard = ({ callFrom, tracksDetails, albumImg }) => {
    const { setTrackId } = useContext(AppContext)
    if (!tracksDetails) return "Loading";
    console.log(tracksDetails);
    const formatMs = (ms) => {
        if (ms) {
            let sec = Math.floor(ms / 1000);
            let min = sec >= 60 ? Math.floor(sec / 60) : 0;
            let restSec = sec ? (sec % 60) : 0;
            let hour = min >= 60 ? Math.floor(min / 60) : 0;
            let restMin = min ? (min % 60) : 0;
            hour = hour < 10 ? `0${hour}` : hour;
            restMin = restMin < 10 ? `0${restMin}` : restMin
            restSec = restSec < 10 ? `0${restSec}` : restSec

            let duration = hour > 0 ? `${hour}:${restMin}:${restSec}` : `${restMin}:${restSec}`;
            console.log(duration)
            return duration;
        }
    }
    return (
        <Box
            sx={{
                width: "85%",
                padding: "10px 0",
                display: "flex",
                flexDirection: "row",
                alignItem: "center",
                borderRadius: "5px",
                justifyContent: "space-evenly",
                alignItems: "center",
                transition: "0.2s ease",
                background: 'rgba(255,255,255, 0.5)',
                backdropFilter: 'blur(3px)',
                ":hover": {
                    backgroundColor: "rgba(255,255,255, 1)",
                    cursor: "pointer"
                }
            }} onClick={() => { setTrackId(tracksDetails?.id) }}>

            <Box sx={{
                width: "40px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center"
            }}>
                <Typography
                    component="h2" variant='h2'
                    sx={{ fontSize: "1em" }}>
                    {tracksDetails?.track_number}
                </Typography>
            </Box>

            <Box sx={{ width: "40px", padding: "2px", margin:'0 2% 0 0' }}>
                <Box component='img' src={tracksDetails?.album?.images[0]?.url || albumImg} sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: 'contain',
                }} />
            </Box>

            <Box sx={{ flex: "1" }}>
                <Typography component="p" variant='p' sx={{ margin: "0 0 5px" }}>
                    {tracksDetails?.name}
                </Typography>
                {callFrom !== 'artist' && <Typography component="p" variant='p'
                    sx={{ fontSize: "1em", display: "flex", flexDirection: "row" }}>
                    {
                        tracksDetails?.artists.map(({ id, name }, indx) => {
                            return (
                                <>
                                    <Link className="trackList_artistLinks" to={`/artist/${id}`} key={`${name}_${indx}`}>
                                        {name}
                                    </Link>
                                    {indx < (tracksDetails?.artists.length - 1) && <span key={`span_${name}_${indx}`}>,&nbsp;</span>}
                                </>
                            )
                        })
                    }
                </Typography>}
            </Box>

            <Box sx={{ width: "80px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                <Typography component="p" variant='p' sx={{ fontSize: "1em" }}>
                    {formatMs(tracksDetails?.duration_ms)}
                </Typography>
            </Box>
        </Box>
    )
}

export { TrackCard }