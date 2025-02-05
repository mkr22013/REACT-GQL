import React from "react";
import { Link } from "react-router";
import "./DisplayCharacters.css";

function DisplayCharacters(data) {
  console.log("data from display characters :", data);
  if (data.data.characters.results.length === 0)
    return (
      <div>
        <h1 className="Heading">No records found</h1>
      </div>
    );
  return (
    <div>
      <h1 className="Heading">List Of Characters</h1>
      <div className="CharacterList">
        {data.data.characters.results.map((character) => {
          if (character.location) {
            return (
              <Link key={character.id} to={`/${character.id}`} className="Link">
                <img src={character.image} />
                <div style={{ textAlign: "left" }} key={character.id}>
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
