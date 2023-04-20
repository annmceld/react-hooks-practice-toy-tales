import React, { useEffect, useState } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

const baseUrl = 'http://localhost:3001/'
const toysUrl = baseUrl + 'toys/'

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([])

  useEffect(fetchToys, [])

  function fetchToys () {
    fetch(toysUrl)
    .then(r => r.json())
    .then(setToys)
  }

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function addNewToy (newToy) {
    setToys([...toys, newToy])
  }

  function deleteThisToy (id) {
    // console.log(id)
    fetch(toysUrl + id, {method: "DELETE"})
    .then(() => {
      const updatedToys = toys.filter( toy => toy.id !== id)
      setToys(updatedToys)
    })
  }

  function updateToyLikes (id, likes) {
    // console.log(likes)
    const patchRequest = {
      method: "PATCH",
      headers: {
        'content-type': 'application/json',
        'accepts': 'application/json'
      },
      body: JSON.stringify({likes: likes += 1})
    }

    fetch(toysUrl + id, patchRequest)
    .then (r => r.json())
    .then(patchedToyData => {
      const toysWithUpdatedLikes = toys.map(toy => {
        if (toy.id === patchedToyData.id) {
          return patchedToyData
        } else {
          return toy
        }
      })
      setToys(toysWithUpdatedLikes)
    })
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm addNewToy={addNewToy}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys} deleteThisToy={deleteThisToy} updateToyLikes={updateToyLikes}/>
    </>
  );
}

export default App;
