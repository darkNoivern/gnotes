import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import Palette from './Palette';
import TextArea from './TextArea';
import Notes from './Notes';
import "./style.css"

const Index = () => {

    const [hide, setHide] = useState(true);
    const [arr, setArr] = useState([]);
    const [color, setColor] = useState('yellow');
    const [i,setI] = useState(1);
    const colorArr = ['yellow','blue','red','pink','violet'];

    const toggleHide = (set) => {
        setHide(set);
    }

    const getColor = (getcolor) => {
        setI(0);
        setColor(colorArr[i]);
        setColor(getcolor);
    }

    const add = (text,time,date) => {
        let obj = {
            text: text,
            color: color,
            time: time,
            date: date,
        }
        let newArr = [...arr, obj];
        console.log(newArr);
        setArr(newArr);
        let x = (i+1)%5;
        setI(x);
        setColor(colorArr[i]);
        setHide(true);
        localStorage.setItem('notes',JSON.stringify(newArr));
    }

    const del = (id) => {
        console.log(id)
        let newArr = arr.filter((item, index) => {
            return (index !== id);
        })
        setArr(newArr);
        localStorage.setItem('notes',JSON.stringify(newArr));
    }

    useEffect(()=>{
        let data = localStorage.getItem('notes');
        ((data===null) || (data.length===0)) ? setArr([]) : 
        setArr(JSON.parse(data));
    },[]);

    return (
        <div>
            <Navbar />
            <div className="me-lg-5 ms-lg-5 me-3 ms-3">
                <div className="row mt-5">
                    
                    <div className="col col-2 d-flex justify-content-center">
                        <div>
                            <Palette getColor={getColor} toggleHide={toggleHide} hide={hide} />
                        </div>
                    </div>

                    <div className="col col-10 ps-1 pe-1">
                        <TextArea add={add} />
                    </div>

                    <Notes del={del} arr={arr} />

                </div>
            </div>
        </div>
    )
}

export default Index
