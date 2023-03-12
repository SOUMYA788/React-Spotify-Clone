import { Box, Typography } from '@mui/material'
import React from 'react'

const Alert = ({ mode, message }) => {
    const backgroundColor = (mode) => {
        if (mode === 'warn') {
            return '#F2C12E' // yellow
        } else if (mode === 'danger') {
            return '#E8494F' // red
        } else {
            return 'rgba(0,0,0,0.8)'
        }
    }

    const borderColor = (mode) => {
        if (mode === 'warn') {
            return '2px solid yellow' // yellow
        } else if (mode === 'danger') {
            return '2px solid red' // red
        } else {
            return '2px solid black'
        }
    }

    return (
        <Box sx={{
            width: "80%",
            height: "100%",
            padding: "10px 5px",
            margin: "0 10%",
            background: backgroundColor(mode),
            border: borderColor(mode),
            borderRadius: '5px',
            display: "flex",
            alignItems: "center",
        }}>
            <Typography component='h2' variant='h2' sx={{
                fontSize: "1.5em", color: mode ? "black" : 'white'
            }}>
                {message}
            </Typography>
        </Box>
    )
}

export { Alert }