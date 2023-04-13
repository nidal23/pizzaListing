import React from "react";
import Emoji from "./Emoji";

const Header = () => {
  return (
    <header className="bg-yellow-500 py-4 px-8 flex justify-between items-center">
      <div className="flex items-center">
        <Emoji symbol="🍕" label="pizza" className="text-3xl" />
        <h1 className="text-3xl font-bold ml-2">Pizza Place</h1>
      </div>
      <nav>
        <ul className="flex space-x-4 text-lg font-semibold">
          <li>
            <a href="/" className="text-white hover:text-yellow-800">
              Home
            </a>
          </li>
          <li>
            <a href="/" className="text-white hover:text-yellow-800">
              Menu
            </a>
          </li>
          <li>
            <a href="/" className="text-white hover:text-yellow-800">
              Cart
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
