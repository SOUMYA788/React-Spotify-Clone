import React from 'react'
import { authUrl } from '../../Service/Spotify/Authentication'

const Login = () => {
    const logoSrc = 'https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White.png'
    return (
        <div className={`w-full h-dvh bg-black p-3 flex flex-col items-center justify-around`}>
            <img className='w-full 300px:w-60' src={logoSrc}/>
            <a href={authUrl} className='text-sm 300px:text-base font-semibold text-center bg-green-500 text-slate-800 no-underline py-2 px-6 rounded-full outline-none cursor-pointer transition hover:text-black focus:text-black'>Connect to Spotify</a>
        </div>
    )

}

export default Login