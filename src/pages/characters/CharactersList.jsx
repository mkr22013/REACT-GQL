import React from "react";
import useCharacters from "../../hooks/useCharacters";
import { Link } from "react-router";

function CharactersList() {
  const { error, data, loading } = useCharacters();

  console.log({ error, loading, data });

  if (loading) return <div>Loading....</div>;

  if (error) return <div>Something went wrong....</div>;

  return (
    <div className="CharacterList">
      {data.characters.results.map((character) => {
        return (
          <Link to={`/${character.id}`}>
            <img src={character.image} />
            <h2>{character.name}</h2>
          </Link>
        );
      })}
    </div>
  );
}

export default CharactersList;
