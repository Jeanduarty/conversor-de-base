import './styles.css'

import { useState } from 'react'

import Popover from '@mui/material/Popover'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

import email from './images/emailBranco.png'

export function EmailFooter() {
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
                <img src={email} className='imageEmail' />
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
                <Typography fontFamily={'Nunito'} fontSize={16} sx={{ p: 2 }}>
                    jeanduarte322@outlook.com
                </Typography>
            </Popover>
        </div>
    )
}
