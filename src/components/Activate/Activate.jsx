import React from 'react'
import { Box, Stack } from '@mui/material'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Album, ArtistPage, ControlPannel, Home, Login, Navigation, SearchBar } from '../';

const Activate = ({ currentSongData }) => {
    return (
        <Router>
            <Box sx={{
                width: "100%",
                height: "100%",
                overflow: "hidden",
                position: "relative",
                display: "flex",
                flexDirection: "column"
            }}>

                <Box sx={{
                    width: "100%",
                    height: "100%",
                    background: 'url(/images/bg.jpg) no-repeat',
                    backgroundSize: "cover",
                    filter: "blur(1px)",
                    zIndex: "-10",
                    position: "absolute"
                }} />

                <Box sx={{
                    width: "100%",
                    height: 'calc(100% - 80px)',
                    flex: '1',
                    display: "flex",
                    flexDirection: 'row'
                }}>
                    <Navigation />
                    <Box sx={{ height: "100%", flex: "1" }}>
                        <Box sx={{ width: "100%", height: "100%", overflowY: "scroll", scrollBehavior: "smooth" }}>
                            <Routes>
                                <Route path='/' element={<Home />} />
                                <Route path='/album/:albumId' element={<Album />} />
                                <Route path='/artist/:artistId' element={<ArtistPage />} />
                            </Routes>
                        </Box>
                    </Box>
                </Box>

                <Box sx={{
                    width: "100%",
                    height: "80px",
                    padding: "5px",
                    background: "rgba(255, 255, 255, 0.2)",
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