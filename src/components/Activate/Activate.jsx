import React from 'react'
import { Box } from '@mui/material'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Album, ArtistPage, ControlPannel, Home, Navigation, PlaylistPage, Search } from '../';

const Activate = ({ currentSongData }) => {
    return (
        <Router>
            <Box sx={{
                width: "100%",
                height: "100%",
                overflow: "hidden",
                position: "relative",
                display: "flex",
                flexDirection: "column",
            }}>

                <Box sx={{
                    width: "100%",
                    height: "100%",
                    background: 'url(/images/bg.jpg) no-repeat',
                    backgroundSize: "cover",
                    filter: "blur(1px)",
                    zIndex: "-10",
                    position: "absolute",
                    top: 0,
                    left: 0,

                }} />

                <Box sx={{
                    width: "100%",
                    height: 'calc(100% - 80px)',
                    maxHeight: 'calc(100% - 80px)',
                    flex: 1,
                    overflowY: 'scroll',
                    scrollBehavior: "smooth",
                    display: "flex",
                    flexDirection: {
                        xs: "column",
                        sm: 'row'
                    }
                }}>
                    <Navigation />
                    <Box sx={{
                        height: {
                            xs:"calc(100% - 50px)",
                            sm:"100%"
                        },
                        flex: 1,
                        overflowY: "scroll",
                        scrollBehavior: "smooth",
                    }}>
                        <Box sx={{ height: "100%", width: "100%" }}>
                            <Routes>
                                <Route path='/' element={<Home />} />
                                <Route path='/search/:searchId' element={<Search />} />
                                <Route path='/album/:albumId' element={<Album />} />
                                <Route path='/artist/:artistId' element={<ArtistPage />} />
                                <Route path='/playlist/:playlistId' element={<PlaylistPage />} />
                            </Routes>
                        </Box>
                    </Box>
                </Box>

                <Box sx={{
                    width: "100%",
                    height: "80px",
                    maxHeight: "80px",
                    padding: "5px",
                    background: "rgba(255, 255, 255, 0.5)",
                    backdropFilter: 'blur(5px)',
                    zIndex: '1'
                }}>
                    <ControlPannel currentMusic={currentSongData} />
                </Box>
            </Box>
        </Router >
    )
}

export { Activate }