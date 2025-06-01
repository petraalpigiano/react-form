import blogPosts from "./data/blogPosts.js";
import { useState } from "react";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { faPen } from "@fortawesome/free-solid-svg-icons";

export default function App() {
  // ex LEGO VALUE AL VALORE NON MUTABILE DI STATE / UNCONTROLLED ELEMENT
  const [newTitle, setNewTitle] = useState(" ");
  // ex STATO PER LA GESTIONE DELL'ARRAY
  const [titles, setTitles] = useState(blogPosts);

  function handleAdd() {
    const updatedTitles = [...titles, newTitle];
    // ex AGGIORNI L'ARRAY CONTENUTO IN TITLE
    setTitles(updatedTitles);
    // ex INSERISCI NUOVO TITOLO DA INPUT
    titles.push(newTitle);
    // ex L'INPUT SI SVUOTA DOPO OGNI INVIO
    setNewTitle(" ");
  }
  function handleModify(params) {
    alert("modifcato");
  }
  function handleElimination(index) {
    const notEliminatedTitles = titles.filter(function (currentTitle, i) {
      return i !== index;
    });
    setTitles(notEliminatedTitles);
  }

  return (
    <>
      <div className="container text-center my-3">
        {/* LISTA DI TITOLI */}
        {titles.map(function (currentTitle, index) {
          return (
            <h3 key={index}>
              {currentTitle}
              <FontAwesomeIcon
                className="trash-icon"
                key={index}
                icon={faTrashCan}
                onClick={function () {
                  handleElimination(index);
                }}
              />
              <FontAwesomeIcon className="pen-icon" icon={faPen} />
            </h3>
          );
        })}

        {/* FORM CON 1 INPUT */}
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
        <button className="btn btn-primary mx-1" onClick={handleAdd}>
          Add
        </button>
        <button className="btn btn-primary mx-1" onClick={handleModify}>
          Modify
        </button>
      </div>
    </>
  );
}
