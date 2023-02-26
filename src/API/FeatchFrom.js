import axios from "axios";

export async function FeatchFrom(url) {
  const BASE_URL = "https://spotify81.p.rapidapi.com";

  const options = {
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
      'X-RapidAPI-Host': 'spotify81.p.rapidapi.com'
    }
  };
  let { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
}