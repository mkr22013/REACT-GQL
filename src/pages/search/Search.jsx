import { gql, useLazyQuery } from "@apollo/client";
import React, { useState, useef } from "react";
import { Link } from "react-router";
import "./search.css";
import Spinner from "../Spinner/Spinner";

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
      {loading && (
        <div>
          Loading.....
          <Spinner />
        </div>
      )}
      {error && <div>Something went wrong...</div>}
      {data && (
        <div>
          {data.characters.results.map((character) => {
            return (
              <div className="list">
                <div>
                  <Link to={`/${character.id}`}>
                    <img src={character.image} />
                    <p key={character.id}>{character.location.name}</p>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Search;
