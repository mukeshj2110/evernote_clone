import React from 'react';
import './sidebaritems.css';
import {removeHTMLTags} from '../helpers';

function Sidebaritems({note,index,id,selectnote,deletenote,selectedNoteIndex}){
    return(
        <div className="sidebar_items">
            <div className="note_item" key={index} onClick={()=>selectnote(note,index)}>
                <h3>{note.title}</h3>
                {
                    note.body ? <p>{removeHTMLTags(note.body.substring(0, 30) + '......')}</p>: null
                }
            </div>
            <p onClick={()=>deletenote(note)}><i class="fas fa-trash"></i></p>
        </div>
    )
}

export default Sidebaritems;