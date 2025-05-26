import blogPosts from "./data/blogPosts.js";
import { useState } from "react";

export default function App() {
  // ex LEGO VALUE AL VALORE NON MUTABILE DI STATE / UNCONTROLLED ELEMENT
  const [newTitle, setNewTitle] = useState("Ciao");

  function handleFormSubmit(event) {
    // ex PREVIENE INVIO DATI
    event.preventDefault();
  }
  return (
    <>
      <div className="container text-center my-3">
        {/* LISTA DI TITOLI */}
        {blogPosts.map(function (currentTitle, index) {
          return <h3 key={index}>{currentTitle}</h3>;
        })}
        {/* FORM CON 1 INPUT */}
        <form onSubmit={handleFormSubmit}>
          <input
            // TRASFORMIAMO IN UN CONTROLLED EVENT
            // ex INTERCETTA EVENTO E RACCOGLIE INPUT
            onChange={function (event) {
              // ex RIASSEGNA IL VALORE DI NEWTITLE CON L'INPUT
              setNewTitle(event.target.value);
            }}
            value={newTitle}
            type="text"
            className="form-control mb-3"
          ></input>
          <button className="btn btn-primary">Add</button>
        </form>
      </div>
    </>
  );
}
