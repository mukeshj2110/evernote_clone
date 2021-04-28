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

  return (
    <div className="App">
      <Sidebar></Sidebar>
      <Editor></Editor>
    </div>
  );
}

export default App;
