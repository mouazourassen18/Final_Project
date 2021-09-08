import React from "react";

function CreateArea(props) {
  return (
    <div>
      <form>
        <input
          onChange={props.handleChange}
          name="title"
          placeholder="Title :"
          value={props.title}
        />
        <textarea
          onChange={props.handleChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={props.content}
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
