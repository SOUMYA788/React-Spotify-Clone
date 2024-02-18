import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getAlbumInfo } from '../../Service/Spotify/API';
import { useCurrentState } from '../../Service/Context';
import { AlbumCard, TrackLists } from '../Layout';


const Album = () => {
  const [{ auth }, dispatch] = useCurrentState()
  const [albumData, setAlbumData] = useState([])
  const [albumMeta, setAlbumMeta] = useState(null)
  const { albumId } = useParams();

  const { token } = auth;



  useEffect(() => {
    if (token) {
      getAlbumInfo(token, albumId).then((data) => {
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
    }
  }, [albumId, token])




  return (
    <>
      <div className='py-3 px-[5%]'>
        {albumMeta && <AlbumCard albumCardData={albumMeta} />}
      </div>

      {albumMeta && <TrackLists tracksArr={albumData} albumImg={albumMeta?.albumCoverArt} />}

    </>
  )
}

export default Album