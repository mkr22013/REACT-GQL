import React from "react";
import useCharacters from "../../hooks/useCharacters";

import Spinner from "../Spinner/Spinner";
import "./CharactersList.css";
import DisplayCharacters from "../DisplayCharacters/DisplayCharacters";

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
    <div>
      <DisplayCharacters data={data} />
    </div>
  );
}

export default CharactersList;
