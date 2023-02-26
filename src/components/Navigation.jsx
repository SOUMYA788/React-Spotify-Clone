import { List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material'
import { Home, Search, LibraryMusic } from '@mui/icons-material/';
import { Box } from '@mui/system'
import React from 'react'

const Navigation = () => {

	const listItemStyle = {
		width: "120px",
		cursor: "pointer"
	}

	const listItemIconStyle = {
		color: "white",
		marginRight: "20px",
		width: "25px",
		height: "25px"
	}

	return (
		<Box component="div" sx={{
			width: "200px",
			height: "100vh",
			background: "black",
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

			<Box sx={{marginTop:"20px"}}>
				<List className="list" sx={{display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", gap:"20px"}}>
					<ListItem disablePadding sx={listItemStyle}>
						<Home sx={listItemIconStyle} />
						<Typography sx={{ color: "white", fontSize: "1.2em" }}>Home</Typography>
					</ListItem>
					<ListItem disablePadding sx={listItemStyle}>
						<Search sx={listItemIconStyle} />
						<Typography sx={{ color: "white", fontSize: "1.2rem" }}>Search</Typography>
					</ListItem>
					<ListItem disablePadding sx={listItemStyle}>
						<LibraryMusic sx={listItemIconStyle} />
						<Typography sx={{ color: "white", fontSize: "1.2rem" }}>Library</Typography>
					</ListItem>
				</List>
			</Box>
		</Box>
	)
}

export {Navigation}