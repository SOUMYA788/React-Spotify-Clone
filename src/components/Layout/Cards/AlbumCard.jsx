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
    <div className={`${usedInList ? "w-full 300px:w-[174px] mx-auto 400px:mx-0 hover:scale-105 hover:shadow-slate-700 items-center no-underline hover:bg-slate-700 p-4 rounded-md" : "gap-2 py-6 px-3 rounded-lg duration-300 shadow-lg shadow-transparent 400px:flex-row"} flex-col ring-2 ring-slate-400 flex transition-all bg-slate-600 bg-opacity-55`}>

      <div className={`${usedInList ? "mb-2" : ""}`} >
        <Link className='component_link w-fit flex no-underline outline-none ring-2 ring-slate-400 focus:ring-slate-300 rounded-sm p-0.5' to={setAlbumId(albumCardData?.albumUri)}>
          <img src={albumCoverArt} className={`${usedInList ? "w-full" : "w-[130px] h-[130px]"}`} />
        </Link>
      </div>



      <div className='w-full overflow-hidden flex flex-col gap-1'>

        <Link className='w-full flex no-underline text-slate-200 hover:text-white focus:text-white font-medium' to={setAlbumId(albumCardData?.albumUri)}>
          <h2 className={`w-fit text-base text-inherit ${usedInList && "whitespace-nowrap"} text-ellipsis ${(albumCardData?.albumName?.length > 20 && usedInList) && "animate-scroll"} `}> {albumCardData && albumCardData?.albumName} </h2>
        </Link>


        {
          albumLabel && <h2 className={`mx-0 text-xs text-slate-200`}> {albumCardData && albumCardData?.albumLabel} </h2>
        }


        {
          albumCardData?.copyrights?.length > 0 && albumCardData?.copyrights.map((copyrightElem, indx) => (
            <p className='text-xs text-slate-200' key={`${indx}`}> {copyrightElem.text} </p>
          ))
        }

        {artistArr.length > 0 && <p className='text-xs text-slate-200'>
          {
            artistArr.toString()
          }
        </p>}

        {albumCardData?.albumDate && <p className="className='text-xs text-slate-200">
          {new Date(albumCardData?.albumDate).getFullYear()}
        </p>}

      </div>
    </div>
  )
}

export default AlbumCard