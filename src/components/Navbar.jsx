import React from 'react'
import "./style.css"
import DescriptionIcon from '@mui/icons-material/Description';
import { IconButton } from '@mui/material';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';

const Navbar = () => {
    return (
        <>
            <nav className="navbar bg-warning">
                <div className="container-fluid">
                    <div className="navbar-brand flexy">
                        <div>
                            <IconButton>
                                <DescriptionIcon />
                                {/* <TipsAndUpdatesIcon /> */}
                            </IconButton>
                        </div>
                        <div>
                            Google Notes
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
