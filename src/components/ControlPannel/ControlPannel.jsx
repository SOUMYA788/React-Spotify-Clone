import React, { useState } from 'react'
import { Box, Typography } from '@mui/material'
import { FavoriteBorderRounded, PlayArrow,  PlayCircleFilledRounded, PauseCircleFilledRounded, ShuffleOutlined, SkipPreviousRounded, SkipNextRounded, RepeatRounded } from '@mui/icons-material/';
import { useCurrentState } from '../../Service/Context';
import { formatMs, playMusic, changeMusic } from '../../Service/Spotify/API';
import "./ControlPannel.css"
import { Alert } from '../Alert/Alert';

const ControlPannel = ({ currentMusic }) => {

    const [playingMusicData, setPlayingMusicData] = useState(null)
    const [{ token, user }, dispatch] = useCurrentState()

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

    // initial plan, first pause music, if it's playing song in server, then seek to 0

    const setArtistsToPannel = (artistsLists) => {
        let artistsName = [];
        artistsLists.map((artist) => {
            artistsName.push(artist.name)
        })
        return (artistsName.toString());
    }

    const flexRowStyle = {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    }

    const controlPannelMainBox = {
        width: "100%",
        height: "100%",
        ...flexRowStyle,
        gap: "1%"
    }

    if (user?.product && user?.product === 'free') {
        return (
            <Alert message='This function require premium account of spotify' />
        )
    }

    return (
        <Box sx={controlPannelMainBox}>

            <Box sx={{
                width: "25%",
                height: "100%",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                gap: "1%"
            }}>
                <Box component='img' src={currentMusic?.item?.album?.images[0]?.url || 'https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Black.png'} sx={{
                    width: "30%",
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
                            fontSize: "1em", transform: 'translateX(100%)', animation: "text_scroll_animation 15s linear infinite", width: "max-content"
                        }}
                    >
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
                display: {
                    xs: "none",
                    sm: "flex"
                },
                flexDirection: "column",
                justifyContent: "space-between",
                gap: "2%",
            }}>

                <Box sx={{
                    width: "80%",
                    margin: "0 auto",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between"
                }}>
                    <ShuffleOutlined sx={{
                        width: "1em",
                        height: '1em',
                        fontSize: "1.5em",
                        cursor: 'pointer'
                    }} />

                    <SkipPreviousRounded sx={{
                        width: "1em",
                        height: '1em',
                        fontSize: "2.5em",
                        cursor: 'pointer'
                    }} onClick={() => { changeMusicTo('previous') }} />

                    {
                        currentMusic?.is_playing ? <PauseCircleFilledRounded sx={{
                            width: "1em",
                            height: '1em',
                            fontSize: "3em",
                            cursor: 'pointer'
                        }} onClick={() => { setMusicState('pause') }} /> : <PlayCircleFilledRounded sx={{
                            width: "1em",
                            height: '1em',
                            fontSize: "3em",
                            cursor: 'pointer'
                        }} onClick={() => { setMusicState('play') }} />
                    }

                    <SkipNextRounded sx={{
                        width: "1em",
                        height: '1em',
                        fontSize: "2.5em",
                        cursor: 'pointer'
                    }} onClick={() => { changeMusicTo('next') }} />

                    <RepeatRounded sx={{
                        width: "1em",
                        height: '1em',
                        fontSize: "1em",
                        cursor: 'pointer'
                    }} />

                </Box>

                <Box sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: 'center',
                    justifyContent: "space-between"
                }}>
                    <Typography component='p' variant='p' sx={{ fontSize: "1em" }}>0</Typography>
                    <input className='musicProgressBar' type='range' min={0} max={currentMusic && currentMusic?.duration_ms} value={0} onChange={() => { }} />
                    <Typography component='p' variant='p' sx={{ fontSize: "1em" }}>
                        {
                            formatMs(currentMusic?.item?.duration_ms) || "0"
                        }
                    </Typography>
                </Box>

            </Box>

            <Box sx={{
                width: "25%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: 'center',
                justifyContent: 'center',
                gap: "2%"
            }}>

            </Box>

        </Box>
    )
}

export { ControlPannel }