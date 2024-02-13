import { ENV_CONFIG } from "../../envConfig";

ENV_CONFIG
const auth_endpoint = 'https://accounts.spotify.com/authorize';
const redirect_url = 'https://spotify-clone-7b9c1.web.app/';
const localRedirect = 'http://localhost:5173/';
const client_id = ENV_CONFIG.APP_CLIENT_ID;
const auth_scope = [
    'streaming',
    'user-modify-playback-state',
    'user-read-email',
    'user-top-read',
    'user-read-private',
    'user-read-currently-playing',
    'user-read-recently-played',
    'user-read-playback-state',
    'user-read-playback-position',
    'playlist-read-private'
]
// USED 'SPOTIFY WEB API NODE' LIBREARY by 'symplified dev'


export const getToken = () => {
    return (window.location.hash.split('&')[0].split('=')[1])
}

export const authUrl = `${auth_endpoint}?client_id=${client_id}&redirect_uri=${redirect_url}&scope=${auth_scope.join(" ")}&response_type=token&show_dialog=true`

