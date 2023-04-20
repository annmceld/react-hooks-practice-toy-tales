import React from "react";

function ToyCard({toy, deleteThisToy, updateToyLikes}) {

  const {id, name, image, likes} = toy

  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button className="like-btn" onClick={() => updateToyLikes(id, likes)}>Like {"<3"}</button>
      <button className="del-btn" onClick={() => deleteThisToy(id)}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
