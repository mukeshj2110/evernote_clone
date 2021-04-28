import React from 'react';
import './editor.css'
import {useState ,useEffect} from 'react'
import ReactQuill from 'react-quill'
import debounce from '../helpers'
import { Update } from '@material-ui/icons';

function Editor(){

    const [text ,setText]=useState('')
    const updateBody = async (e) =>{
        await setText(e);
        update(e)
    }
    const update =debounce(() =>{
        console.log("Updating in Database")
    },1500)
    return(
        <div className="editor_container">
           <ReactQuill value={text} onChange={updateBody}></ReactQuill> 
        </div>
    )
}

export default Editor;

