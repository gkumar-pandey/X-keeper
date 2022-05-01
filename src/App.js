import React, { useState } from "react";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Note from "./component/Note";

import Createarea from "./component/Createarea";

function App() {
  const [notes, setNotes] = useState([]);

  function deleteNote(id) {
     setNotes((prevalue)=>{
       return prevalue.filter((noteitem,idx)=>{
         return (id !== idx)
       })
     })
  }
  function addNote(note) {
    setNotes((preNotes) => {
      return [note, ...preNotes];
    });
  }
  return (
    <div>
      <Header />
      <Createarea addnote={addNote} />
      <Footer />
      
      {notes.map((note, idx) => {
        return (
          <Note
            key={idx}
            id = {idx}
            title= {note.title} 
            content= {note.content}
            onDlete={deleteNote}
          />
        );
      })}
    </div>
  );
}

export default App;
