import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toys, deleteThisToy, updateToyLikes}) {

  const renderToys = toys.map (toy =>
    <ToyCard
      key={toy.id}
      toy={toy}
      deleteThisToy={deleteThisToy}
      updateToyLikes={updateToyLikes}
    />
    )

  return (
    <div id="toy-collection">{/* Render the collection of ToyCards */ renderToys}</div>
  );
}

export default ToyContainer;
