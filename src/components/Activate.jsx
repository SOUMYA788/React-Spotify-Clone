import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { ControlPannel, Navigation } from './Layout';
import { Album, ArtistPage, Home, PlaylistPage, Search } from './Pages';


// const SecureRoutes = ({}) => {

// }



const Activate = ({ currentSongData }) => {
    return (
        <Router>
            <div className='w-full h-full overflow-hidden relative flex flex-col'>

                <div className='w-full h-full bg-cover blur-sm bg-[url(/images/bg.jpg)] bg-no-repeat absolute top-0 left-0 -z-10' />

                <div className="w-full h-[calc(100% - 80px)] max-h-[calc(100% - 80px)] flex-1 overflow-y-scroll scroll-smooth flex flex-col 600px:flex-row">

                    <Navigation />

                    <div className='h-[calc(100% - 50px)] 600px:h-full flex-1 overflow-y-scroll scroll-smooth'>
                        <div className='h-full w-full'>
                            <Routes>
                                <Route path='/' element={<Home />} />
                                <Route path='/search/:searchId' element={<Search />} />
                                <Route path='/album/:albumId' element={<Album />} />
                                <Route path='/artist/:artistId' element={<ArtistPage />} />
                                <Route path='/playlist/:playlistId' element={<PlaylistPage />} />
                            </Routes>
                        </div>
                    </div>
                </div>

                <div className='w-full h-20 max-h-20 p-1 bg-white bg-opacity-50 z-[1]'>
                    <ControlPannel currentMusic={currentSongData} />
                </div>
            </div>
        </Router >
    )
}

export default Activate 