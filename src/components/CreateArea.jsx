import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const tit = event.target.value;
    const con = event.target.name;

    function pre(pro) {
      if (con === "title") {
        return {
          title: tit,
          content: pro.content
        };
      } else if (con === "content") {
        return {
          content: tit,
          title: pro.title
        };
      }
    }
    setNote(pre);
  }
  return (
    <div>
      <form>
        <input
          onChange={handleChange}
          name="title"
          placeholder="Title :"
          value={note.title}
        />
        <textarea
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={note.content}
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
