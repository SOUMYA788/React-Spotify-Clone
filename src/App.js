import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Stack } from '@mui/system';
import './App.css';
import { Album, Home, Login, Navigation, SearchBar } from './components';
import { Box } from '@mui/material';
import { useCurrentState } from './Service/Context';
import { useEffect } from 'react';
import { getToken } from './Service/Spotify/Authentication';
import { getAllPlaylists, getRecentPlayedAlbums } from './Service/Spotify/API';

function App() {
  const [{ token }, dispatch] = useCurrentState();
  useEffect(() => {
    const recevedToken = getToken();
    window.location.hash = '';

    if (!token) {
      dispatch({
        type: 'SET_TOKEN',
        token: recevedToken
      });
    }

    if (token) {

      getAllPlaylists(token).then((data) => {
        dispatch({
          type: 'SET_PLAYLISTS',
          playlists: data
        })
      })

      getRecentPlayedAlbums(token).then((recent_albums) => {
        dispatch({
          type: 'SET_RECENT_ALBUMS',
          recentAlbums: recent_albums
        })
      }).catch((err) => {
        console.log(err);
      })

    }

  }, [token])

  const appMainStackStyle = {
    width: "100vw",
    height: "100vh"
  }
  return (
    <Router>
      <Stack sx={appMainStackStyle} direction="row">
        {token && <Navigation />}
        <Box sx={{ height: "100vh", width: "100%", flex: "1", display: "flex", flexDirection: "column" }}>
          {token && <Box sx={{ width: "100%", height: "50px" }}>
            <SearchBar />
          </Box>}
          <Box sx={{ flex: "1", overflowY: "scroll", scrollBehavior: "smooth" }}>
            <Routes>
              <Route path='/' element={token ? <Home /> : <Login />} />
              <Route path='/album/:albumId' element={<Album />} />
            </Routes>
          </Box>

          {token && <Box sx={{ width: "100%", height: "55px", background: "#bebebe" }}>
          </Box>}
        </Box>
      </Stack>
    </Router>
  );
}

export default App;
