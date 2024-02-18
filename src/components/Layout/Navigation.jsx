import React from 'react'
import { useCurrentState } from '../../Service/Context';
import { NavLists, SearchBar } from '.';
import { Link } from 'react-router-dom';




const Navigation = () => {
	const [{ playlists }, _] = useCurrentState();

	return (
		<div className='w-full 600px:w-48 600px:h-full bg-slate-700 backdrop-blur-sm py-2 px-1 flex 600px:flex-col items-center 600px:items-start justify-between 600px:justify-start gap-2' >

			<Link to={'/'} className='flex items-center justify-center no-underline gap-[6%] mr-1 p-0.5 rounded-full 600px:w-full 600px:mr-0 outline-none ring-2 ring-transparent focus:ring-slate-300 hover:ring-slate-300'>

				<img src="/icon.svg" className='w-8 h-8 600px:mr-3' alt="logo" />

				<h2 className='text-white text-2xl text-center hidden 600px:inline-block' >
					Spotify
				</h2>

			</Link>


			<SearchBar />

			<div className='w-full mt-2 hidden 600px:block'>
				{
					(playlists?.length > 0) && <>
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