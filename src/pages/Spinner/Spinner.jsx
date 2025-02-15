import React from "react";

function Spinner() {
  return (
    <div
      className="flex items-center justify-center"
      style={{ width: "100vh" }}
    >
      <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-b-4 border-gray-900"></div>
    </div>
  );
}

export default Spinner;
