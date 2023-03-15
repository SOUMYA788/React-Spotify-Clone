import { Typography } from '@mui/material';
import { Box } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom';
import "./AlbumCard.css"

const AlbumCard = ({ albumCardData }) => {
  const { usedInList, albumUri, albumName, albumArtist, albumCoverArt, albumLabel, albumDate, albumCopyrights } = albumCardData;

  const artistArr = []

  albumCardData?.albumArtist && albumCardData?.albumArtist.map((artist) => {
    artistArr.push(artist.name)
  })

  const setAlbumId = (albumUri) => {
    if (albumUri) {
      if (albumUri.includes(":")) {
        return (`/album/${albumUri.split(":")[2]}`);
      } else {
        return (`/album/${albumUri}`);
      }
    }
  }

  // STYLES

  const albumCardMainBoxStyle = {
    width: {
      xs: usedInList ? "100%" : "100%",
      sm: usedInList ? "20%" : "100%"
    },
    display: "flex",
    flexDirection: {
      xs: "column",
      sm: usedInList ? "column" : "row",
    },
    gap: "5px",
    padding: "3% 1%",
    borderRadius: "8px",
    margin: {
      xs: usedInList && "1% auto",
      sm: usedInList && "1%",
    },
    transition: "0.2s ease",
    background: "rgba(255, 255, 255, 0.5)",
    ":hover": {
      background: usedInList && "rgba(255, 255, 255, 0.8)",
    }
  }

  return (
    <Box sx={albumCardMainBoxStyle}>
      <Box sx={{ margin: !usedInList ? "0 10px 0 0" : "0 0 5px" }}>
        <Link className='component_link' to={setAlbumId(albumCardData?.albumUri)}>
          <Box component="img" src={albumCoverArt} sx={{
            width: usedInList ? "100%" : "150px",
            height: !usedInList && "150px"
          }} />
        </Link>
      </Box>

      <Box >
        <Link className='component_link' to={setAlbumId(albumCardData?.albumUri)}>
          <Typography
            component="h2"
            variant='h2'
            sx={{
              margin: {
                xs: "5px 0",
                sm: "0 0 5px"
              },
              fontSize: {
                xs: "1.5em",
                sm: usedInList ? "1em" : "25px",
              },
              overflow: "hidden",
              whiteSpace: 'nowrap',
              textOverflow: 'ellipsis'
            }}
          >
            {albumCardData && albumCardData?.albumName}
          </Typography>
        </Link>

        {
          albumLabel && <Typography
            component="h2"
            variant='h2'
            sx={{
              margin: {
                xs: "2px 0",
                sm: "0 0 2px"
              },
              fontSize: {
                xs: "1em",
                sm: usedInList ? "1em" : "17px",
              }
            }}
          >
            {albumCardData && albumCardData?.albumLabel}
          </Typography>
        }

        {
          albumCardData?.copyrights && albumCardData?.copyrights.map((copyrightElem, indx) => (
            <Typography
              component="p"
              variant='p'
              sx={{
                fontSize: {
                  xs: "1em",
                  sm: usedInList ? "1em" : "17px",
                },
                margin: {
                  xs: "2px 0",
                  sm: "0 0 2px"
                }
              }}
              key={`${indx}`}>
              {copyrightElem.text}
            </Typography>
          ))
        }

        {artistArr.length > 0 && <Typography
          component="p"
          variant='p'
          sx={{
            fontSize: {
              xs: "1em",
              sm: usedInList ? "1em" : "17px",
            },
            margin: {
              xs: "2px 0",
              sm: "0 0 2px"
            }
          }}>
          {
            artistArr.toString()
          }
        </Typography>}

        {albumCardData?.albumDate && <Typography component="p" variant='p' sx={{
          fontSize: {
            xs: "1em",
            sm: usedInList ? "1em" : "17px",
          }, margin: {
            xs: "2px 0",
            sm: "0 0 2px"
          }
        }}>
          {new Date(albumCardData?.albumDate).getFullYear()}
        </Typography>}

      </Box>
    </Box>
  )
}

export { AlbumCard }