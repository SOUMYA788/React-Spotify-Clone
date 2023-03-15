import { Box  } from '@mui/material'
import React from 'react'
import { TrackCard } from '../'
import "./TrackLists.css"
const TrackLists = ({ callFrom, tracksArr, albumImg }) => {
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
                    return (<TrackCard callFrom = {callFrom} tracksDetails={tracksDetails} albumImg={albumImg} key={`track_${indx}`} />)
                })
            }
        </Box >
    )
}

export { TrackLists }