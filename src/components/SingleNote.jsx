import React from 'react'
import "./style.css"
import { IconButton } from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Tilt from 'react-vanilla-tilt'


const SingleNote = (props) => {

    const deleteID = (id) => {
        props.del(id);
    }

    return (
        <>
            <Tilt className={`card ${props.info.color} p-0`}>
                <div className="card-body">
                    {props.info.text}
                </div>
                <div className="d-flex justify-content-between">
                    <div className="d-flex align-items-center">
                        <span className="ms-2 me-3">
                            {props.info.time}
                        </span>
                        <span>
                            {props.info.date}
                        </span>
                    </div>
                    <IconButton onClick={() => { deleteID(props.index) }}>
                        <DeleteForeverIcon />
                    </IconButton>
                </div>
            </Tilt>
        </>
    )
}

export default SingleNote
