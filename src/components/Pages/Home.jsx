import React from 'react'
import { AlbumList, PlayLists } from '../Layout';
import { useCurrentState } from '../../Service/Context';

const Home = () => {

  const [{ player }, _] = useCurrentState();
  const { recentAlbums } = player;

  return (
    <>
      <PlayLists />

      {recentAlbums?.items?.length > 0 && <AlbumList albumListData={recentAlbums} />}
    </>
  )

}

export default Home