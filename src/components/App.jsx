import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

  const [notes, setNotes] = useState([]);


  function addNote(note) {
    setNotes(prevValue => {
      return [...prevValue, note]; 
    });
  }

  function deleteNote(id) {
    setNotes(prevNotes => prevNotes.filter((noteItem, key) => id !== key));

  }

  return (
    <div>
      <Header />
      <CreateArea
      onAdd={addNote} />
      {notes.map( (noteItem, index)=> {
        return <Note
        key = {index}
        id = {index}
        title = {noteItem.title}
        content = {noteItem.content}
        onDelete = {deleteNote}
        />  
      })}
      <Footer />
    </div>
  );
}

export default App;
