import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [TitCont, setTitleCont] = useState({
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
    setTitleCont(pre);
  }
  return (
    <div>
      <Header />
      <CreateArea
        handleChange={handleChange}
        title={TitCont.title}
        content={TitCont.content}
      />
      <Note key={1} title="Note title" content="Note content" />
      <Footer />
    </div>
  );
}

export default App;
