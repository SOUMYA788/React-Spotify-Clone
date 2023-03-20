import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import { AlbumCard } from '../'

const AlbumList = ({ albumListData, callFrom }) => {
    const [uniqueAlbums, setUniqueAlbums] = useState([])
    useEffect(() => {
        let names = []
        let uniqueAlbumsData = callFrom === "searchPage" ? albumListData : albumListData.filter((element, indx) => {
            let name = element?.track?.album?.name;
            if (!names.includes(name)) {
                // if name not available then return element, and save the returned name in list, so next time it will include in count...
                names.push(name)
                return element
            }
        });

        setUniqueAlbums(uniqueAlbumsData)
    }, [albumListData])

    const albumListHeadding = {
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        backdropFilter: "blur(5px)",
        margin: '5px 2%',
        height: `35px`,
        lineHeight: "35px",
        fontSize: "1.5em",
        padding: "0 1%",
    }

    return (
        <>
            <Typography component='h2' variant='h2' sx={albumListHeadding}>
                ALBUMS
            </Typography>
            <Box sx={{
                width: "100%",
                display: "flex",
                gap: "2%",
                padding: {
                    xs: "5%",
                    sm: "5px 2%"
                },
                flexDirection: "row",
                flexWrap: "wrap",
            }}>
                {
                    uniqueAlbums.length && uniqueAlbums.map((cardDataElement, indx) => {
                        let albumCardData = {
                            usedInList: true,
                            albumUri: cardDataElement?.track?.album?.id || cardDataElement?.id,
                            albumName: cardDataElement?.track?.album?.name || cardDataElement?.name,
                            albumArtists: cardDataElement?.track?.album?.artists || cardDataElement?.artists,
                            albumCoverArt: cardDataElement?.track?.album?.images[0]?.url || cardDataElement?.images[0]?.url
                        }
                        return (
                            <AlbumCard usedInList={true} albumCardData={albumCardData} key={`${cardDataElement}_${indx}`} />
                        )
                    })
                }
            </Box>
        </>
    )
}

export { AlbumList }