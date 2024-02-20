import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useCurrentState } from '../../Service/Context';
import { search } from '../../Service/Spotify/API';
import { AlbumList, TrackLists } from '../Layout';



const Search = () => {
    const [searchTrack, setSearchTrack] = useState([])
    const [searchAlbums, setSearchAlbums] = useState([])

    const [{ auth }, _] = useCurrentState();
    
    const { searchId } = useParams();

    const {token} = auth;

    useEffect(() => {
        search(token, searchId).then((data) => {
            console.log('search data is -> ', data);
            setSearchTrack(data?.tracks?.items);
            setSearchAlbums(data?.albums?.items);
        })
    }, [searchId])

    searchAlbums.length && console.log(searchAlbums);

    return (
        <div className='w-full h-full p-2'>
            {
                (searchAlbums?.length > 0) && <div className='search_album_container '>
                    <AlbumList albumListData={searchAlbums} callFrom = "searchPage" />
                </div>
            }

            {
                (searchTrack?.length > 0) && <TrackLists callFrom='searchPage' tracksArr={searchTrack} />
            }
        </div>
    )
}

export default Search