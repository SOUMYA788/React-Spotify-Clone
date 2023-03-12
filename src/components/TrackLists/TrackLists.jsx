import { Box, Typography } from '@mui/material'
import React, { useState } from 'react'
import { TrackCard } from '../'
import { formatMs } from '../../Service/Spotify/API'
import "./TrackLists.css"
const TrackLists = ({ tracksArr }) => {
    if (!tracksArr) return "Loading..."
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
            gap: '5px',
        }}>
            {
                tracksArr.map((tracksDetails, indx) => {
                    return (<TrackCard tracksDetails={tracksDetails} key={`track_${indx}`} />)
                })
            }
        </Box >
    )
}

export { TrackLists }