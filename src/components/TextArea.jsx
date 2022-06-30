import React, { useState } from 'react'

const TextArea = (props) => {
    const [text, setText] = useState('');

    const getText = (event) => {
        setText(event.target.value);
    }

    const saveText = (text) => {
        let time = new Date().toLocaleTimeString();
        let date = new Date().toLocaleDateString();
        props.add(text,time,date);
        setText('');
    }

    return (
        <>
            <div className="form-floating">
                <textarea className="form-control" value={text} onChange={getText} placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                <label htmlFor="floatingTextarea">Type Notes ....</label>
            </div>
            <div className="d-flex justify-content-end mt-2">
                {
                    (text==="") ? 
                    <button className="btn btn-outline-danger save-btn" disabled onClick={() => { saveText(text) }}>Save</button>
                    :
                    <button className="btn btn-success save-btn" onClick={() => { saveText(text) }}>Save</button>
                }
            </div>
        </>
    )
}

export default TextArea
