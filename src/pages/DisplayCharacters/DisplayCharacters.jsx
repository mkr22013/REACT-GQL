import React from "react";
import { Link } from "react-router";
import "./DisplayCharacters.css";

function DisplayCharacters(data) {
  return (
    <div>
      <h1 className="Heading">Character's List</h1>
      <div className="CharacterList">
        {data.data.characters.results.map((character) => {
          if (character.location) {
            return (
              <Link key={character.id} to={`/${character.id}`} className="Link">
                <img src={character.image} />
                <div className="Link" key={character.id}>
                  {character.name}
                  <div style={{ margin: "1px" }}>from</div>
                  {character.location.name} Location
                </div>
              </Link>
            );
          } else {
            return (
              <div className="Link" key={character.id}>
                <Link key={character.id} to={`/${character.id}`}>
                  <img src={character.image} />
                  <h2>{character.name}</h2>
                </Link>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}

export default DisplayCharacters;
