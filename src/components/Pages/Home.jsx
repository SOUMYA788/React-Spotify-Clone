import React from 'react'
import Box from '@mui/material/Box';
import { AlbumList, PlayLists } from ".."
import { useCurrentState } from '../../Service/Context';
import { Typography } from '@mui/material';

const Home = () => {
  const [{ playlists, recentAlbums }, dispatch] = useCurrentState();
  const listHeadding = {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    backdropFilter: "blur(5px)",
    margin: '5px 2%',
    height: `35px`,
    lineHeight: "35px",
    fontSize: "1.5em",
    padding: "0 1%",
  }

  return (
    <Box className="home_main_container" sx={{ width: "100%" }}>
      {
        playlists.length > 0 && <Box className="home_playlist_container" sx={{ width: "100%" }}>
          <Typography component='h2' variant='h2' sx={listHeadding}>
            PLAYLISTS
          </Typography>
          <PlayLists playListsData={playlists} />
        </Box>
      }
      {
        recentAlbums.length > 0 && <Box className='home_album_container' sx={{ margin: "20px 0 0" }}>
          <AlbumList albumListData={recentAlbums} />
        </Box>
      }
    </Box>
  )
}

export { Home }