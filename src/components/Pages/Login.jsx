import React from 'react'
import { authUrl } from '../../Service/Spotify/Authentication'

const Login = () => {
    
    return (
        <div className='w-full h-full bg-black p-2 grid place-items-center'>
            <img className='w-1/2 text-slate-600' src='https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White.png' />
            <a href={authUrl} className='text-2xl text-center bg-green-500 text-slate-800 no-underline py-2 px-6 rounded-full outline-none cursor-pointer transition hover:text-black focus:text-black'>Connect to Spotify</a>
        </div>
    )

}

export default Login 