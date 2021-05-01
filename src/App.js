import './App.css';
import Sidebar from './sidebar/Sidebar'
import Editor from './editor/Editor'
import {db} from './firebaseConfig'
import {useState,useEffect} from 'react'

function App() {

  const [selectedNoteIndex,setSelectedNoteIndex] =useState(null);
  const [selectedNote,setSelectedNote] =useState(null);
  const [notes,setNotes] =useState([]);

  useEffect(() => {
    db.collection('notes')
    .onSnapshot(snap =>{
        const notes =snap.docs.map(doc =>{
          const data = doc.data();
          data['id'] = doc.id;
          return data;
        })
        console.log(notes);
        setNotes(notes);
    })
    
  }, [setNotes])

  function selectTitle(note,index){
    console.log(`selected note is ${note.titel} with index ${index} from app.js`)
    let selectnote =note;
    console.log(`${selectnote} from app.js`);
    setSelectedNote(note);
  }
  function noteUpdated(id,text){
    console.log(text)
    db.collection('notes').doc(id).update({
      body: text
    })
  }

  return (
    <div className="App">
      <div className="sidebar">
      <Sidebar selectTitle={selectTitle}
      selectedNoteIndex={selectedNoteIndex}
      notes={notes}
      ></Sidebar>
     </div>
      <div className="editor">
        {
          selectedNote? <Editor selectedNote={selectedNote} noteUpdated={noteUpdated}></Editor>: <h4>Select Any Note to Display in Edit Mode</h4>
        }
      </div>
      
    </div>
  );
}

export default App;
