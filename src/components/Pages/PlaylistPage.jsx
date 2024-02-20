import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useCurrentState } from '../../Service/Context'
import { getPlaylistData } from '../../Service/Spotify/API'
import { TrackCard } from '../Layout'



const PlaylistPage = () => {

    const [playlistMeta, setPlaylistMeta] = useState(null);
    const [playlistData, setPlaylistData] = useState([])

    const [{ auth }, dispatch] = useCurrentState()
    const { token } = auth;

    const { playlistId } = useParams()

    useEffect(() => {
        getPlaylistData(token, playlistId).then((data) => {
            setPlaylistMeta(data?.data);
            setPlaylistData(data?.data?.tracks?.items)
        })
    }, [playlistId, token])


    return (
        <div className='w-full h-full p-3'>

            <div className='w-full flex flex-col 400px:flex-row bg-slate-600 bg-opacity-55 mb-5 py-6 px-3 gap-2 rounded-lg ring-2 ring-slate-400'>

                <img src={playlistMeta?.images[0]?.url} className='w-[130px] h-[130px] object-contain ring-2 ring-slate-400 rounded-sm' />

                <div className='w-fit h-full flex flex-col gap-2 text-slate-200'>
                    <h2 className='text-base text-inherit text-white'>
                        {playlistMeta?.name}
                    </h2>

                    <p className='text-base text-slate-400'>
                        {playlistMeta?.description}
                    </p>
                </div>

            </div>

            <div className='w-full flex flex-wrap gap-3 px-3'>
                {
                    playlistData.length > 0 && playlistData.map((playlistTracks, indx) => (
                        <TrackCard
                            albumImg={playlistMeta?.images[0]?.url}
                            callFrom='playlistPage'
                            tracksDetails={playlistTracks?.track}
                            key={`playlistTrack_${indx}`}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default PlaylistPage