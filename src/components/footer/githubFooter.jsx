import './styles.css'

import { useState} from 'react'

import Popover from '@mui/material/Popover'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

import github from './images/githubBranco.png'
import githubPopover from './images/githubPopover.png'

export function GitHubFooter() {
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
                className='containerGitHub'
                style={{
                    borderRadius: 35,
                    padding: 0,
                    minWidth: 40
                }}>
                <img src={github} className='imageGitHub' />
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
                <Typography >
                    <a href="https://github.com/ggjean" target='_blank'>
                        <img src={githubPopover} className='githubPopover' />
                    </a>
                </Typography>
            </Popover>
        </div>
    )
}
