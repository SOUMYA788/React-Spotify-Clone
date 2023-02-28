import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Stack } from '@mui/system';
import './App.css';
import { Album, Home, Navigation, SearchBar, TrackCard } from './components';
import { Box } from '@mui/material';
import { useState, useEffect } from 'react';

function App() {
  const [musicId, setMusicId] = useState(null)

  const [musicData, setMusicData] = useState(null)

  useEffect(() => {

  }, [musicId])


  return (
    <Router>
      <Stack direction="row">
        <Navigation />
        <Box sx={{ height: "100vh", width: "100%", flex: "1", padding: "5px", display: "flex", flexDirection: "column" }}>
          <Box sx={{ width: "100%", height: "50px", padding: "5px" }}>
            <SearchBar />
          </Box>
          <Box sx={{ flex: "1", overflowY: "scroll", scrollBehavior: "smooth" }}>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/album/:albumId' element={<Album />} />
            </Routes>
          </Box>
          {
            musicData && <Box sx={{ width: "100%", height: "55px", background: "#bebebe" }}>
              <TrackCard callFrom="app" setMusicId={setMusicId} tracksDetails={setMusicData} />
            </Box>
          }
        </Box>
      </Stack>
    </Router>
  );
}

export default App;
