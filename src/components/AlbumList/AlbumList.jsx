import { Box } from '@mui/system'
import React from 'react'
import { AlbumCard } from '../'

const AlbumList = ({ albumListData }) => {
    albumListData && console.log('albumListData -> ', albumListData);

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
                    let albumCardData = {
                        usedInList: true,
                        albumUri: cardDataElement?.track?.album?.id,
                        albumName: cardDataElement?.track?.album?.name,
                        albumArtists: cardDataElement?.track?.album?.artists,
                        albumDate: cardDataElement?.track?.album?.release_date,
                        albumCoverArt: cardDataElement?.track?.album?.images[0]?.url
                    }
                    return (
                        <AlbumCard albumCardData={albumCardData} key={`${cardDataElement}_${indx}`} />
                    )
                })
            }
        </Box>
    )
}

export { AlbumList }