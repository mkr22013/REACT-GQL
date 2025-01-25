import { gql, useLazyQuery } from "@apollo/client";
import React, { useState, useId } from "react";
import "./search.css";
import Spinner from "../Spinner/Spinner";
import DisplayCharacters from "../DisplayCharacters/DisplayCharacters";

const GET_CHARACTER_LOCATIONS = gql`
  query GetCharacterLocations($name: String!) {
    characters(filter: { name: $name }) {
      results {
        id
        image
        name
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
        placeholder="Search characters multiverse locations..."
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => getLocations({ variables: { name } })}>
        Search
      </button>
      {loading && (
        <div>
          <Spinner />
        </div>
      )}
      {error && <div>Something went wrong...</div>}
      {data && <DisplayCharacters data={data} />}
    </div>
  );
}

export default Search;
