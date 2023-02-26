import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { FeatchFrom } from '../../API/FeatchFrom';
import { AlbumCard, TrackLists } from '../';

const Album = () => {
  const [albumData, setAlbumData] = useState([])
  const [albumMeta, setAlbumMeta] = useState(null)
  const { albumId } = useParams();

  useEffect(() => {
    // FeatchFrom(`albums?ids=${albumId}`).then((data) => {
    //   let album = data?.albums[0];
    //   setAlbumData(album?.tracks?.items)
    //   setAlbumMeta(album)
    // })

    let data = {
      "albums": [
        {
          "album_type": "compilation",
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/0LyfQWJT6nXafLPZqxe9Of"
              },
              "id": "0LyfQWJT6nXafLPZqxe9Of",
              "name": "Various Artists",
              "type": "artist",
              "uri": "spotify:artist:0LyfQWJT6nXafLPZqxe9Of"
            }
          ],
          "copyrights": [
            {
              "text": "(C) 2022 Saregama India Ltd.",
              "type": "C"
            },
            {
              "text": "(P) 2022 Saregama India Ltd.",
              "type": "P"
            }
          ],
          "external_ids": {
            "upc": "196925191166"
          },
          "external_urls": {
            "spotify": "https://open.spotify.com/album/3aRVo91vV3V0CkDvYagfOi"
          },
          "genres": [],
          "id": "3aRVo91vV3V0CkDvYagfOi",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b273097045ad1d55b8589bc1930a",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02097045ad1d55b8589bc1930a",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d00004851097045ad1d55b8589bc1930a",
              "width": 64
            }
          ],
          "label": "Saregama",
          "name": "Lofi Hindi Hits, Vol. 1",
          "popularity": 22,
          "release_date": "2022-06-11",
          "release_date_precision": "day",
          "total_tracks": 15,
          "tracks": {
            "items": [
              {
                "artists": [
                  {
                    "external_urls": {
                      "spotify": "https://open.spotify.com/artist/7o7doCwqft91WC690aglWC"
                    },
                    "id": "7o7doCwqft91WC690aglWC",
                    "name": "Sanam",
                    "type": "artist",
                    "uri": "spotify:artist:7o7doCwqft91WC690aglWC"
                  },
                  {
                    "external_urls": {
                      "spotify": "https://open.spotify.com/artist/3wvQy7sgegrM0ZEW3N0vI3"
                    },
                    "id": "3wvQy7sgegrM0ZEW3N0vI3",
                    "name": "DJ Aftab",
                    "type": "artist",
                    "uri": "spotify:artist:3wvQy7sgegrM0ZEW3N0vI3"
                  }
                ],
                "disc_number": 1,
                "duration_ms": 187695,
                "explicit": false,
                "external_urls": {
                  "spotify": "https://open.spotify.com/track/5W1DO4a7pybYdHDHjdFU8X"
                },
                "id": "5W1DO4a7pybYdHDHjdFU8X",
                "is_local": false,
                "is_playable": true,
                "name": "Pyar Deewana Hota Hai - Lofi Reverb",
                "preview_url": "https://p.scdn.co/mp3-preview/bac394dbb378332619759ec8472500032f739e34?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
                "track_number": 1,
                "type": "track",
                "uri": "spotify:track:5W1DO4a7pybYdHDHjdFU8X"
              },
              {
                "artists": [
                  {
                    "external_urls": {
                      "spotify": "https://open.spotify.com/artist/5tJx4B5oBr1LJkkHI8GFYX"
                    },
                    "id": "5tJx4B5oBr1LJkkHI8GFYX",
                    "name": "Rahul Jain",
                    "type": "artist",
                    "uri": "spotify:artist:5tJx4B5oBr1LJkkHI8GFYX"
                  },
                  {
                    "external_urls": {
                      "spotify": "https://open.spotify.com/artist/3wvQy7sgegrM0ZEW3N0vI3"
                    },
                    "id": "3wvQy7sgegrM0ZEW3N0vI3",
                    "name": "DJ Aftab",
                    "type": "artist",
                    "uri": "spotify:artist:3wvQy7sgegrM0ZEW3N0vI3"
                  }
                ],
                "disc_number": 1,
                "duration_ms": 180554,
                "explicit": false,
                "external_urls": {
                  "spotify": "https://open.spotify.com/track/1XMDaasubEy8MGhFle6JwH"
                },
                "id": "1XMDaasubEy8MGhFle6JwH",
                "is_local": false,
                "is_playable": true,
                "name": "Tujhse Naraz Nahi Zindagi - Lofi Reverb",
                "preview_url": "https://p.scdn.co/mp3-preview/a9642dc505c261dc270fccffcc2bf33e99bcb2cf?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
                "track_number": 2,
                "type": "track",
                "uri": "spotify:track:1XMDaasubEy8MGhFle6JwH"
              },
              {
                "artists": [
                  {
                    "external_urls": {
                      "spotify": "https://open.spotify.com/artist/2GoeZ0qOTt6kjsWW4eA6LS"
                    },
                    "id": "2GoeZ0qOTt6kjsWW4eA6LS",
                    "name": "Darshan Raval",
                    "type": "artist",
                    "uri": "spotify:artist:2GoeZ0qOTt6kjsWW4eA6LS"
                  },
                  {
                    "external_urls": {
                      "spotify": "https://open.spotify.com/artist/3dN9MQpjIyNxyeRfz4EDZe"
                    },
                    "id": "3dN9MQpjIyNxyeRfz4EDZe",
                    "name": "Rochak Kohli",
                    "type": "artist",
                    "uri": "spotify:artist:3dN9MQpjIyNxyeRfz4EDZe"
                  },
                  {
                    "external_urls": {
                      "spotify": "https://open.spotify.com/artist/6TkLaYfeF56BdtUdtNLX7l"
                    },
                    "id": "6TkLaYfeF56BdtUdtNLX7l",
                    "name": "Naresh Narayan",
                    "type": "artist",
                    "uri": "spotify:artist:6TkLaYfeF56BdtUdtNLX7l"
                  }
                ],
                "disc_number": 1,
                "duration_ms": 131016,
                "explicit": false,
                "external_urls": {
                  "spotify": "https://open.spotify.com/track/1ZkfnX4qKMC4B5XBSxGkuN"
                },
                "id": "1ZkfnX4qKMC4B5XBSxGkuN",
                "is_local": false,
                "is_playable": true,
                "name": "Ek Ladki Ko Dekha Toh - Lofi Reverb",
                "preview_url": "https://p.scdn.co/mp3-preview/1fa8df2049dc7f27b579d49a5bdd3c4ebd35d9b0?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
                "track_number": 3,
                "type": "track",
                "uri": "spotify:track:1ZkfnX4qKMC4B5XBSxGkuN"
              },
              {
                "artists": [
                  {
                    "external_urls": {
                      "spotify": "https://open.spotify.com/artist/7o7doCwqft91WC690aglWC"
                    },
                    "id": "7o7doCwqft91WC690aglWC",
                    "name": "Sanam",
                    "type": "artist",
                    "uri": "spotify:artist:7o7doCwqft91WC690aglWC"
                  },
                  {
                    "external_urls": {
                      "spotify": "https://open.spotify.com/artist/6TkLaYfeF56BdtUdtNLX7l"
                    },
                    "id": "6TkLaYfeF56BdtUdtNLX7l",
                    "name": "Naresh Narayan",
                    "type": "artist",
                    "uri": "spotify:artist:6TkLaYfeF56BdtUdtNLX7l"
                  }
                ],
                "disc_number": 1,
                "duration_ms": 230278,
                "explicit": false,
                "external_urls": {
                  "spotify": "https://open.spotify.com/track/1pxkm3dzfXEJYvd4SikFui"
                },
                "id": "1pxkm3dzfXEJYvd4SikFui",
                "is_local": false,
                "is_playable": true,
                "name": "Pyar Deewana Hota He - Lofi Reverb",
                "preview_url": "https://p.scdn.co/mp3-preview/8e59c64141322a6dd5adb1b327191ff5d55d6991?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
                "track_number": 4,
                "type": "track",
                "uri": "spotify:track:1pxkm3dzfXEJYvd4SikFui"
              },
              {
                "artists": [
                  {
                    "external_urls": {
                      "spotify": "https://open.spotify.com/artist/5Y9YGMxRoQYfJFj4kJ9TVv"
                    },
                    "id": "5Y9YGMxRoQYfJFj4kJ9TVv",
                    "name": "Goldie Sohel",
                    "type": "artist",
                    "uri": "spotify:artist:5Y9YGMxRoQYfJFj4kJ9TVv"
                  },
                  {
                    "external_urls": {
                      "spotify": "https://open.spotify.com/artist/6TkLaYfeF56BdtUdtNLX7l"
                    },
                    "id": "6TkLaYfeF56BdtUdtNLX7l",
                    "name": "Naresh Narayan",
                    "type": "artist",
                    "uri": "spotify:artist:6TkLaYfeF56BdtUdtNLX7l"
                  }
                ],
                "disc_number": 1,
                "duration_ms": 184875,
                "explicit": false,
                "external_urls": {
                  "spotify": "https://open.spotify.com/track/4GWe4fR8uvkfWRFT9mKKrF"
                },
                "id": "4GWe4fR8uvkfWRFT9mKKrF",
                "is_local": false,
                "is_playable": true,
                "name": "Aaj Sajeya - Lofi Reverb",
                "preview_url": "https://p.scdn.co/mp3-preview/341b68ad1516e9ab2dc58ae4b6dec36a74ce05d7?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
                "track_number": 5,
                "type": "track",
                "uri": "spotify:track:4GWe4fR8uvkfWRFT9mKKrF"
              },
              {
                "artists": [
                  {
                    "external_urls": {
                      "spotify": "https://open.spotify.com/artist/6EgAV1bN9TgrsB6kysEQPH"
                    },
                    "id": "6EgAV1bN9TgrsB6kysEQPH",
                    "name": "Ankit Dimri",
                    "type": "artist",
                    "uri": "spotify:artist:6EgAV1bN9TgrsB6kysEQPH"
                  },
                  {
                    "external_urls": {
                      "spotify": "https://open.spotify.com/artist/5dvCHAlgZZBuYuRdSm3dQE"
                    },
                    "id": "5dvCHAlgZZBuYuRdSm3dQE",
                    "name": "Deepanshu Ruhela",
                    "type": "artist",
                    "uri": "spotify:artist:5dvCHAlgZZBuYuRdSm3dQE"
                  }
                ],
                "disc_number": 1,
                "duration_ms": 132972,
                "explicit": false,
                "external_urls": {
                  "spotify": "https://open.spotify.com/track/7sMpUPXqdoPDLPrU1cZMbf"
                },
                "id": "7sMpUPXqdoPDLPrU1cZMbf",
                "is_local": false,
                "is_playable": true,
                "name": "Agar Tum Mil Jao - Lofi Reverb",
                "preview_url": "https://p.scdn.co/mp3-preview/f8aadb937f1ad32726de5773de263509afb0012a?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
                "track_number": 6,
                "type": "track",
                "uri": "spotify:track:7sMpUPXqdoPDLPrU1cZMbf"
              },
              {
                "artists": [
                  {
                    "external_urls": {
                      "spotify": "https://open.spotify.com/artist/0GF4shudTAFv8ak9eWdd4Y"
                    },
                    "id": "0GF4shudTAFv8ak9eWdd4Y",
                    "name": "Kishore Kumar",
                    "type": "artist",
                    "uri": "spotify:artist:0GF4shudTAFv8ak9eWdd4Y"
                  },
                  {
                    "external_urls": {
                      "spotify": "https://open.spotify.com/artist/5dvCHAlgZZBuYuRdSm3dQE"
                    },
                    "id": "5dvCHAlgZZBuYuRdSm3dQE",
                    "name": "Deepanshu Ruhela",
                    "type": "artist",
                    "uri": "spotify:artist:5dvCHAlgZZBuYuRdSm3dQE"
                  }
                ],
                "disc_number": 1,
                "duration_ms": 128966,
                "explicit": false,
                "external_urls": {
                  "spotify": "https://open.spotify.com/track/0HAFwzrpwkMAwKmGvj8UwA"
                },
                "id": "0HAFwzrpwkMAwKmGvj8UwA",
                "is_local": false,
                "is_playable": true,
                "name": "Ek Ladki Bheegi Bhaagi Si - Lofi Reverb",
                "preview_url": "https://p.scdn.co/mp3-preview/bf287ccc74e9c1b81bb237eb9348a941bdac3146?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
                "track_number": 7,
                "type": "track",
                "uri": "spotify:track:0HAFwzrpwkMAwKmGvj8UwA"
              },
              {
                "artists": [
                  {
                    "external_urls": {
                      "spotify": "https://open.spotify.com/artist/2L16nDKTxhFGaDriR2AHTB"
                    },
                    "id": "2L16nDKTxhFGaDriR2AHTB",
                    "name": "Lucky Ali",
                    "type": "artist",
                    "uri": "spotify:artist:2L16nDKTxhFGaDriR2AHTB"
                  },
                  {
                    "external_urls": {
                      "spotify": "https://open.spotify.com/artist/5dvCHAlgZZBuYuRdSm3dQE"
                    },
                    "id": "5dvCHAlgZZBuYuRdSm3dQE",
                    "name": "Deepanshu Ruhela",
                    "type": "artist",
                    "uri": "spotify:artist:5dvCHAlgZZBuYuRdSm3dQE"
                  }
                ],
                "disc_number": 1,
                "duration_ms": 135096,
                "explicit": false,
                "external_urls": {
                  "spotify": "https://open.spotify.com/track/4sSfhIarKP2MvySS2pwhCL"
                },
                "id": "4sSfhIarKP2MvySS2pwhCL",
                "is_local": false,
                "is_playable": true,
                "name": "Ek Pal Ka Jeena - Lofi Reverb",
                "preview_url": "https://p.scdn.co/mp3-preview/08a99f19eeb0029d1ce758244022a9fd4e369be8?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
                "track_number": 8,
                "type": "track",
                "uri": "spotify:track:4sSfhIarKP2MvySS2pwhCL"
              },
              {
                "artists": [
                  {
                    "external_urls": {
                      "spotify": "https://open.spotify.com/artist/0gXDpqwYNDODn7fB0RDN8J"
                    },
                    "id": "0gXDpqwYNDODn7fB0RDN8J",
                    "name": "Mohammed Rafi",
                    "type": "artist",
                    "uri": "spotify:artist:0gXDpqwYNDODn7fB0RDN8J"
                  },
                  {
                    "external_urls": {
                      "spotify": "https://open.spotify.com/artist/4rgPItfFsz5c623LYz1OMA"
                    },
                    "id": "4rgPItfFsz5c623LYz1OMA",
                    "name": "Happy Pills",
                    "type": "artist",
                    "uri": "spotify:artist:4rgPItfFsz5c623LYz1OMA"
                  }
                ],
                "disc_number": 1,
                "duration_ms": 190666,
                "explicit": false,
                "external_urls": {
                  "spotify": "https://open.spotify.com/track/6sg47YmCia65x4arPSlBAA"
                },
                "id": "6sg47YmCia65x4arPSlBAA",
                "is_local": false,
                "is_playable": true,
                "name": "Likhe Jo Khat Tujhe - Lofi Reverb",
                "preview_url": "https://p.scdn.co/mp3-preview/987c5c071a76307f903f8ebfdce767b1da40c24f?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
                "track_number": 9,
                "type": "track",
                "uri": "spotify:track:6sg47YmCia65x4arPSlBAA"
              },
              {
                "artists": [
                  {
                    "external_urls": {
                      "spotify": "https://open.spotify.com/artist/4K6blSRoklNdpw4mzLxwfn"
                    },
                    "id": "4K6blSRoklNdpw4mzLxwfn",
                    "name": "Kumar Sanu",
                    "type": "artist",
                    "uri": "spotify:artist:4K6blSRoklNdpw4mzLxwfn"
                  },
                  {
                    "external_urls": {
                      "spotify": "https://open.spotify.com/artist/3gBKY0y3dFFVRqicLnVZYz"
                    },
                    "id": "3gBKY0y3dFFVRqicLnVZYz",
                    "name": "Alka Yagnik",
                    "type": "artist",
                    "uri": "spotify:artist:3gBKY0y3dFFVRqicLnVZYz"
                  },
                  {
                    "external_urls": {
                      "spotify": "https://open.spotify.com/artist/4rgPItfFsz5c623LYz1OMA"
                    },
                    "id": "4rgPItfFsz5c623LYz1OMA",
                    "name": "Happy Pills",
                    "type": "artist",
                    "uri": "spotify:artist:4rgPItfFsz5c623LYz1OMA"
                  }
                ],
                "disc_number": 1,
                "duration_ms": 256941,
                "explicit": false,
                "external_urls": {
                  "spotify": "https://open.spotify.com/track/6kEeTRJNTlTi61BdZ2LcWH"
                },
                "id": "6kEeTRJNTlTi61BdZ2LcWH",
                "is_local": false,
                "is_playable": true,
                "name": "Tum Mile Dil Khile - Lofi Reverb",
                "preview_url": "https://p.scdn.co/mp3-preview/80b37db50062790d43759b0a6c168b2cf76793a8?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
                "track_number": 10,
                "type": "track",
                "uri": "spotify:track:6kEeTRJNTlTi61BdZ2LcWH"
              },
              {
                "artists": [
                  {
                    "external_urls": {
                      "spotify": "https://open.spotify.com/artist/0gXDpqwYNDODn7fB0RDN8J"
                    },
                    "id": "0gXDpqwYNDODn7fB0RDN8J",
                    "name": "Mohammed Rafi",
                    "type": "artist",
                    "uri": "spotify:artist:0gXDpqwYNDODn7fB0RDN8J"
                  },
                  {
                    "external_urls": {
                      "spotify": "https://open.spotify.com/artist/0AyqjTeFKxSNXJAJLLUaUJ"
                    },
                    "id": "0AyqjTeFKxSNXJAJLLUaUJ",
                    "name": "Sushma Shrestha",
                    "type": "artist",
                    "uri": "spotify:artist:0AyqjTeFKxSNXJAJLLUaUJ"
                  },
                  {
                    "external_urls": {
                      "spotify": "https://open.spotify.com/artist/4rgPItfFsz5c623LYz1OMA"
                    },
                    "id": "4rgPItfFsz5c623LYz1OMA",
                    "name": "Happy Pills",
                    "type": "artist",
                    "uri": "spotify:artist:4rgPItfFsz5c623LYz1OMA"
                  }
                ],
                "disc_number": 1,
                "duration_ms": 145500,
                "explicit": false,
                "external_urls": {
                  "spotify": "https://open.spotify.com/track/2FPxdD4tOiMdR78nUf03qD"
                },
                "id": "2FPxdD4tOiMdR78nUf03qD",
                "is_local": false,
                "is_playable": true,
                "name": "Kya Hua Tera Wada - Lofi Reverb",
                "preview_url": "https://p.scdn.co/mp3-preview/d946ac472ae5b2cb627161a31aee21f1dc9863a8?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
                "track_number": 11,
                "type": "track",
                "uri": "spotify:track:2FPxdD4tOiMdR78nUf03qD"
              },
              {
                "artists": [
                  {
                    "external_urls": {
                      "spotify": "https://open.spotify.com/artist/6qA494Mxl9DGij4HZmK9aH"
                    },
                    "id": "6qA494Mxl9DGij4HZmK9aH",
                    "name": "Da Banotra",
                    "type": "artist",
                    "uri": "spotify:artist:6qA494Mxl9DGij4HZmK9aH"
                  }
                ],
                "disc_number": 1,
                "duration_ms": 148108,
                "explicit": false,
                "external_urls": {
                  "spotify": "https://open.spotify.com/track/2sPIDBKqn0VzfKJOBr546q"
                },
                "id": "2sPIDBKqn0VzfKJOBr546q",
                "is_local": false,
                "is_playable": true,
                "name": "O Mere Dil Ke Chain - Lofi Reverb",
                "preview_url": "https://p.scdn.co/mp3-preview/c7bc0d95c5bc0a86ed1f6dbe15a4b8c002713f12?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
                "track_number": 12,
                "type": "track",
                "uri": "spotify:track:2sPIDBKqn0VzfKJOBr546q"
              },
              {
                "artists": [
                  {
                    "external_urls": {
                      "spotify": "https://open.spotify.com/artist/4K6blSRoklNdpw4mzLxwfn"
                    },
                    "id": "4K6blSRoklNdpw4mzLxwfn",
                    "name": "Kumar Sanu",
                    "type": "artist",
                    "uri": "spotify:artist:4K6blSRoklNdpw4mzLxwfn"
                  },
                  {
                    "external_urls": {
                      "spotify": "https://open.spotify.com/artist/3wvQy7sgegrM0ZEW3N0vI3"
                    },
                    "id": "3wvQy7sgegrM0ZEW3N0vI3",
                    "name": "DJ Aftab",
                    "type": "artist",
                    "uri": "spotify:artist:3wvQy7sgegrM0ZEW3N0vI3"
                  }
                ],
                "disc_number": 1,
                "duration_ms": 240604,
                "explicit": false,
                "external_urls": {
                  "spotify": "https://open.spotify.com/track/1n6etnG6lH1inOOj2qqMR3"
                },
                "id": "1n6etnG6lH1inOOj2qqMR3",
                "is_local": false,
                "is_playable": true,
                "name": "Koi Toh Saathi Chahiye - Lofi Reverb",
                "preview_url": "https://p.scdn.co/mp3-preview/fe684798f2d9153a210053c03879cac0dd60011a?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
                "track_number": 13,
                "type": "track",
                "uri": "spotify:track:1n6etnG6lH1inOOj2qqMR3"
              },
              {
                "artists": [
                  {
                    "external_urls": {
                      "spotify": "https://open.spotify.com/artist/0GF4shudTAFv8ak9eWdd4Y"
                    },
                    "id": "0GF4shudTAFv8ak9eWdd4Y",
                    "name": "Kishore Kumar",
                    "type": "artist",
                    "uri": "spotify:artist:0GF4shudTAFv8ak9eWdd4Y"
                  },
                  {
                    "external_urls": {
                      "spotify": "https://open.spotify.com/artist/5HnE0vK2ZcVTpNJjecfJUV"
                    },
                    "id": "5HnE0vK2ZcVTpNJjecfJUV",
                    "name": "The Keychangers",
                    "type": "artist",
                    "uri": "spotify:artist:5HnE0vK2ZcVTpNJjecfJUV"
                  }
                ],
                "disc_number": 1,
                "duration_ms": 175798,
                "explicit": false,
                "external_urls": {
                  "spotify": "https://open.spotify.com/track/04FiEiWLRPtM4AACDpf7sL"
                },
                "id": "04FiEiWLRPtM4AACDpf7sL",
                "is_local": false,
                "is_playable": true,
                "name": "Muqaddar Ka Sikandar - Lofi Reverb",
                "preview_url": "https://p.scdn.co/mp3-preview/9e0949831f7a7349d32292f694cb1fa1449ee977?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
                "track_number": 14,
                "type": "track",
                "uri": "spotify:track:04FiEiWLRPtM4AACDpf7sL"
              },
              {
                "artists": [
                  {
                    "external_urls": {
                      "spotify": "https://open.spotify.com/artist/0UdU8zY6Z0ZRhyl4yRhkfT"
                    },
                    "id": "0UdU8zY6Z0ZRhyl4yRhkfT",
                    "name": "Sridevi",
                    "type": "artist",
                    "uri": "spotify:artist:0UdU8zY6Z0ZRhyl4yRhkfT"
                  },
                  {
                    "external_urls": {
                      "spotify": "https://open.spotify.com/artist/1k86nyDLibfGQYpps8NKO0"
                    },
                    "id": "1k86nyDLibfGQYpps8NKO0",
                    "name": "Jolly Mukherjee",
                    "type": "artist",
                    "uri": "spotify:artist:1k86nyDLibfGQYpps8NKO0"
                  },
                  {
                    "external_urls": {
                      "spotify": "https://open.spotify.com/artist/5HnE0vK2ZcVTpNJjecfJUV"
                    },
                    "id": "5HnE0vK2ZcVTpNJjecfJUV",
                    "name": "The Keychangers",
                    "type": "artist",
                    "uri": "spotify:artist:5HnE0vK2ZcVTpNJjecfJUV"
                  }
                ],
                "disc_number": 1,
                "duration_ms": 143220,
                "explicit": false,
                "external_urls": {
                  "spotify": "https://open.spotify.com/track/6S3i2aLtWOj8gLmxSDzFvD"
                },
                "id": "6S3i2aLtWOj8gLmxSDzFvD",
                "is_local": false,
                "is_playable": true,
                "name": "Chandni O Meri Chandni - Lofi Reverb",
                "preview_url": "https://p.scdn.co/mp3-preview/b087f8ef5be3894d4b86af43815c1490bb014487?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
                "track_number": 15,
                "type": "track",
                "uri": "spotify:track:6S3i2aLtWOj8gLmxSDzFvD"
              }
            ],
            "limit": 50,
            "next": null,
            "offset": 0,
            "previous": null,
            "total": 15
          },
          "type": "album",
          "uri": "spotify:album:3aRVo91vV3V0CkDvYagfOi"
        }
      ]
    }

    let album = data?.albums[0];
    setAlbumData(album?.tracks?.items)
    setAlbumMeta(album)

  }, [albumId])

  console.log("Album Data\n\n", albumData)
  console.log("\n\nalbum meta\n\n", albumMeta)

  return (
    <Box>
      <Box sx={{ backgroundColor: { sm: "#e3e3e3" }, padding: "15px 0" }}>
        {albumMeta && <AlbumCard
          albumUri={albumMeta?.id}
          albumName={albumMeta?.name}
          albumArtist={albumMeta?.artists}
          albumCoverArt={albumMeta?.images[0]?.url}
          albumLabel={albumMeta?.label}
          albumDate={albumMeta?.release_date}
          albumCopyrights={albumMeta?.copyrights}
        />}
      </Box>

      <Box>
        <TrackLists tracksArr={albumData} />
      </Box>

    </Box>
  )
}

export { Album }