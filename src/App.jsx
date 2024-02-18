import { Album, ArtistPage, Home, Login, PlaylistPage, Search } from './components/Pages';
import Activate from './components/Activate';

import { useCurrentState } from './Service/Context';
import { useEffect } from 'react';
import { getToken } from './Service/Spotify/Authentication';
import { getAllPlaylists, getCurrentUserProfile } from './Service/Spotify/API';
import { getCurrentlyPlaying, getPlayBackState, getRecentPlayedAlbums } from './Service/Spotify/mediaPlayerController';

import { useCustomTheme } from './components/Layout/ThemeSwitcher';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Navigate, Outlet, Route, BrowserRouter as Router, Routes, useParams } from 'react-router-dom';
import { ControlPannel, Navigation } from './components/Layout';



const App = () => {
  const [theme, setTheme] = useCustomTheme();

  const [{ auth: stateAuth, player: statePlayer }, dispatch] = useCurrentState();

  const { token } = stateAuth;
  const { currentlyPlaying } = stateAuth;

  useEffect(() => {
    const receivedToken = getToken();
    if (receivedToken) {
      dispatch({
        type: 'SET_TOKEN',
        token: receivedToken
      });
      window.history.pushState({}, null, "/")
    }
  }, [])




  useEffect(() => {
    if (token) {

      // getPlayBackState(token).then(data => {
      //   if (!currentlyPlaying) {
      //     dispatch({
      //       type: 'SET_CURRENT_PLAYING',
      //       currentlyPlaying: data
      //     })
      //   }
      // });

      getCurrentUserProfile(token).then((data) => {
        dispatch({
          type: "SET_USER",
          user: data
        })
      })

      getAllPlaylists(token).then((responce) => {
        const items = responce?.data
        dispatch({
          type: 'SET_PLAYLISTS',
          playlists: items
        })
      })

      getRecentPlayedAlbums(token).then((data) => {
        // data has 
        // - items - has array data of 20 elements.
        // - cursors: tells amount of data before and after.
        // - next: provide next pagination.
        dispatch({
          type: 'SET_RECENT_ALBUMS',
          recentAlbums: data
        })
      }).catch((err) => {
        console.log(err);
      })

      getCurrentlyPlaying(token).then((data) => {
        dispatch({
          type: 'SET_CURRENT_PLAYING',
          currentlyPlaying: data
        })
      });

    }

  }, [token])


  if (!token) return <Login />


  return (
    <Router>

      <div className={`app w-full h-dvh overflow-y-scroll scroll-smooth ${theme}`}>

        <ToastContainer
          position="bottom-center"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light" />

        <div className='app w-full h-full overflow-hidden relative flex flex-col'>

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

          <ControlPannel />

        </div>

      </div>
    </Router >
  );
}

export default App;
