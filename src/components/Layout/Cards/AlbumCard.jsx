import React from 'react'
import { Link } from 'react-router-dom';

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



  return (
    <div className={`${usedInList ? "w-full 600px:w-[20%] 600px:flex-col my-[1%] mx-auto 600px:m-[1%] hover:bg-slate-400 hover:text-white" : "w-full 600px:flex-row"} flex flex-col gap-1 py-[3%] px-[1%] rounded-lg transition-all bg-slate-200`}>

      <div className={`${usedInList ? "mb-1" : "mx-2"}`} >
        <Link className='component_link flex no-underline text-slate-800' to={setAlbumId(albumCardData?.albumUri)}>
          <img src={albumCoverArt} className={`${usedInList ? "w-full" : "w-[150px] h-[150px]"}`} />
        </Link>
      </div>



      <div >

        <Link className='component_link flex no-underline text-slate-800' to={setAlbumId(albumCardData?.albumUri)}>
          <h2 className={`my-1 mx-0 600px:mt-0 text-2xl ${usedInList ? "600px:text-base" : ""} overflow-hidden whitespace-nowrap text-ellipsis`}> {albumCardData && albumCardData?.albumName} </h2>
        </Link>


        {
          albumLabel && <h2 className={`my-0.5 mx-0 600px:mt-0 text-base`}> {albumCardData && albumCardData?.albumLabel} </h2>
        }


        {
          albumCardData?.copyrights?.length > 0 && albumCardData?.copyrights.map((copyrightElem, indx) => (
            <p className='text-base my-0.5 600px:mt-0' key={`${indx}`}> {copyrightElem.text} </p>
          ))
        }

        {artistArr.length > 0 && <p className='text-base my-0.5 600px:mt-0'>
          {
            artistArr.toString()
          }
        </p>}

        {albumCardData?.albumDate && <p className="className='text-base my-0.5 600px:mt-0">
          {new Date(albumCardData?.albumDate).getFullYear()}
        </p>}

      </div>
    </div>
  )
}

export default AlbumCard