import React from 'react'
import { Link } from 'react-router-dom'
import { useCurrentState } from '../../../Service/Context';
import { playMusic, playTrack } from '../../../Service/Spotify/mediaPlayerController';
import { showErrorToast } from '../../../utils/toastMethods';


const TrackCard = ({ callFrom, tracksDetails, albumImg }) => {
    const [{ auth }, _] = useCurrentState();
    const { token, user } = auth
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


    // const getAlbumURI = () => {
    //     tracksDetails?.album?.images.reduce((val_1, val_2) => {
    //         if(val_1?.url?.width)
    //     })
    // }

    // console.log("tracksDetails from trackcard -> ", albumImg)

    return (
        <div className='w-full 300px:w-[174px] mx-auto 400px:mx-0 p-4 flex flex-col items-center justify-center rounded-sm transition-all ring-2 ring-slate-500 bg-slate-800 bg-opacity-50 backdrop-blur-sm cursor-pointer hover:scale-105' onClick={() => {
            if(user?.product !== "free"){
                playTrack(token, [tracksDetails?.id.toString()])
            }else{
                showErrorToast("Spotify Premium Require to play any track");
            }
        }}>


            <p className='w-full text-sm text-start mb-1 tracking-wide text-white'> {formatMs(tracksDetails?.duration_ms)} </p>


            <div className='w-full p-0.5 mb-1'>
                <img src={tracksDetails?.album?.images[0]?.url || albumImg} className='w-full h-full object-contain ring-2 ring-slate-500 rounded-sm p-0.5' />
            </div>


            <div className='w-full flex flex-col justify-center overflow-hidden'>

                <p className={`w-fit text-white font-medium text-sm 600px:text-base whitespace-nowrap ${tracksDetails?.name.length > 16 ? "animate-scroll" : "animate-none"} ${tracksDetails?.name.length > 21 ? "300px:animate-scroll" : "300px:animate-none"} 600px:animate-none`}> {tracksDetails?.name} </p>

                {
                    callFrom !== 'artist' && <div className={`w-fit h-full mt-1 flex items-center gap-1 whitespace-nowrap ${tracksDetails?.artists.length > 16 ? "animate-scroll" : "animate-none"} ${tracksDetails?.artists.length >= 3 ? "300px:animate-scroll" : "300px:animate-none"}`}>
                        {
                            tracksDetails?.artists.map(({ id, name }, indx) => {
                                return (
                                    <p className='' key={`${name}_${indx}`}>
                                        <Link className="text-sm 600px:text-base text-slate-200 no-underline transition-all hover:text-white focus:text-white px-1 outline-none border border-transparent hover:border-slate-200 focus:border-slate-200" to={`/artist/${id}`}>
                                            {name}
                                            {indx < (tracksDetails?.artists.length - 1) && <span>,&nbsp;</span>}
                                        </Link>
                                    </p>
                                )
                            })
                        }
                    </div>
                }
            </div>
        </div>
    )
}

export default TrackCard 