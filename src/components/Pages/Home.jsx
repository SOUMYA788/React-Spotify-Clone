import React from 'react'
import { AlbumList, PlayLists } from '../Layout';
import { useCurrentState } from '../../Service/Context';

const Home = () => {
  const [{ playlists, recentAlbums }, dispatch] = useCurrentState();

  return (
    <div className="w-full">
      {
        playlists.length > 0 && <div className="home_playlist_container w-full" >
          <h2 className='h-9 text-2xl px-[1%] bg-slate-200 bg-opacity-50 backdrop-blur-sm my-1 mx-[2%]' >
            PLAYLISTS
          </h2>
          <PlayLists playListsData={playlists} />
        </div>
      }
      {
        recentAlbums.length > 0 && <div className='mt-5'>
          <AlbumList albumListData={recentAlbums} />
        </div>
      }
    </div>
  )
}

export default Home