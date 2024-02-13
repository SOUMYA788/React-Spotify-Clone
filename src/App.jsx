import { Login } from './components/Pages';
import Activate from './components/Activate';

import { useCurrentState } from './Service/Context';
import { useEffect } from 'react';
import { getToken } from './Service/Spotify/Authentication';
import { getAllPlaylists, getCurrentSong, getMe, getRecentPlayedAlbums } from './Service/Spotify/API';
import { useCustomTheme } from './components/Layout/ThemeSwitcher';
import { ToastContainer } from 'react-toastify';



const App = () => {
  const [theme, setTheme] = useCustomTheme();
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
    <div className={`w-full h-dvh overflow-y-scroll scroll-smooth ${theme}`}>
      
      <ToastContainer
        position="bottom-center"
        autoClose={500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={theme}
        transition="Slide" />

      <div className='App w-full h-full'>
        {
          token ? <Activate currentSongData={currentlyPlaying} /> : <Login />
        }
      </div>
    </div>
  );
}

export default App;
