import React from 'react'
import Box from '@mui/material/Box';
import { AlbumList, PlayLists } from "./"
import { useCurrentState } from '../Service/Context';
import { Typography } from '@mui/material';

const Home = () => {
  const [{ playlists, recentAlbums }, dispatch] = useCurrentState();

  return (
    <Box className="home_main_container" sx={{ width: "100%" }}>
      <Box className="home_playlist_container" sx={{ width: "100%" }}>
        {
          playlists && <PlayLists playListsData={playlists} />
        }
      </Box>
      <Box className='home_album_container'>
        {
          recentAlbums && <AlbumList albumListData={recentAlbums}/>
        }
      </Box>
    </Box>
  )
}

export { Home }