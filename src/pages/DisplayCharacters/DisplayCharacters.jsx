import React from "react";
import { Link } from "react-router";

function DisplayCharacters(data) {
  console.log("This is from display characters :", data);
  return (
    <div>
      <div className="Heading">Characters List</div>
      <div className="CharacterList">
        {data.data.characters.results.map((character) => {
          return (
            <Link key={character.id} to={`/${character.id}`}>
              <img src={character.image} />
              <h2>{character.name}</h2>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default DisplayCharacters;
