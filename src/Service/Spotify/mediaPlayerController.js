import axios from "axios";

const getOptions = (token) => {
    return {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    }
}

const baseUrl = "https://api.spotify.com/v1";


/**
 * current running track full information.
 */
export const getPlayBackState = async (token) => {
    try {
        const url = `${baseUrl}/me/player`
        let options = getOptions(token)
        const response = await axios.get(url, options);
        const { data } = response
        return data
    } catch (error) {
        console.log(error.message)
    }
}


/**
 * current running track core information.
 */
export const getCurrentlyPlaying = async (token) => {
    try {
        const url = `${baseUrl}/me/player/currently-playing?market=ES`;
        const options = getOptions(token);
        const { data } = await axios.get(url, options);
        return data;
    } catch (error) {
        console.log(error.message)
    }
}


/**
 * array of all songs played previously.
 * @param {string} token app token
 */
export async function getRecentPlayedAlbums(token) {
    try {
        const url = `${baseUrl}/me/player/recently-played`;
        const options = getOptions(token)
        const { data } = await axios.get(url, options);
        return data
    } catch (error) {
        console.log(error.message)
    }
}


// 
/**
 * Spotify Premium Required
 * use to play or pause currently running audio.
 * nothing will be return, running music will be pause, or paused music will be start.
 * @param {string} token app access token
 * @param {string} musicStatus play || pause 
 * @param {JSON} reqBody 
 * @returns 
 */
export async function playMusic(token, musicStatus, reqBody) {
    try {
        const url = `${baseUrl}/me/player/${musicStatus}`;
        const options = getOptions(token);
        if (musicStatus === "play") {
            const data = await axios.put(url, reqBody, options)
            return data;
        } else {
            const data = await axios.put(url, options)
            return data;
        }
    } catch (error) {
        console.log(error.message)
    }
}


/**
 * Spotify Premium Required
 * play provided tracks in array
 * @param {string} token app access token.
 * @param {Array} tracks array of track id as string.
 */
export const playTrack = async (token, tracks) => {
    try {
        const url = `${baseUrl}/me/player/play`
        const options = getOptions(token);
        const responce = await axios.put(url, {
            uris: tracks
        }, {options})
        return responce.data;
    } catch (error) {
        console.log(error.message)  
    }
}




/**
 * Spotify Premium Required
 * use to skip current audio to next or previous audio.
 * @param {string} token app access token 
 * @param {string} changeState 'previous' || 'next'
 */
export const changeMusic = async (token, changeState) => {

    try {
        const url = `${baseUrl}/me/player/${changeState}`;
        const options = getOptions(token);
        const data = await axios.post(url, {}, options)
        return data
    } catch (error) {
        console.log(error.message);
    }

}



/**
 * Spotify Premium Required
 * @param {string} token app access token
 * @param {string} repeatState 'track' will repeat the current track, 'context' will repeat the current context and 'off' will turn repeat off.
 */
export const setRepeatMode = async (token, repeatState) => {
    try {
        const url = `${baseUrl}/me/player/repeat?state=${repeatState}`;
        const options = getOptions(token);
        await axios.put(url, {}, options)
    } catch (error) {
        console.log(error.message)
    }
}




/**
 * Spotify Premium Required 
 * @param {string} token app access token (required)
 * @param {string} shuffleState boolean, where true means shuffle user's playback, and false means do not shuffle user's playback.
 */
export const setShuffleMode = async (token, shuffleState) => {
    try {
        const url = `https://api.spotify.com/v1/me/player/shuffle?state=${shuffleState}`;
        const options = getOptions(token);
        await axios.put(url, {}, options)
    } catch (error) {
        console.log(error.message || "faild to change shuffle mode");
    }
}




/**
 * Spotify Premium Required
 * @param {string} token app access token (required)
 * @param {string} volume_persentage The volume to set. Must be a value between 0 to 100 inclusive
 */
export const setVolume = async (token, volume_persentage) => {
    try {
        const url = `https://api.spotify.com/v1/me/player/volume?volume_percent=${volume_persentage}`;
        const options = getOptions(token);
        await axios.put(url, {}, options)
    } catch (error) {
        console.log(error.message || "falid to change audio volume")
    }
}