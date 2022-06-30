import React from 'react'
import ColorLensIcon from '@mui/icons-material/ColorLens';
import { IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import "./style.css"

const PalleteButton = styled(IconButton)({
    border: '1px solid gray',
    backgroundColor: 'white',
    color: '#000000',
    height: '3rem',
    width: '3rem',
});

const Palette = (props) => {

    const shiftColor = (color) => {
        props.getColor(color);
    }

    return (
        <>
            <PalleteButton onClick={() => { props.toggleHide(!props.hide) }} className="mb-2 color-options-holder">
                <ColorLensIcon fontSize="large" />
            </PalleteButton>

            {
                (props.hide === false)
                    ?
                    <ul>
                        <li onClick={()=>{shiftColor('yellow')}} className="color yellow ms-2 mt-2"></li>
                        <li onClick={()=>{shiftColor('blue')}} className="color blue ms-2 mt-2"></li>
                        <li onClick={()=>{shiftColor('red')}} className="color red ms-2 mt-2"></li>
                        <li onClick={()=>{shiftColor('pink')}} className="color pink ms-2 mt-2"></li>
                        <li onClick={()=>{shiftColor('violet')}} className="color violet ms-2 mt-2"></li>
                    </ul>
                    :
                    <span></span>
            }
        </>
    )
}

export default Palette
