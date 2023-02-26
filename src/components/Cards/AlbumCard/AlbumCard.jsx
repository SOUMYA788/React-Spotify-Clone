import { Typography } from '@mui/material';
import { Box } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom';
import "./AlbumCard.css"

const AlbumCard = (props) => {
  const { usedInList, albumUri, albumName, albumArtist, albumCoverArt, albumLabel, albumDate, albumCopyrights } = props;
  const setAlbumId = (albumUri) => {
    if (albumUri.includes(":")) {
      return (`/album/${albumUri.split(":")[2]}`);
    } else {
      return (albumUri);
    }
  }
  console.log("getting card also");
  return (
    <Box sx={{
      width: {
        xs: usedInList ? "75%" : "100%",
        sm: usedInList ? "30%" : "100%"
      },
      display: "flex",
      flexDirection: {
        xs: "column",
        sm: usedInList ? "column" : "row",
      }

    }}>
      <Box sx={{ marginRight: !usedInList && "10px" }}>
        <Link className='component_link' to={setAlbumId(albumUri)}>
          <Box component="img" src={albumCoverArt} sx={{
            width: usedInList ? "100%" : "150px",
            height: !usedInList && "150px"
          }} />
        </Link>
      </Box>

      <Box >
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
            }
          }}
        >
          {albumName}
        </Typography>

        <Typography
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
          {albumLabel}
        </Typography>

        {
          albumCopyrights && albumCopyrights.map((artistElement, indx) => (
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
              {artistElement.text}
            </Typography>
          ))
        }

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
          }}>
          {
            albumArtist.map((artistElement) => (
              artistElement?.profile?.name || artistElement?.name
            ))
          }
        </Typography>

        <Typography component="p" variant='p' sx={{
          fontSize: {
            xs: "1em",
            sm: usedInList ? "1em" : "17px",
          }, margin: {
            xs: "2px 0",
            sm: "0 0 2px"
          }
        }}>
          {new Date(albumDate).getFullYear()}
        </Typography>

      </Box>
    </Box>
  )
}

export { AlbumCard }