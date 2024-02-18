import axios from "axios";

export const formatMs = (ms) => {
  if (ms) {
    let sec = Math.floor(ms / 1000);
    let min = sec >= 60 ? Math.floor(sec / 60) : 0;
    let restSec = sec ? (sec % 60) : 0;
    let hour = min >= 60 ? Math.floor(min / 60) : 0;
    let restMin = min ? (min % 60) : 0;
    hour = hour < 10 ? `0${hour}` : hour;
    restMin = restMin < 10 ? `0${restMin}` : restMin
    restSec = restSec < 10 ? `0${restSec}` : restSec

    let duration = hour > 0 ? `${hour}:${restMin}:${restSec}` : `${restMin}:${restSec}`;
    console.log(duration)
    return duration;
  }
}

const getOptions = (token) => {
  return ({
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  })
}

const baseUrl = "https://api.spotify.com/v1";

/**
 * return current user's profile.
 */
export async function getCurrentUserProfile(token) {
  const url = `${baseUrl}/me`
  try {
    const options = getOptions(token);
    let { data } = await axios.get(url, options)
    return data
  } catch (error) {
    return {
      success: false,
      data: null,
      url,
    }
  }
}


/**
 * use to get current user's playlist
 * @param {*} token access token
 * @returns current user's playlist
 */
export const getAllPlaylists = async (token) => {
  try {
    const url = `${baseUrl}/me/playlists`;
    const options = getOptions(token);
    const data = await axios.get(url, options);
    return data;
  } catch (error) { console.log(error.message || "Faild to fetch playlists") }
}



export async function getSavedShows(token) {
  let url = "https://api.spotify.com/v1/me/shows";
  let options = {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  };
  let responce = await axios.get(url, options);
  return responce;
}


export async function getAlbumInfo(token, id) {
  try {
    const url = `https://api.spotify.com/v1/albums/${id}`;
    const options = getOptions(token)
    const data = await axios.get(url, options);
    console.log("albumData -> ", data)
    return data;
  } catch (error) {
    console.log(error.message || "Faild to fetch album information");
  }
}



export async function getArtist(token, artistId) {
  let url = `https://api.spotify.com/v1/artists/${artistId}`;
  let options = getOptions(token);
  let data = await axios.get(url, options);
  return data;
}

export async function getArtistTracks(token, artistId) {
  let url = `https://api.spotify.com/v1/artists/${artistId}/top-tracks?market=ES`;
  let options = getOptions(token);
  let data = await axios.get(url, options);
  return data;
}

export async function getPlaylistData(token, playlistId) {
  let url = `https://api.spotify.com/v1/playlists/${playlistId}`;
  let options = getOptions(token);
  let data = await axios.get(url, options);
  return data;
}

export async function search(token, searchId) {
  let url = `https://api.spotify.com/v1/search?q=${searchId}&type=album,track&include_external=audio`;
  let options = getOptions(token);
  let { data } = await axios.get(url, options);
  return data;
}

