import React from 'react';
import './sidebar.css'
import {useState} from 'react'
import { Divider, List } from '@material-ui/core';
import SidebarItems from '../sidebaritems/Sidebaritems'

function Sidebar({notes , selectedNoteIndex ,selectedNote}){

    const [addingNote, setAddingNote] =useState(false);
    const [title , setTitle]=useState('');

    function addNoteBtn(){
        setTitle('');
        setAddingNote(!addingNote);
    }
    function updateTitle(e){
        setTitle({title: e});
    }
    function newNoteSubmit(){
        console.log(`${title.title} added`);
    }

    function deleteNote(){
        console.log("dleted note");
    }
    if(notes){
        return(
            <div className="sidebar_container">
    
                <button className= "addNewNotebtn" onClick={addNoteBtn}>{addingNote?'Cancel':'Add Note'}</button>
                {
                    addingNote ?
                    <div>
                        <input type="text"
                        className="newNoteInput"
                        placeholder="Enter your title"
                        onKeyUp={(e)=>updateTitle(e.target.value)}>
                        </input>
                        <button 
                        className="newNoteSubmitBtn"
                        onClick={newNoteSubmit}>Submit</button>
                    </div> :
                    null 
                }
                <hr/>
              <List>
                  {
                      notes.map((note , index ,id)=>{
                          return(
                              <div key={index}>
                                  <SidebarItems 
                                  note={note} 
                                  id={id} 
                                  index ={index}
                                  selectedNoteIndex={selectedNoteIndex}
                                  selectedNote={()=>selectedNote(note,index)}
                                  deleteNote={deleteNote}>      
                                  </SidebarItems>
                                  <Divider></Divider>
                              </div>

                          )
                      })
                  }
              </List>
            </div>
        )
    }else{
        return(
            <div>No Note Add it</div>
        )
    }
    
}

export default Sidebar;