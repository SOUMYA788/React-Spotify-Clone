import React from 'react'
import { Link } from 'react-router-dom';


const PlayListCard = ({ playlist }) => {

    return (
        <div className='w-full 300px:w-48 600px:w-72 mx-auto 600px:mx-0'>
            <Link to={`/playlist/${playlist?.id}`} className='w-full flex flex-col 600px:flex-row items-center no-underline text-slate-800 bg-opacity-55 bg-slate-600 hover:bg-slate-700 focus:bg-slate-700 ring-2 ring-slate-400 focus:ring-slate-200 hover:text-black focus:text-black backdrop-blur-sm cursor-pointer transition-all p-4 rounded-md outline-none'>

                <div className='w-full 600px:w-14 600px:h-14 600px:mr-4 mb-2 600px:mb-0'>
                    <img src={playlist?.images[0]?.url} className='w-full h-full object-contain ring-2 ring-slate-400 rounded-sm p-1' />
                </div>

                <h2 className='text-base text-white mt-3 600px:m-0 600px:text-lg'> {playlist?.name} </h2>

            </Link>
        </div>
    )
}


export default PlayListCard