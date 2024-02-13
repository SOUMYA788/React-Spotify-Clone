import React, { useEffect, useState } from 'react'

import { useCurrentState } from '../../Service/Context';
import { formatMs, playMusic, changeMusic, setRepeatMode, setShuffleMode, setVolume } from '../../Service/Spotify/API';


import { showErrorToast } from '../../utils/toastMethods';

import { MdOutlineFavorite, MdPauseCircleFilled, MdPlayArrow, MdPlayCircleFilled, MdRepeat, MdShuffle, MdSkipNext, MdSkipPrevious, MdVolumeDown } from "react-icons/md"


const ControlPannel = ({ currentMusic }) => {
    const [playingMusicData, setPlayingMusicData] = useState(null);
    const [repeatCount, setRepeatCount] = useState(0);
    const [repeatOptions, setRepeatOptions] = useState(["track", "context", "off"])
    const [shuffleState, setShuffleState] = useState(false)
    const [volumeValue, setVolumeValue] = useState(100)
    const [{ token, user }, dispatch] = useCurrentState();

    useEffect(() => {
        if (user?.product === "free") {
            showErrorToast("Spotify premium require")
        }
    }, [user?.product])


    useEffect(() => {
        let repeatMode = repeatOptions[repeatCount];
        setRepeatMode(token, repeatMode);
    }, [repeatCount])

    useEffect(() => {
        setShuffleMode(token, shuffleState);
    }, [shuffleState])

    useEffect(() => {
        setVolume(token, volumeValue)
    }, [volumeValue])



    const setMusicState = (musicStatus) => {
        playMusic(token, musicStatus).then((data) => {
            setPlayingMusicData(data);
        }).catch((err) => {
            console.log('playPause error -> ', err);
        })
    }

    const changeMusicTo = (changeState) => {
        changeMusic(token, changeState).then((data) => {
            setPlayingMusicData(data);
        }).catch((err) => {
            console.log('change music error -> ', err?.response?.data?.error?.reason);
        })
    }

    const setArtistsToPannel = (artistsLists) => {
        let artistsName = [];
        artistsLists.map((artist) => {
            artistsName.push(artist.name)
        })
        return (artistsName.toString());
    }

    const setRepeat = () => {
        if (repeatCount === (repeatOptions.length - 1)) {
            setRepeatCount(0)
        } else if (repeatCount < (repeatOptions.length - 1)) {
            setRepeatCount(repeatCount + 1)
        }
    }

    const setShuffle = () => {
        setShuffleState(!shuffleState)
    }

    

    return (
        <div className='w-full h-full flex items-center relative gap-1'>

            <div className='w-2/3 600px:w-[30%] h-full flex items-center justify-center gap-1'>

                <img src={currentMusic?.item?.album?.images[0]?.url || 'https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Black.png'} className='w-16 h-full object-contain bg-gray-800' />

                <div className='h-full flex-1 w-[15%] overflow-hidden flex flex-col items-center justify-center gap-2'>

                    <h2 className='w-fit text-base translate-x-full animate-[text_scroll_animation 15s linear infinite]'> {currentMusic && currentMusic?.item?.name} </h2>

                    <p className='text-base translate-x-full animate-[text_scroll_animation 15s linear infinite] w-fit' > {currentMusic && setArtistsToPannel(currentMusic?.item?.artists)} </p>

                </div>

                {
                    currentMusic && <div className='h-full flex gap-2 items-center justify-evenly'>
                        <MdOutlineFavorite className='text-xl w-6 h-6' />
                        <MdPlayArrow className='text-xl w-6 h-6 inline-block 600px:hidden' />
                    </div>
                }

            </div >



            {/* controls - shuffle, play|pause, skip_next, repeat */}

            <div className='w-[40%] h-full hidden 600px:flex items-center justify-center gap-[5%]' >

                <MdShuffle className='h-6 w-6 text-2xl cursor-pointer' onClick={setShuffle} />

                <MdSkipPrevious className='h-6 w-6 text-2xl cursor-pointer' onClick={() => { changeMusicTo('previous') }} />

                {
                    currentMusic?.is_playing ? (
                        <MdPauseCircleFilled className='h-6 w-6 text-2xl cursor-pointer' onClick={() => { setMusicState('pause') }} />
                    ) : (
                        <MdPlayCircleFilled className='h-6 w-6 text-2xl cursor-pointer' onClick={() => { setMusicState('play') }} />
                    )
                }

                <MdSkipNext className='h-6 w-6 text-2xl cursor-pointer' onClick={() => { changeMusicTo('next') }} />

                <MdRepeat className='h-6 w-6 text-2xl cursor-pointer' onClick={setRepeat} />
            </div>

            <div className='w-[30%] h-full flex flex-row items-center justify-center gap-[2%]' >

                <MdVolumeDown />
                
                {/* apperance none can change buttons etc... */}
                <input type="range" defaultValue={20} valueLabelDisplay="auto" min={0} max={100} step={10} marks className='w-[70%] text-red-400 h-2 '/>
                
            </div>

        </div>
    )
}

export default ControlPannel
