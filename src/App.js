import './App.css';
import { Activate, Login } from './components';
import { Box } from '@mui/material';
import { useCurrentState } from './Service/Context';
import { useEffect } from 'react';
import { getToken } from './Service/Spotify/Authentication';
import { getAllPlaylists, getCurrentSong, getMe, getRecentPlayedAlbums } from './Service/Spotify/API';

function App() {

  const [{ token, currentlyPlaying }, dispatch] = useCurrentState();

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

      getMe(token).then((data) => {
        dispatch({
          type: "SET_USER",
          user: data
        })
      })

      getAllPlaylists(token).then((responce) => {
        let data = responce?.data
        let items = data?.items
        dispatch({
          type: 'SET_PLAYLISTS',
          playlists: items
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

      getCurrentSong(token).then((data) => {
        if (data?.currently_playing_type === 'track') {
          dispatch({
            type: 'SET_CURRENT_PLAYING',
            currentlyPlaying: data
          })
        }
      }).catch((err) => {
        console.log(err);
      });

    }

  }, [token, dispatch])


  return (
    <Box sx={{
      width: "100%",
      height: "100%",
      minHeight:"fill-available",
      overflow:"hidden"
    }} className='App'>
      {
        token ? <Activate currentSongData={currentlyPlaying} /> : <Login />
      }
    </Box>
  );
}

export default App;
