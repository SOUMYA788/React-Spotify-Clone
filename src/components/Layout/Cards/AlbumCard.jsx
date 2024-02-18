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
    <div className={`${usedInList ? "w-full 300px:w-48 mx-auto 600px:mx-0 hover:scale-105 hover:shadow-slate-700 items-center no-underline bg-opacity-55 bg-slate-600 hover:bg-slate-700 p-4" : "600px:flex-row bg-slate-200 gap-1 py-6 px-3 rounded-lg duration-300 shadow-lg shadow-transparent"} flex flex-col transition-all`}>

      <div className={`${usedInList ? "mb-2" : "p-2"}`} >
        <Link className='component_link flex no-underline' to={setAlbumId(albumCardData?.albumUri)}>
          <img src={albumCoverArt} className={`${usedInList ? "w-full" : "w-[150px] h-[150px]"}`} />
        </Link>
      </div>



      <div className='w-full overflow-hidden'>

        <Link className='w-full flex no-underline text-slate-800' to={setAlbumId(albumCardData?.albumUri)}>
          <h2 className={`my-1 mx-0 text-base ${usedInList ? "600px:text-base text-white" : ""} whitespace-nowrap text-ellipsis ${albumCardData?.albumName?.length > 30 && "animate-[scroll_15s_linear_infinite]"} `}> {albumCardData && albumCardData?.albumName} </h2>
        </Link>


        {
          albumLabel && <h2 className={`my-0.5 mx-0 text-xs`}> {albumCardData && albumCardData?.albumLabel} </h2>
        }


        {
          albumCardData?.copyrights?.length > 0 && albumCardData?.copyrights.map((copyrightElem, indx) => (
            <p className='text-xs my-0.5' key={`${indx}`}> {copyrightElem.text} </p>
          ))
        }

        {artistArr.length > 0 && <p className='text-xs my-0.5'>
          {
            artistArr.toString()
          }
        </p>}

        {albumCardData?.albumDate && <p className="className='text-xs my-0.5">
          {new Date(albumCardData?.albumDate).getFullYear()}
        </p>}

      </div>
    </div>
  )
}

export default AlbumCard