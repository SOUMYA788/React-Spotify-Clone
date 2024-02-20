import React, { useEffect, useState } from 'react'

import { useCurrentState } from '../../Service/Context';

import { formatMs } from '../../Service/Spotify/API';

import { playMusic, changeMusic, setRepeatMode, setShuffleMode, setVolume } from '../../Service/Spotify/mediaPlayerController';


import { showErrorToast } from '../../utils/toastMethods';

import { MdOutlineFavorite, MdPauseCircleFilled, MdPlayArrow, MdPlayCircleFilled, MdRepeat, MdShuffle, MdSkipNext, MdSkipPrevious, MdVolumeDown } from "react-icons/md"





const ControlPannel = () => {

    const [currentTrack, setCurrentTrack] = useState(null);
    const [trackLists, setTrackLists] = useState([]);
    const [repeatCount, setRepeatCount] = useState(0);
    const [shuffleState, setShuffleState] = useState(false)
    const [volumeValue, setVolumeValue] = useState(0)

    const [{ auth: stateAuth, player: statePlayer }, dispatch] = useCurrentState();

    const { token, user } = stateAuth;
    const { currentlyPlaying, recentAlbums } = statePlayer

    const repeatOptions = ["track", "context", "off"]

    const primiumRequireMessage = "This Action Require Spotify Premium";



    useEffect(() => {
        if (user?.product === "free") {
            showErrorToast("operations related streaming required spotify premium account.")
        }
    }, [user?.product])



    useEffect(() => {
        setCurrentTrack(currentlyPlaying)
    }, [currentlyPlaying?.item?.name])



    useEffect(() => {

        if (user?.product === "free") return showErrorToast(primiumRequireMessage)

        const repeatMode = repeatOptions[repeatCount];
        setRepeatMode(token, repeatMode);

    }, [repeatCount])



    useEffect(() => {
        if (user?.product === "free") return showErrorToast(primiumRequireMessage);
        setShuffleMode(token, shuffleState);
    }, [shuffleState])



    useEffect(() => {
        if (user?.product === "free") return showErrorToast(primiumRequireMessage);
        setVolume(token, volumeValue)
    }, [volumeValue])


    // custom method to change repeat state.
    const setRepeat = () => setRepeatCount((count) => (count === (repeatOptions.length - 1)) ? 0 : (count + 1))


    // custom method to decide shuffle state
    const setShuffle = () => setShuffleState(value => !value)



    /**
     * spotify premium require in this action.
     * use to invoke playMusic function.
     * @param {string} musicStatus 'play' || 'pause' (required)
     * @param {JSON} reqBody media related more information (optional)
     */
    const setMusicState = (musicStatus, reqBody) => {
        // console.log(token)
        if (user?.product === "free") return showErrorToast(primiumRequireMessage)

        if (token) { playMusic(token, musicStatus, reqBody) }
    }


    /**
     * spotify premium require for this action
     * use to skip current audio to next or previous audio.
     * @param {string} changeState 'previous' || 'next'
     */
    const changeMusicTo = (changeState) => {

        if (user?.product === "free") return showErrorToast(primiumRequireMessage)

        if (token) { changeMusic(token, changeState).then(data => setCurrentTrack(data)) }
    }


    // use to make a comma seperated string of all artist
    const setArtistsToPannel = (artistsLists) => {
        let artistsName = [];
        if (artistsLists?.length > 0) {
            artistsLists.map((artist) => {
                artistsName.push(artist.name)
            })
        }
        return (artistsName.toString());
    }



    if (!currentlyPlaying) return null;


    return (
        <div className='w-full h-20 max-h-20 p-1 bg-white bg-opacity-50 z-[1] flex items-center relative gap-1'>

            <div className='flex-1 400px:w-2/3 600px:w-[30%] h-full flex items-center justify-center gap-1'>

                <img src={currentlyPlaying?.item?.album?.images[0]?.url || 'https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Black.png'} className='w-16 h-full object-contain bg-gray-800' />

                <div className='h-full flex-1 overflow-hidden flex flex-col justify-center gap-2'>

                    <h2 className={`w-fit text-base whitespace-nowrap ${currentlyPlaying?.item?.name?.length > 24 && "300px:animate-scroll"}`}> {currentlyPlaying?.item?.name || ""} </h2>

                    <p className={`text-base w-fit ${currentlyPlaying?.item?.artists?.length > 3 && "300px:animate-scroll"}`} > {currentlyPlaying?.item?.artists && setArtistsToPannel(currentlyPlaying.item.artists)} </p>

                </div>


                <div className='h-full flex gap-2 items-center justify-evenly'>
                    {/* <MdOutlineFavorite className='text-xl w-6 h-6' /> */}
                    {
                        currentlyPlaying?.is_playing ? (
                            <MdPauseCircleFilled className='h-6 w-6 400px:h-10 400px:w-10 600px:hidden text-2xl cursor-pointer' onClick={() => { setMusicState('pause') }} />
                        ) : (
                            <MdPlayCircleFilled className='h-6 w-6 400px:h-10 400px:w-10 600px:hidden text-2xl cursor-pointer' onClick={() => {
                                setMusicState('play', {
                                    "context_uri": currentlyPlaying?.context?.uri,
                                    "offset": { position: currentlyPlaying?.progress_ms },
                                    "position_ms": 0
                                })
                            }} />
                        )
                    }
                </div>


            </div >



            {/* controls - shuffle, play|pause, skip_next, repeat */}

            <div className='w-[40%] h-full hidden 600px:flex items-center justify-center gap-[5%]' >

                <MdShuffle className='h-6 w-6 text-2xl cursor-pointer' onClick={setShuffle} />

                <MdSkipPrevious className='h-6 w-6 text-2xl cursor-pointer' onClick={() => { changeMusicTo('previous') }} />

                {
                    currentlyPlaying?.is_playing ? (
                        <MdPauseCircleFilled className='h-10 w-10 text-2xl cursor-pointer' onClick={() => { setMusicState('pause') }} />
                    ) : (
                        <MdPlayCircleFilled className='h-10 w-10 text-2xl cursor-pointer' onClick={() => {
                            setMusicState('play', {
                                "context_uri": currentlyPlaying?.context?.uri,
                                "offset": { position: currentlyPlaying?.progress_ms },
                                "position_ms": 0
                            })
                        }} />
                    )
                }

                <MdSkipNext className='h-6 w-6 text-2xl cursor-pointer' onClick={() => changeMusicTo('next')} />

                <MdRepeat className='h-6 w-6 text-2xl cursor-pointer' onClick={setRepeat} />

            </div>

            <div className='w-[30%] h-full hidden 400px:flex flex-row items-center justify-center gap-[2%]' >

                <MdVolumeDown className='w-6 h-6'/>

                {/* apperance none can change buttons etc... */}
                <input type="range" defaultValue={0} value={volumeValue} min={0} max={100} step={5} marks="true" className='w-[70%] text-red-400 h-2' onChange={(e) => setVolumeValue(e.target.value)} />

            </div>

        </div>
    )
}

export default ControlPannel
