import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import { useCurrentState } from '../../Service/Context';
import { getArtist, getArtistTracks } from '../../Service/Spotify/API';
import { TrackLists } from '../Layout';




const ArtistPage = () => {
    const [artistMeta, setArtistMeta] = useState(null)
    const [artistData, setArtistData] = useState([])
    const { artistId } = useParams();
    const [{ token }, dispatch] = useCurrentState();

    useEffect(() => {
        getArtist(token, artistId).then((data) => {
            setArtistMeta(data.data);
        })
        getArtistTracks(token, artistId).then((data) => {
            setArtistData(data?.data?.tracks);
        })
    }, [artistId, token])

    const setFollowers = (followers) => {
        if (followers) {
            return `${followers.toLocaleString()} Followers`;
        }
    }

    return (
        <div className='w-full h-full'>
            <div className='w-[90%] h-1/2 mx-auto flex justify-start items-center'>

                <div className='w-60 h-60 mr-[2%] bg-[url(${artistMeta?.images[0]?.url})] bg-no-repeat bg-cover' />

                <div className='w-4/5 h-full flex-1 py-2 gap-2 flex flex-col items-start justify-center'>
                    <h2 className='text-6xl font-semibold text-white' >
                        {artistMeta?.name}
                    </h2>

                    <p className='text-base text-white'> {setFollowers(artistMeta?.followers?.total)} </p>
                </div>
            </div>

            <div className='w-full p-2 bg-slate-700 backdrop-blur-sm'>
                <TrackLists callFrom='artist' tracksArr={artistData} />
            </div>

        </div>
    )
}

export default ArtistPage 