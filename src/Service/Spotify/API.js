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

export async function getMe(token) {
  let url = `https://api.spotify.com/v1/me`;
  let options = getOptions(token);
  let { data } = await axios.get(url, options)
  return data
}

export async function getAllPlaylists(token) {
  let url = "https://api.spotify.com/v1/me/playlists";
  let options = getOptions(token);
  let data = await axios.get(url, options);
  return data;
}

export async function getRecentPlayedAlbums(token) {
  let url = "https://api.spotify.com/v1/me/player/recently-played";
  let options = {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  };
  let { data: { items } } = await axios.get(url, options);
  return items;
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
  let url = `https://api.spotify.com/v1/albums/${id}`;
  let options = {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  };
  let { data } = await axios.get(url, options);
  return { data };
}

export async function getCurrentSong(token) {
  let url = 'https://api.spotify.com/v1/me/player/currently-playing?market=ES';
  let options = {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  };
  let { data } = await axios.get(url, options);
  return data;
}

export async function getPlaybackState(token) {
  let url = 'https://api.spotify.com/v1/me/player';
  let options = {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  };
  let data = await axios.get(url, options);
  return data;
}


export async function playMusic(token, musicStatus) {
  let url = `https://api.spotify.com/v1/me/player/${musicStatus}`;
  let options = getOptions(token);
  let data = await axios.put(url, {}, options)
  return data;
}

export async function changeMusic(token, changeState) {
  let url = `https://api.spotify.com/v1/me/player/${changeState}`;
  let options = {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  };
  let data = await axios.post(url, {}, options)
  return data
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
  let {data} = await axios.get(url, options);
  return data;
}
export async function setRepeatMode(token, repeatMode) {
  let url = `https://api.spotify.com/v1/me/player/repeat?state=${repeatMode}`;
  let options = getOptions(token);
  await axios.put(url, {}, options)
}

export async function setShuffleMode(token, shuffleState) {
  let url = `https://api.spotify.com/v1/me/player/shuffle?state=${shuffleState}`;
  let options = getOptions(token);
  await axios.put(url, {}, options)
}

export async function setVolume(token, volume_persentage) {
  let url = `https://api.spotify.com/v1/me/player/volume?volume_percent=${volume_persentage}`;
  let options = getOptions(token);
  await axios.put(url, {}, options)
}