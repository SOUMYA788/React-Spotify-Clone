import { Typography } from '@mui/material'
import { Home, Search, LibraryMusic } from '@mui/icons-material/';
import { Box } from '@mui/system'
import React from 'react'
import { useCurrentState } from '../Service/Context';
import { NavLists } from './NavLists/NavLists';
import { SearchBar } from './';

const Navigation = () => {
	const [{ playlists }, dispatch] = useCurrentState();

	const navListArr = [
		{
			title: 'Home',
			Icon: Home
		},
		{
			title: 'Library',
			Icon: LibraryMusic
		}
	]

	const navListsMainBoxStyle = {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
		gap: "20px"
	}

	return (
		<Box component="div" sx={{
			width: "200px",
			height: "100%",
			background: "rgba(0,0,0,0.7)",
			backdropFilter: 'blur(5px)',
			padding: "10px 5px",
		}}>

			<Box component="div" sx={{
				display: "flex",
				flexDirection: "row",
				alignItems: "center",
				justifyContent: "center"
			}}>
				<img src="/icon.svg" style={{ width: "30px", height: "30px", marginRight: "15px" }} />

				<Typography variant='h2' component="h2" sx={{
					color: "white",
					fontSize: "2em",
					textAlign: "center"
				}}>
					Spotify
				</Typography>

			</Box>

			<Box sx={{
				width: "100%",
				margin: "15px auto 0",
				height: "35px"
			}}>
				<SearchBar />
			</Box>

			<Box sx={{ marginTop: "20px" }}>
				{
					(playlists.length > 0) && <Box sx={{
						marginTop: '30px',
					}}>
						<Typography component='h2' variant='h2' sx={{ color: "white", fontSize: "1em", width: "80%", margin: "0 auto" }}>
							PLAYLISTS
						</Typography>

						<div className='hr_w80_h1_black40' />

						{playlists.map((playlistsData, indx) => (
							<NavLists title={playlistsData.name} bottomMargin={true} key={`playlist_${indx}`} />
						))}
					</Box>
				}
			</Box>
		</Box>
	)
}

export { Navigation }