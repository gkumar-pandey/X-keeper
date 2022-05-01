import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";

function Createarea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });
  const [IsExpand, setexpand] = useState(false);
  function expand() {
    setexpand(true);
  }
  function handlechange(event) {
    const { name, value } = event.target;
    setNote((prevalue) => {
      return {
        ...prevalue,
        [name]: value,
      };
    });
  }
  function SubmitNote(event) {
    props.addnote(note);
    setNote({
      title: "",
      content: "",
    });
    event.preventDefault();
  }
  return (
    <div>
      <form action="" id="form">
        {IsExpand ? (
          <input
            type="text"
            name="title"
            onChange={handlechange}
            placeholder="Title"
            value={note.title}
          />
        ) : null}
        <textarea
          name="content"
          onChange={handlechange}
          value={note.content}
          onClick={expand}
          id=""
          rows={IsExpand ? "4" : "1"}
          placeholder="Take a note..."
        ></textarea>
        {IsExpand ? (
          <button onClick={SubmitNote}>
            <AddIcon />
          </button>
        ) : null}
      </form>
    </div>
  );
}

export default Createarea;
