import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import { AlbumCard } from '../'

const AlbumList = ({ albumListData }) => {
    const [uniqueAlbums, setUniqueAlbums] = useState([])
    useEffect(() => {
        let names = []
        let uniqueAlbumsData = albumListData.filter((element, indx) => {
            let name = element?.track?.album?.name;
            if (!names.includes(name)) {
                names.push(name)
                return element
            }
        });
        
        setUniqueAlbums(uniqueAlbumsData)
    }, [albumListData])
    
    uniqueAlbums.length && console.log(uniqueAlbums);

    return (
        <Box sx={{
            display: "flex",
            gap:"2%",
            padding:"5px 2%",
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
                uniqueAlbums.length && uniqueAlbums.map((cardDataElement, indx) => {
                    let albumCardData = {
                        usedInList: true,
                        albumUri: cardDataElement?.track?.album?.id,
                        albumName: cardDataElement?.track?.album?.name,
                        albumArtists: cardDataElement?.track?.album?.artists,
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