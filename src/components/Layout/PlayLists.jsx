import React from 'react'
import { PlayListCard } from './'
import { useCurrentState } from '../../Service/Context';


const PlayLists = () => {

    const [{ player }, _] = useCurrentState();

    const { playlists } = player




    if (!playlists?.items?.length > 0) return <h2 className='capitalize text-sm 600px:text-2xl px-2 py-1.5 600px:px-2 600px:py-4 bg-slate-200 bg-opacity-50 backdrop-blur-sm my-1'> No Playlist Available </h2>




    return (
        <div className="playlist_container w-full px-2" >
            <h2 className='capitalize text-sm 600px:text-2xl px-2 py-1.5 600px:px-2 600px:py-4 bg-slate-200 bg-opacity-50 backdrop-blur-sm my-1 mb-4'> playlists </h2>

            <div className='w-full flex flex-wrap gap-3 mt-1 px-3'>
                {
                    playlists?.items.map((items, indx) => <PlayListCard playlist={items} key={`playlistCard_${indx}`} />)
                }
            </div>
        </div>
    )
}

export { PlayLists }