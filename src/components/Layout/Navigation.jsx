import React from 'react'
import { useCurrentState } from '../../Service/Context';
import { NavLists, SearchBar } from '.';
import { Link } from 'react-router-dom';




const Navigation = () => {
	const [{ playlists }, dispatch] = useCurrentState();

	return (
		<div className='w-full 600px:w-48 h-12 600px:h-full bg-slate-700 backdrop-blur-sm py-2 px-1 flex 600px:flex-col items-center 600px:items-start justify-start gap-2' >

			<Link to={'/'} className='w-9 flex items-center justify-center no-underline gap-[6%] mr-1 600px:w-full 600px:mr-0'>

				<img src="/icon.svg" className='w-7 h-7 600px:mr-3' alt="logo" />

				<h2 className='text-white text-2xl text-center hidden 600px:inline-block' >
					Spotify
				</h2>

			</Link>


			<div className='h-9 w-[calc(100% - 40px)] 600px:w-full mx-auto 600px:mt-2' >
				<SearchBar />
			</div>

			<div className='w-full mt-2 hidden 600px:block'>
				{
					(playlists.length > 0) && <>
						<h2 className='text-white text-base w-4/5 mx-auto' >
							PLAYLISTS
						</h2>

						<div className='h-0.5 w-full bg-slate-600 rounded-full my-0.5' />

						{playlists.map((playlistsData, indx) => (
							<NavLists listId={playlistsData?.id} title={playlistsData.name} bottomMargin={true} key={`playlist_${indx}`} />
						))}
					</>
				}
			</div>

		</div>
	)
}

export { Navigation }