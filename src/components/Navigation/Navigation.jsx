import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { useCurrentState } from '../../Service/Context';
import { NavLists } from '../NavLists/NavLists';
import { SearchBar } from '..';
import { Link } from 'react-router-dom';

import './Navigation.css'

const Navigation = () => {
	const [{ playlists }, dispatch] = useCurrentState();

	return (
		<Box component="div" sx={{
			width: {
				xs: "100%",
				sm: "200px"
			},
			height: {
				xs: "50px",
				sm: "100%"
			},
			background: "rgba(0,0,0,0.7)",
			backdropFilter: 'blur(5px)',
			padding: "10px 5px",
			display: "flex",
			flexDirection: {
				xs: "row",
				sm: "column"
			},
			alignItems: {
				xs: "center",
				sm: "flex-start"
			},
			justifyContent: 'flex-start',
			gap:"10px"
		}}>

			<Link to={'/'} id='navigation_homeLink'>
				<img src="/icon.svg" style={{ width: "30px", height: "30px", marginRight: { xs: "0", sm: "15px" } }} alt="logo" />

				<Typography variant='h2' component="h2" sx={{
					color: "white",
					fontSize: "2em",
					textAlign: "center",
					display: {
						xs: "none",
						sm: "inline-block"
					}
				}}>
					Spotify
				</Typography>

			</Link>

			<Box sx={{
				width: {
					xs: "calc(100% - 40px)",
					sm: "100%"
				},
				margin: {
					xs: "0 auto",
					sm: "10px auto 0"
				},
				height: "35px"
			}}>
				<SearchBar />
			</Box>

			<Box sx={{
				width:"100%",
				marginTop: "10px",
				display: {
					xs: 'none',
					sm: "block"
				}
			}}>
				{
					(playlists.length > 0) && <Box>
						<Typography component='h2' variant='h2' sx={{ color: "white", fontSize: "1em", width: "80%", margin: "0 auto" }}>
							PLAYLISTS
						</Typography>

						<div className='hr_w80_h1_black40' />

						{playlists.map((playlistsData, indx) => (
							<NavLists listId={playlistsData?.id} title={playlistsData.name} bottomMargin={true} key={`playlist_${indx}`} />
						))}
					</Box>
				}
			</Box>
			
		</Box>
	)
}

export { Navigation }