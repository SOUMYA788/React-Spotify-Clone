import axios from "axios";

const getOptions = (token) => {
  return ({
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  })
}

export async function getAllPlaylists(token) {
  let url = "https://api.spotify.com/v1/me/playlists";
  let options = getOptions(token);
  let { data: { items } } = await axios.get(url, options);
  return items;
}

export async function getRecentPlayedAlbums(token) {
  let url = "https://api.spotify.com/v1/me/player/recently-played";
  let options = {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  };
  let {data:{items}} = await axios.get(url, options);
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