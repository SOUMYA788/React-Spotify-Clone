import { Box, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import "./TrackLists.css"
const TrackLists = ({ tracksArr }) => {
    return (
        <Box>
            {
                tracksArr.map((tracksDetails) => {
                    return (
                        <Box sx={{
                            display: "flex",
                            flexDirection: "row",
                            alignItem: "center",
                            justifyContent: "flex-start"
                        }}>
                            <Typography
                                component="h2" variant='h2'
                                sx={{ fontSize: "1em" }}>
                                {tracksDetails?.track_number}
                            </Typography>
                            <Box>
                                <Typography component="p" variant='p'
                                    sx={{ fontSize: "1em", display:"flex", flexDirection:"row" }}>
                                    {

                                        tracksDetails?.artists.map(({ id, name }, indx) => {
                                            return (
                                                <>
                                                    <Link to={`/artist/${id}`} key={`${name}_${indx}`}>
                                                        {name}
                                                    </Link>
                                                    {indx < (tracksDetails?.artists.length - 1) && ","}
                                                </>
                                            )
                                        })

                                    }
                                </Typography>
                            </Box>
                            
                        </Box>
                    )
                })
            }
        </Box >
    )
}

export { TrackLists }