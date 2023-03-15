import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useCurrentState } from '../../../Service/Context'
import { getPlaylistData } from '../../../Service/Spotify/API'
import { TrackCard } from '../../'
import './PlaylistPage.css'
const PlaylistPage = () => {
    const [playlistMeta, setPlaylistMeta] = useState(null);
    const [playlistData, setPlaylistData] = useState([])
    const [{ token }, dispatch] = useCurrentState()
    const { playlistId } = useParams()
    useEffect(() => {
        getPlaylistData(token, playlistId).then((data) => {
            setPlaylistMeta(data?.data);
            setPlaylistData(data?.data?.tracks?.items)
        })
    }, [playlistId, token])


    return (
        <Box sx={{
            width: "100%",
            height: "100%",
            padding: "20px"
        }}>

            <Box sx={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                background: "rgba(0,0,0,0.5)",
                margin:"0 0 20px"
            }}>
                <Box component='img' src={playlistMeta?.images[0]?.url} sx={{
                    width: "20%",
                    marginRight: "2%",
                    objectFit: "contain"
                }} />

                <Box sx={{
                    flex: "1",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "center"
                }}>
                    <Typography component='h2' variant='h2' sx={{
                        fontSize: "3em",
                        color: "white"
                    }}>
                        {playlistMeta?.name}
                    </Typography>

                    <Typography component='p' variant='p' sx={{
                        fontSize: "1em",
                        color: "#6e6e6e"
                    }}>
                        {playlistMeta?.description}
                    </Typography>
                </Box>

            </Box>

            {
                playlistData.length > 0 && playlistData.map((playlistTracks, indx) => (
                    <TrackCard
                        albumImg={playlistMeta?.images[0]?.url}
                        callFrom='playlistPage'
                        tracksDetails={playlistTracks?.track}
                        key={`playlistTrack_${indx}`} />
                ))
            }
        </Box>
    )
}

export { PlaylistPage }