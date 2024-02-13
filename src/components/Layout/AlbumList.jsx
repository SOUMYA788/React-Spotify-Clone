import React, { useEffect, useState } from 'react'
import { AlbumCard } from './'


const AlbumList = ({ albumListData, callFrom }) => {
    const [uniqueAlbums, setUniqueAlbums] = useState([])
    useEffect(() => {
        let names = []
        let uniqueAlbumsData = callFrom === "searchPage" ? albumListData : albumListData.filter((element, indx) => {
            let name = element?.track?.album?.name;
            if (!names.includes(name)) {
                // if name not available then return element, and save the returned name in list, so next time it will include in count...
                names.push(name)
                return element
            }
        });

        setUniqueAlbums(uniqueAlbumsData)
    }, [albumListData])

    

    return (
        <>
            <h2 className='h-9 text-2xl px-[1%] bg-slate-200 backdrop-blur-sm my-1 mx-[2%]'>
                ALBUMS
            </h2>

            <div className='w-full flex gap-[2%] p-[5%] 600px:py-1 600px:px-[2%] flex-wrap' >
                {
                    uniqueAlbums.length > 0 && uniqueAlbums.map((cardDataElement, indx) => {
                        let albumCardData = {
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
        </>
    )
}

export default AlbumList