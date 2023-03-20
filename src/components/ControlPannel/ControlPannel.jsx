import React, { useEffect, useState } from 'react'
import { Box, Slider, Typography, Alert } from '@mui/material'
import { FavoriteBorderRounded, PlayArrow, PlayCircleFilledRounded, PauseCircleFilledRounded, ShuffleOutlined, SkipPreviousRounded, SkipNextRounded, RepeatRounded, VolumeDown } from '@mui/icons-material/';
import { useCurrentState } from '../../Service/Context';
import { formatMs, playMusic, changeMusic, setRepeatMode, setShuffleMode, setVolume } from '../../Service/Spotify/API';
import "./ControlPannel.css"

const ControlPannel = ({ currentMusic }) => {
    const [playingMusicData, setPlayingMusicData] = useState(null);
    const [repeatCount, setRepeatCount] = useState(0);
    const [repeatOptions, setRepeatOptions] = useState(["track", "context", "off"])
    const [shuffleState, setShuffleState] = useState(false)
    const [volumeValue, setVolumeValue] = useState(100)
    const [{ token, user }, dispatch] = useCurrentState();

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

    const flexRowStyle = {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    }

    const controlPannelMainBox = {
        position: "relative",
        width: "100%",
        height: "100%",
        ...flexRowStyle,
        gap: "1%"
    }

    return (
        <Box sx={controlPannelMainBox}>

            {
                (user?.product && user?.product === 'free') && <Alert severity="error" sx={{
                    position: "absolute",
                    width: "90%",
                    height: "90%",
                    margin: "0 5%",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    zIndex: 1
                }}> Spotify Premium Require! </Alert>
            }

            <Box sx={{
                width: {
                    xs: "70%",
                    sm: "30%"
                },
                height: "100%",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                gap: "1%"
            }}>
                <Box component='img' src={currentMusic?.item?.album?.images[0]?.url || 'https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Black.png'} sx={{
                    width: "70px",
                    height: "100%",
                    objectFit: 'contain',
                    backgroundColor: "grey"
                }} />

                <Box sx={{
                    height: "100%",
                    flex: "1",
                    width: "15%",
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "10%"
                }}>
                    <Typography
                        component='h2'
                        variant='h2'
                        sx={{
                            fontSize: "1em",
                            transform: 'translateX(100%)',
                            animation: "text_scroll_animation 15s linear infinite",
                            width: "max-content"
                        }}>
                        {currentMusic && currentMusic?.item?.name}
                    </Typography>

                    <Typography component='p' variant='p' sx={{ fontSize: "1em", transform: 'translateX(100%)', animation: "text_scroll_animation 15s linear infinite", width: "max-content" }}>
                        {currentMusic && setArtistsToPannel(currentMusic?.item?.artists)}
                    </Typography>
                </Box>

                {
                    currentMusic && <Box sx={{
                        height: "100%",
                        display: "flex",
                        gap: "5%",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-evenly"
                    }}>
                        <FavoriteBorderRounded sx={{
                            width: "1em",
                            height: "1em",
                            fontSize: {
                                xs: "2.5",
                                sm: "1.5em"
                            }
                        }} />

                        <PlayArrow sx={{
                            width: "1em",
                            height: "1em",
                            fontSize: "2.5em",
                            display: {
                                xs: "inline-block",
                                sm: "none"
                            }
                        }} />
                    </Box>
                }

            </Box >

            <Box sx={{
                width: "40%",
                height: "100%",
                display: { xs: "none", sm: "flex" },
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "row",
                gap: "5%",
            }}>
                <ShuffleOutlined sx={{
                    width: "1em",
                    height: '1em',
                    fontSize: "2em",
                    cursor: 'pointer'
                }} onClick={setShuffle} />

                <SkipPreviousRounded sx={{
                    width: "1em",
                    height: '1em',
                    fontSize: "3em",
                    cursor: 'pointer'
                }} onClick={() => { changeMusicTo('previous') }} />

                {
                    currentMusic?.is_playing ? <PauseCircleFilledRounded sx={{
                        width: "1em",
                        height: '1em',
                        fontSize: "4em",
                        cursor: 'pointer'
                    }} onClick={() => { setMusicState('pause') }} /> : <PlayCircleFilledRounded sx={{
                        width: "1em",
                        height: '1em',
                        fontSize: "4em",
                        cursor: 'pointer'
                    }} onClick={() => { setMusicState('play') }} />
                }

                <SkipNextRounded sx={{
                    width: "1em",
                    height: '1em',
                    fontSize: "3em",
                    cursor: 'pointer'
                }} onClick={() => { changeMusicTo('next') }} />

                <RepeatRounded className='repeatButton' sx={{
                    width: "1em",
                    height: '1em',
                    fontSize: "2em",
                    cursor: 'pointer'
                }} onClick={setRepeat} />
            </Box>

            <Box sx={{
                width: "30%",
                height: "100%",
                display: "flex",
                flexDirection: "row",
                alignItems: 'center',
                justifyContent: 'center',
                gap: "2%"
            }}>

                <VolumeDown />

                <Slider
                    aria-label="Temperature"
                    defaultValue={20}
                    valueLabelDisplay="auto"
                    min={0}
                    max={100}
                    step={10}
                    marks
                    sx={{
                        width: "70%",
                        color: "rgba(0,0,0,0.5)",
                        height: 2,
                        '.MuiSlider-thumb': {
                            width: 10,
                            height: 10,
                            backgroundColor: "black"
                        }
                    }}
                    value={volumeValue}
                    onChange={(e) => {
                        setVolumeValue(e.target.value)
                    }}
                />

            </Box>

        </Box>
    )
}

export { ControlPannel }