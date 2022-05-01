import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
 

function Note(props) {
  function handleClick() {
    props.onDlete(props.id);
  }
  return (
    <div className="notebox">
      <h3>{props.title}</h3>
      <p>{props.content}</p>
      <button onClick={handleClick}> 
       <DeleteIcon />
      </button>
    </div>
  );
}

export default Note;
