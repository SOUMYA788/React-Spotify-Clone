export const reducerData = {
    token: null,
    playlists:[],
    recentAlbums:[],
    currentlyPlaying: null,
}

export const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            }
        case 'SET_PLAYLISTS':
            return{
                ...state,
                playlists:action.playlists
            }
        case 'SET_RECENT_ALBUMS':
            return{
                ...state,
                recentAlbums:action.recentAlbums
            }
        case 'SET_CURRENT_PLAYING':
            return{
                ...state,
                currentlyPlaying:action.currentlyPlaying
            }
        default:
            return state;
    }
}

