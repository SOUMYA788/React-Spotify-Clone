import { Box } from '@mui/system'
import React from 'react'
import { AlbumCard } from '../'

const AlbumList = ({ albumListData }) => {
    console.log("Album List get the data")
    return (
        <Box sx={{
            display: "flex",
            flexDirection: {
                xs: "column",
                sm: "row"
            },
            flexWrap: {
                xs: "nowrap",
                sm: "wrap"
            },
        }}>
            {
                albumListData.map((cardDataElement, indx) => {
                    let album_uri = cardDataElement?.data?.uri;
                    let album_name = cardDataElement?.data?.name;
                    let album_artist = cardDataElement?.data?.artists?.items;
                    let album_cover_art = cardDataElement?.data?.coverArt?.sources[0]?.url;
                    let album_date = cardDataElement?.data?.date?.year;
                   
                    return (
                        <AlbumCard
                            usedInList={true}
                            albumUri={album_uri}
                            albumName={album_name}
                            albumArtist={album_artist}
                            albumCoverArt={album_cover_art}
                            albumDate={album_date}
                            key={`${cardDataElement}_${indx}`}
                        />
                    )
                })
            }
        </Box>
    )
}

export {AlbumList}