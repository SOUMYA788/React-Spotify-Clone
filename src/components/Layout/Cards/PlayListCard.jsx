import React from 'react'
import { Link } from 'react-router-dom';


const PlayListCard = ({ playlist }) => {

    return (
        <div className='w-full 300px:w-[174px] mx-auto 400px:mx-0'>

            <Link to={`/playlist/${playlist?.id}`} className='w-full flex flex-col items-center no-underline text-slate-800 bg-opacity-55 bg-slate-600 hover:bg-slate-700 focus:bg-slate-700 ring-2 ring-slate-400 focus:ring-slate-200 hover:text-black focus:text-black backdrop-blur-sm cursor-pointer transition-all p-1 300px:p-4 rounded-md outline-none'>

                <div className='w-full 300px:mb-2'>
                    <img src={playlist?.images[0]?.url} className='w-full h-full object-contain ring-2 ring-slate-400 rounded-sm p-1' />
                </div>

                <h2 className='text-xs 300px:text-sm text-white mt-3 600px:m-0 600px:text-lg'> {playlist?.name}</h2>

            </Link>

        </div>
    )
}


export default PlayListCard