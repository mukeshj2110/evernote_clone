import React from 'react';
import './sidebar.css'
import {useState} from 'react'
import SidebarItems from '../sidebaritems/Sidebaritems';
import {db} from '../firebaseConfig'

function Sidebar({notes , selectedNoteIndex ,selectTitle}){

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
        if(title.title!==null && title.title!==undefined && title.title.trim().length !==0){
            db.collection('notes').add({
                title: title.title,
                body: ''
            })
        }else{
            alert("Please Add the title OR Dont give blank spaces as title");
        }
        
    }

    function deleteNote(note){
        console.log("deleted note");
        if(window.confirm('Do you Want to delete this note?')){
            db.collection('notes').doc(note.id).delete();
        }
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
                        onClick={newNoteSubmit} >Submit</button>
                    </div> :
                    null 
                }
                <hr/>
              <ul>
                  {
                      notes.map((note , index ,id)=>{
                          return(
                              <li key={index}>
                                  <SidebarItems 
                                  note={note} 
                                  id={id} 
                                  index ={index}
                                  selectedNoteIndex={selectedNoteIndex}
                                  selectnote={()=>selectTitle(note,index)}
                                  deletenote={deleteNote}>      
                                  </SidebarItems>
                                  <hr/>
                              </li>

                          )
                      })
                  }
              </ul>
            </div>
        )
    }else{
        return(
            <div>No Note Add it</div>
        )
    }
    
}

export default Sidebar;