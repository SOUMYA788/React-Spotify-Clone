import React from 'react'
import { Link } from 'react-router-dom';


const PlayListCard = ({ playlist }) => {
    
    return (
        <Link to={`/playlist/${playlist?.id}`} className='w-full flex items-center no-underline text-slate-800 bg-slate-400 hover:bg-slate-500 focus:bg-slate-500 hover:text-black focus:text-black backdrop-blur-sm cursor-pointer transition-all'>

            <div className='w-14 h-14 mr-4'>
                <img src={playlist?.images[0]?.url} className='w-full h-full object-contain'/>
            </div>

            <div className='flex-1' >
                <h2 className='text-2xl'>
                    {playlist?.name}
                </h2>
            </div>

        </Link>
    )
}


export default PlayListCard