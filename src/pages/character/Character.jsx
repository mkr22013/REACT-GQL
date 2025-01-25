import React from "react";
import { useCharacter } from "../../hooks/useCaracter";
import "./character.css";
import { useParams } from "react-router";
import Spinner from "../Spinner/Spinner";

function Character() {
  const { id } = useParams();
  const { data, loading, error } = useCharacter(id);

  if (error) return <div>{error}</div>;

  if (loading)
    return (
      <div>
        <Spinner />
      </div>
    );

  return (
    <div className="Character">
      <img src={data.character.image} width={750} height={750} />
      <div className="Character-content">
        <h1>{data.character.name}</h1>
        <p>{data.character.gender}</p>
        <div className="Character-episode">
          {data.character.episode.map((episode) => {
            return (
              <div key={episode.id}>
                {episode.name} -<b>{episode.episode}</b>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
  return <div>sdfsdf</div>;
}

export default Character;
