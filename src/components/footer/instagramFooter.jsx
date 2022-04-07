import './styles.css'

import { useState } from 'react'

import Popover from '@mui/material/Popover'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

import instagram from './images/instagramBranco.png'
import instagramPopover from './images/instagramPopover.png'

export function InstagramFooter() {
    const [anchorEl, setAnchorEl] = useState(null)

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)

    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    const open = Boolean(anchorEl)
    const id = open ? 'simple-popover' : undefined

    return (
        <div className='sub-footer' >
            <Button aria-describedby={id} variant="text" onClick={handleClick}
                style={{
                    borderRadius: 35,
                    padding: 0,
                    minWidth: 40
                }}>
                <img src={instagram} className='imageInstagram' />
            </Button>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
            >
                <Typography sx={{ p: 1 }}>
                    <a href="https://instagram.com/jean_vduarte" target='_blank'>
                        <img src={instagramPopover} className='instagramPopover' />
                    </a>
                </Typography>
            </Popover>
        </div>
    )
}
