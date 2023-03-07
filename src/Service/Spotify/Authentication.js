const auth_endpoint = 'https://accounts.spotify.com/authorize';
const redirect_url = 'http://localhost:3000/';
const client_id = process.env.REACT_APP_CLIENT_ID;
const auth_scope = [
    'user-read-currently-playing',
    'user-read-recently-played',
    'user-read-playback-state',
    'user-top-read',
    'user-modify-playback-state'
]

export const getToken = () => { 
    return(window.location.hash.split('&')[0].split('=')[1])
}

export const authUrl = `${auth_endpoint}?client_id=${client_id}&redirect_uri=${redirect_url}&scope=${auth_scope.join("%20")}&response_type=token&show_dialog=true`
