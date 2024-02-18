export const reducerData = {
    auth: {
        token: null,
        user: null,
    },
    player: {
        playlists: null,
        recentAlbums: null,
        currentlyPlaying: null,
    }
}

export const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_TOKEN':
            return {
                ...state,
                auth: {
                    ...state.auth,
                    token: action.token
                }
            }

        case 'SET_USER':
            return {
                ...state,
                auth: {
                    ...state.auth,
                    user: action.user
                }
            }

        case 'SET_PLAYLISTS':
            return {
                ...state,
                player: {
                    ...state.player,
                    playlists: action.playlists
                }
            }

        case 'SET_RECENT_ALBUMS':
            return {
                ...state,
                player: {
                    ...state.player,
                    recentAlbums: action.recentAlbums
                }
            }

        case 'SET_CURRENT_PLAYING':
            return {
                ...state,
                player: {
                    ...state.player,
                    currentlyPlaying: action.currentlyPlaying
                }
            }

        default:
            return state;
    }
}

