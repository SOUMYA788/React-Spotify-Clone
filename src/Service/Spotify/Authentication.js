import axios from "axios";
import { ENV_CONFIG } from "../../envConfig";

const auth_endpoint = 'https://accounts.spotify.com/authorize';
const redirect_url = 'https://spotify-clone-7b9c1.web.app/';
const localRedirect = 'http://localhost:5173/';

const client_id = ENV_CONFIG.CLIENT_ID;
const client_secreat = ENV_CONFIG.CLIENT_SECREAT;

const auth_scope = [
    'streaming',
    'user-read-email',
    'user-read-private',
    'user-library-read',
    'user-library-modify',
    'user-read-playback-state',
    'user-modify-playback-state',
    'user-top-read',
    'user-read-currently-playing',
    'user-read-recently-played',
    'user-read-playback-position',
    'playlist-read-private'
]


export const getToken = () => {
    const token = window.location.hash.split('&')[0].split('=')[1]
    return token;
}

export const authUrl = `${auth_endpoint}?client_id=${client_id}&redirect_uri=${localRedirect}&scope=${auth_scope.join("%20")}&response_type=token&show_dialog=true`

