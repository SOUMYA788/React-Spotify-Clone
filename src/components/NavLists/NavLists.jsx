import { Box, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import './NavLists.css'
const NavLists = ({ listId, title, Icon, bottomMargin }) => {

    const navListsTitleStyle = {
        fontSize: Icon ? '1.5em' : '1em',
        color: "#A4A6A6",
        transition: '0.2s ease',
    }

    return (
        <Box className="listItemMainBox" sx={{
            width: "63%",
            margin: "0 auto",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginBottom: bottomMargin && '10px',
            cursor: 'pointer'
        }}>
            {Icon && <Icon className="listItemIcon" />}
            {Icon ? <Typography variant='h2' component='h2' sx={navListsTitleStyle} className="listItemTitle">{title}</Typography> : <Link to={`/playlist/${listId}` || "#"} className='navLinks'><Typography variant='p' component='p' sx={navListsTitleStyle} className="listItemTitle">{title}</Typography></Link>}
        </Box>
    )
}

export { NavLists }