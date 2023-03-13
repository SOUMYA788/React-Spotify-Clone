import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getAlbumInfo } from '../../../Service/Spotify/API';
import { useCurrentState } from '../../../Service/Context';
import { AlbumCard, TrackLists } from '../..';

const Album = () => {
  const [{ token }, dispatch] = useCurrentState()
  const [albumData, setAlbumData] = useState([])
  const [albumMeta, setAlbumMeta] = useState(null)
  const { albumId } = useParams();

  useEffect(() => {
    getAlbumInfo(token, albumId).then((data) => {
      console.log("data is -> ", data);
      setAlbumData(data?.data?.tracks?.items)
      setAlbumMeta({
        albumUri: data?.data?.id,
        albumName: data?.data?.name,
        albumArtist: data?.data?.artists,
        albumCoverArt: data?.data?.images[0].url,
        albumLabel: data?.data?.label,
        albumDate: data?.data?.release_date,
        copyrights: data?.data?.copyrights,
      })
    });
  }, [albumId])

  return (
    <Box>
      <Box sx={{ padding: "15px 5%" }}>
        {albumMeta && <AlbumCard albumCardData={albumMeta} />}
      </Box>
      <Box>
        {albumMeta && <TrackLists tracksArr={albumData} albumImg = {albumMeta?.albumCoverArt} />}
      </Box>
    </Box>
  )
}

export { Album }