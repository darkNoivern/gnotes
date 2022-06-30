import React from 'react'
import SingleNote from "./SingleNote";
import "./style.css"

const Notes = (props) => {
    return (
        <>
            <div className="row card-row mt-4 ps-0 pe-0 ms-0 me-0">
                {
                    props.arr.map((note, index) => {
                        return (
                            <div key={index} className="col card-col col-lg-4 col-12 mb-3">
                                <div className="flexy">
                                    <SingleNote del={props.del} index={index} info={note} />
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Notes
