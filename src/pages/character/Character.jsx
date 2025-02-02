import React from "react";
import { useCharacter } from "../../hooks/useCaracter";
import "./character.css";
import { useParams, Link } from "react-router";
import Spinner from "../Spinner/Spinner";

function Character() {
  const { id } = useParams();
  const { data, loading, error } = useCharacter(id);

  if (loading)
    return (
      <div>
        <Spinner />
      </div>
    );

  if (error) return <div>{error}</div>;

  return (
    <div style={{ width: "100vh" }}>
      <div className="Heading">Character's Details</div>
      <div className="Character">
        <div
          style={{ width: "100vh", alignContent: "top", paddingTop: "50px" }}
        >
          <div style={{ marginBottom: "2px", fontFamily: "sans-serif" }}>
            <p>Name: {data.character.name}</p>
            <p>Gender: {data.character.gender}</p>
          </div>
          <img src={data.character.image} className="img" />
        </div>
        <div className="Character-content">
          <div className="max-w-screen-xl mx-auto px-4 md:px-8">
            <div className="items-start justify-between md:flex">
              <div className="max-w-lg">
                <h3 className="text-gray-800 text-xl font-bold sm:text-2xl">
                  Episode Details
                </h3>
              </div>
            </div>
            <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
              <table className="w-full table-auto text-sm text-left">
                <thead className="bg-gray-50 text-gray-600 font-medium border-b">
                  <tr>
                    <th className="py-3 px-6">Episode Name</th>
                    <th className="py-3 px-6">Season-Episodes</th>
                  </tr>
                </thead>
                <tbody className="text-gray-600 divide-y">
                  {data.character.episode.map((episode) => (
                    <tr key={episode.id}>
                      <td
                        id="name"
                        value={episode.name}
                        className="px-6 py-4 whitespace-nowrap"
                      >
                        {episode.name}
                      </td>
                      <td
                        id="episode"
                        value={episode.episode}
                        className="px-6 py-4 whitespace-nowrap"
                      >
                        {episode.episode}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
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
