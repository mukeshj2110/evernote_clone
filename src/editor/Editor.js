import React from 'react';
import './editor.css'
import {useState ,useEffect} from 'react'
import ReactQuill from 'react-quill'
import debounce from '../helpers'

function Editor({selectedNote,noteUpdated}){

    const [text ,setText]=useState('')
    const [title,setTitle] =useState('')
    const [id,setId]=useState('');

    useEffect(() => {
        
        setText(selectedNote.body);
        setTitle(selectedNote.title);
        setId(selectedNote.id)

    }, [selectedNote,setTitle,setText,setId])


    function updateBody(e){
        setText(e);
        update(e)
    }
    const update =debounce((e) =>{
        console.log("Updating in Database" + e);
        noteUpdated(selectedNote.id,text);
    },1500)
    return(
        <div className="editor_container">
            <h2>{title}</h2>
           <ReactQuill value={text} onChange={updateBody}></ReactQuill> 
        </div>
    )
}

export default Editor;

