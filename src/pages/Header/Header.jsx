import React from "react";
import { Link } from "react-router";

function Header() {
  return (
    <header className="bg-blue-500 text-white p-5">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Links & Actions */}
        <nav className={"sm:flex space-x-8"}>
          <Link
            to={"/"}
            className="hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            CharacterLists{" "}
          </Link>
          <Link
            to={"/search"}
            className="hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            Search
          </Link>
          <Link
            to="/contactus"
            className="hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            Contact Us
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
