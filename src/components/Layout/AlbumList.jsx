import React, { useEffect, useState } from 'react'
import { AlbumCard } from './'


const AlbumList = ({ albumListData, callFrom }) => {
    const [uniqueAlbums, setUniqueAlbums] = useState([]);

    useEffect(() => {
        const names = []
        const uniqueAlbumsData = callFrom === "searchPage" ? albumListData : albumListData?.items?.filter(element => {
            const name = element?.track?.album?.name;

            // if name is unique, then store it for checking rest elements, and return for new array.

            if (!names.includes(name)) {
                names.push(name)
                return element
            }
        });
        setUniqueAlbums(uniqueAlbumsData)
    }, [albumListData])


    if (!uniqueAlbums.length > 0) return (callFrom !== "searchPage" && <h2 className='capitalize text-sm 600px:text-2xl px-2 py-1.5 600px:px-2 600px:py-4 bg-slate-200 bg-opacity-50 backdrop-blur-sm my-1'>Albums Not Found</h2>)


    return (
        <div className='w-full mt-5 px-2'>

            <h2 className='capitalize text-sm 600px:text-2xl px-2 py-1.5 600px:px-2 600px:py-4 bg-slate-200 bg-opacity-50 backdrop-blur-sm my-1'>
                Recently Played
            </h2>

            <div className='w-full flex flex-col 300px:flex-row flex-wrap gap-3 pt-1 px-3'>
                {
                    uniqueAlbums.length > 0 && uniqueAlbums.map((cardDataElement, indx) => {
                        const albumCardData = {
                            usedInList: true,
                            albumUri: cardDataElement?.track?.album?.id || cardDataElement?.id,
                            albumName: cardDataElement?.track?.album?.name || cardDataElement?.name,
                            albumArtists: cardDataElement?.track?.album?.artists || cardDataElement?.artists,
                            albumCoverArt: cardDataElement?.track?.album?.images[0]?.url || cardDataElement?.images[0]?.url
                        }
                        return (
                            <AlbumCard usedInList={true} albumCardData={albumCardData} key={`${cardDataElement}_${indx}`} />
                        )
                    })
                }
            </div>

        </div>
    )
}

export default AlbumList