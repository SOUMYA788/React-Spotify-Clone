import React from 'react'
import { Box } from '@mui/material'
import "./Login.css"
import { authUrl } from '../../Service/Spotify/Authentication'

const Login = () => {
    // STYLES...
    const loginMainBoxStyle = {
        display: 'grid',
        placeItems: "center",
        width: "100%",
        height: "100%",
        background: "black",
        padding: "10px"
    }
    return (
        <Box sx={loginMainBoxStyle} className='loginMainBoxStyle'>
            <Box sx={{ width: "50%", color: '#1db954' }} component='img' src='https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White.png' />
            <a href={authUrl} id='loginBtn'>Connect to Spotify</a>
        </Box>
    )
}

export { Login }