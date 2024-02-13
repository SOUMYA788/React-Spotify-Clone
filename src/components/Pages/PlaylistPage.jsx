import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useCurrentState } from '../../Service/Context'
import { getPlaylistData } from '../../Service/Spotify/API'
import { TrackCard } from '../Layout'



const PlaylistPage = () => {

    const [playlistMeta, setPlaylistMeta] = useState(null);
    const [playlistData, setPlaylistData] = useState([])
    const [{ token }, dispatch] = useCurrentState()
    const { playlistId } = useParams()
    useEffect(() => {
        getPlaylistData(token, playlistId).then((data) => {
            setPlaylistMeta(data?.data);
            setPlaylistData(data?.data?.tracks?.items)
        })
    }, [playlistId, token])


    return (
        <div className='w-full h-full p-5'>

            <div className='w-full flex items-center bg-slate-700 mb-5'>

                <img src={playlistMeta?.images[0]?.url} className='w-[20%] mr-[2%] object-contain'/>

                <div className='h-full flex flex-col items-start justify-center flex-1'>
                    <h2 className='text-5xl text-white'>
                        {playlistMeta?.name}
                    </h2>

                    <p className='text-base; text-slate-400'>
                        {playlistMeta?.description}
                    </p>
                </div>

            </div>

            {
                playlistData.length > 0 && playlistData.map((playlistTracks, indx) => (
                    <TrackCard
                        albumImg={playlistMeta?.images[0]?.url}
                        callFrom='playlistPage'
                        tracksDetails={playlistTracks?.track}
                        key={`playlistTrack_${indx}`} />
                ))
            }
        </div>
    )
}

export default PlaylistPage