import { gql, useLazyQuery } from "@apollo/client";
import React, { useState, useef } from "react";
import "./search.css";

const GET_CHARACTER_LOCATIONS = gql`
  query GetCharacterLocations($name: String!) {
    characters(filter: { name: $name }) {
      results {
        id
        image
        location {
          name
        }
      }
    }
  }
`;

function Search() {
  const [name, setName] = useState("");
  const [getLocations, { loading, called, error, data }] = useLazyQuery(
    GET_CHARACTER_LOCATIONS
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Type the search text..."
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => getLocations({ variables: { name } })}>
        Search
      </button>
      {loading && <div>Spinner...</div>}
      {error && <div>Something went wrong...</div>}
      {data && (
        <ul>
          {data.characters.results.map((character) => {
            return (
              <div className="list">
                <div>
                  <img src={character.image} />
                  <p key={character.id}>{character.location.name}</p>
                </div>
              </div>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default Search;
