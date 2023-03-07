import { Box } from '@mui/system'
import React from 'react'
import { PlayListCard } from '../'
import './PlayLists.css'
const PlayLists = ({ playListsData }) => {
    const playlistsMainBoxStyle = {
        width: "100%",
        display: "flex",
        flexDirection: {
            xs: "column",
            sm: "row"
        },
        flexWrap: {
            xs: "nowrap",
            sm: "wrap"
        }
    }
    return (
        <Box sx={playlistsMainBoxStyle}>
            {
                playListsData.map((playlist, indx) => (
                    <Box sx={{
                        width: {
                            xs:"80%",
                            sm:"45%"
                        },
                        margin: "5px 2%",
                    }} key={`playlistCard_${indx}`}>
                        <PlayListCard playlist={playlist} />
                    </Box>
                ))
            }
        </Box>
    )
}

export { PlayLists }