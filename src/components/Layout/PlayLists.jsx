import React from 'react'
import { PlayListCard } from './'
import { useCurrentState } from '../../Service/Context';


const PlayLists = () => {

    const [{ player }, _] = useCurrentState();

    // playlist has next, and previous methods to get more playlist from there if there are more playlist over maximum limit of 20. 
    const { playlists } = player




    if (!playlists?.items?.length > 0) return <h2 className='capitalize text-sm 600px:text-2xl px-2 py-1.5 600px:px-2 600px:py-4 bg-slate-200 bg-opacity-50 backdrop-blur-sm my-1'> No Playlist Available </h2>




    return (
        <div className="playlist_container w-full px-2" >
            <h2 className='capitalize text-sm 600px:text-2xl px-2 py-1.5 600px:px-2 600px:py-4 bg-slate-200 bg-opacity-50 backdrop-blur-sm my-1'> playlists </h2>

            <div className='w-full flex flex-col 300px:flex-row flex-wrap gap-3 pt-1 px-3'>
                {
                    playlists?.items.map((items, indx) => <PlayListCard playlist={items} key={`playlistCard_${indx}`} />)
                }
            </div>
        </div>
    )
}

export { PlayLists }