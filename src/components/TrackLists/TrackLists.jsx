import { Box, Typography } from '@mui/material'
import React, { useState } from 'react'
import { TrackCard } from '../'
import { formatMs } from '../../Service/Spotify/API'
import "./TrackLists.css"
const TrackLists = ({ tracksArr }) => {
    if (!tracksArr) return "Loading..."
    return (
        <Box>
            {
                tracksArr.map((tracksDetails, indx) => {
                    return (<TrackCard tracksDetails={tracksDetails} key={`track_${indx}`} />)
                })
            }
        </Box >
    )
}

export { TrackLists }