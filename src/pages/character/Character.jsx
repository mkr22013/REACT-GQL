import React from "react";
import { useCharacter } from "../../hooks/useCaracter";
import "./character.css";
import { useParams, Link } from "react-router";
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
    <div style={{ width: "100vh" }}>
      <div className="Heading">Character's Details</div>
      <div className="Character">
        <div style={{ width: "100vh", alignContent: "center" }}>
          <div style={{ alignItems: "center", marginBottom: "2px" }}>
            <p>Name: {data.character.name}</p>
            <p>Gender: {data.character.gender}</p>
          </div>
          <img src={data.character.image} className="img" />
        </div>
        <div className="Character-content">
          <div className="Character-episode">
            <div
              style={{
                textAlign: "center",
                marginBottom: "3px",
                color: "blue",
              }}
            >
              <b>Episode's Details</b>
            </div>

            {data.character.episode.map((episode) => {
              console.log("Episodes details :", episode);
              return (
                <div
                  key={episode.id}
                  style={{ width: "100%", overflow: "hidden" }}
                >
                  <div
                    style={{
                      border: "1px dashed",
                      width: "500px",
                      float: "left",
                      paddingLeft: "5px",
                    }}
                  >
                    {episode.name}
                  </div>

                  <div
                    style={{
                      marginLeft: "520px",
                      paddingLeft: "5px",
                      paddingRight: "5px",
                      border: "1px dashed",
                    }}
                  >
                    <b>{episode.episode}</b>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="btnDiv">
        <Link to="/">
          <button>Home</button>
        </Link>
      </div>
    </div>
  );
}

export default Character;
