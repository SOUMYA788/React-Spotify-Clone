import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react';
import { AppContext } from '../../../Service/Context';


const TrackCard = ({ callFrom, tracksDetails, albumImg }) => {
    const [{ setTrackId }, dispatch] = useContext(AppContext);
    if (!tracksDetails) return "Loading...";
    const formatMs = (ms) => {
        if (ms) {
            let sec = Math.floor(ms / 1000);
            let min = sec >= 60 ? Math.floor(sec / 60) : 0;
            let restSec = sec ? (sec % 60) : 0;
            let hour = min >= 60 ? Math.floor(min / 60) : 0;
            let restMin = min ? (min % 60) : 0;
            hour = hour < 10 ? `0${hour}` : hour;
            restMin = restMin < 10 ? `0${restMin}` : restMin
            restSec = restSec < 10 ? `0${restSec}` : restSec

            let duration = hour > 0 ? `${hour}:${restMin}:${restSec}` : `${restMin}:${restSec}`;
            return duration;
        }
    }
    console.log(tracksDetails)
    return (
        <div className='w-4/5 mx-auto py-2 px-[3%] flex items-center rounded-md justify-evenly transition-all bg-slate-200 backdrop-blur-sm cursor-pointer hover:bg-slate-400' onClick={() => { setTrackId(tracksDetails?.id) }}>

            <div className='w-11 p-0.5 mr-2'>
                <img src={tracksDetails?.album?.images[0]?.url || albumImg} className='w-full h-full object-contain' />
            </div>

            <div className='w-full flex flex-col justify-center overflow-hidden'>
                <p className={`w-full text-xs whitespace-nowrap ${tracksDetails?.name.length > 16 && "animate-[scroll_15s_linear_infinite]"}`}> {tracksDetails?.name} </p>

                {
                    callFrom !== 'artist' && <p className={`w-full h-full px-1 text-sm flex whitespace-nowrap bg-red-500 translate-x-full animate-[scroll_15s_linear_infinite] mt-1`}>
                        {
                            tracksDetails?.artists.map(({ id, name }, indx) => {
                                return (
                                    <Link className="trackList_artistLinks text-slate-800 no-underline text-base transition-all hover:text-black focus:text-black" to={`/artist/${id}`} key={`${name}_${indx}`}>
                                        {name}
                                        {indx < (tracksDetails?.artists.length - 1) && <span>,&nbsp;</span>}
                                    </Link>
                                )
                            })
                        }
                    </p>
                }

            </div>

            <div className='flex flex-col items-center justify-center' >
                <p className='text-xs'> {formatMs(tracksDetails?.duration_ms)} </p>
            </div>
        </div>
    )
}

export default TrackCard 