import React from "react";
import { useQuery, gql } from "@apollo/client";

const GET_CHARACTER = gql`
  query {
    characters {
      results {
        id
        name
        image
      }
    }
  }
`;

function CharactersList() {
  const { error, data, loading } = useQuery(GET_CHARACTER);

  console.log({ error, loading, data });

  if (loading) return <div>Loading....</div>;

  if (error) return <div>Something went wrong....</div>;

  return (
    <div className="CharacterList">
      {data.characters.results.map((character) => {
        return (
          <div key={character.id}>
            <img src={character.image} />
            <h2>{character.name}</h2>
          </div>
        );
      })}
    </div>
  );
}

export default CharactersList;
