import { Box, Typography } from '@mui/material'
import React, { useState } from 'react'
import { TrackCard } from '../'
import "./TrackLists.css"
const TrackLists = ({ tracksArr }) => {
    if(!tracksArr) return "Loading..."
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
        <Box>
            {
                tracksArr.map((tracksDetails) => {
                    return (<TrackCard tracksDetails={tracksDetails} />)
                })
            }
        </Box >
    )
}

export { TrackLists }