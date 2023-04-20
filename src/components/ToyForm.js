import React, {useState} from "react";

const baseUrl = 'http://localhost:3001/'
const toysUrl = baseUrl + 'toys/'

function ToyForm({addNewToy}) {

  const [formToyName, setFormToyName] = useState("")
  const [formToyImage, setFormToyImage] = useState("")

  function changeFormToyName (event) {
    setFormToyName(event.target.value)
  }

  function changeFormToyImage (event) {
    setFormToyImage(event.target.value)
  }

  function toyFormSubmit (event) {
    event.preventDefault()

    const newToy = {
      name: formToyName,
      image: formToyImage,
      likes: 0
    }

    const postRequest = {
      method: "POST",
      headers: {
        'content-type': 'application/json',
        'accepts': 'application/json'
      },
      body: JSON.stringify(newToy)
    }

    fetch(toysUrl, postRequest)
    .then(r => r.json())
    .then(newToyData => addNewToy(newToyData))
  }

  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={toyFormSubmit}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          value={formToyName}
          onChange={changeFormToyName}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          value={formToyImage}
          onChange={changeFormToyImage}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
