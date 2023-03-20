import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useCurrentState } from '../../../Service/Context';
import { search } from '../../../Service/Spotify/API';
import { AlbumList, TrackLists } from '../../';
import "./Search.css"
const Search = () => {
    const [searchTrack, setSearchTrack] = useState([])
    const [searchAlbums, setSearchAlbums] = useState([])
    const [{ token }, dispatch] = useCurrentState();
    const { searchId } = useParams();

    useEffect(() => {
        search(token, searchId).then((data) => {
            console.log('search data is -> ', data);
            setSearchTrack(data?.tracks?.items);
            setSearchAlbums(data?.albums?.items);
        })
    }, [searchId])

    searchAlbums.length && console.log(searchAlbums);

    return (
        <Box sx={{
            width: "100%",
            height: '100%',
            padding: "10px"
        }}>
            {
                (searchAlbums.length > 0) && <Box className='search_album_container'>
                    <AlbumList albumListData={searchAlbums} callFrom = "searchPage" />
                </Box>
            }

            {
                (searchTrack.length > 0) && <TrackLists callFrom='searchPage' tracksArr={searchTrack} />
            }
        </Box>
    )
}

export { Search }