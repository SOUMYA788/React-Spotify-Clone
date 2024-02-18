import React from 'react'
// import { TrackCard } from '.'
import { TrackCard } from './'


const TrackLists = ({ callFrom, tracksArr, albumImg }) => {
    if (!tracksArr) return "Loading..."
    return (
        <div className='w-full flex flex-col items-center gap-1' >
            {
                tracksArr.map((tracksDetails, indx) => {
                    return (<TrackCard callFrom={callFrom} tracksDetails={tracksDetails} albumImg={albumImg} key={`track_${indx}`} />)
                })
            }
        </div >
    )
}

export default TrackLists