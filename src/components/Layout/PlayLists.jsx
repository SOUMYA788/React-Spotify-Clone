import React from 'react'
import { PlayListCard } from './'


const PlayLists = ({ playListsData }) => {
    
    return (
        <div className='w-full flex flex-col 600px:flex-row flex-nowrap 600px:flex-wrap gap-[2%] py-1 px-[2%] '>
            {
                playListsData.map((playlist, indx) => (
                    <div className='w-4/5 600px:w-[49%] my-1 mx-auto 600px:mx-0' key={`playlistCard_${indx}`}>
                        <PlayListCard playlist={playlist} />
                    </div>
                ))
            }
        </div>
    )
}

export { PlayLists }