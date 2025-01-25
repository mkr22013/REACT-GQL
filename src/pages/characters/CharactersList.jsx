import React from "react";
import useCharacters from "../../hooks/useCharacters";
import { Link } from "react-router";
import Spinner from "../Spinner/Spinner";

function CharactersList() {
  const { error, data, loading } = useCharacters();

  if (loading)
    return (
      <div>
        <Spinner />
      </div>
    );

  if (error) return <div>Something went wrong....</div>;

  return (
    <div className="CharacterList">
      {data.characters.results.map((character) => {
        return (
          <Link key={character.id} to={`/${character.id}`}>
            <img src={character.image} />
            <h2>{character.name}</h2>
          </Link>
        );
      })}
    </div>
  );
}

export default CharactersList;
