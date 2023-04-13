import React from "react";
import Emoji from "./Emoji";

const Header = () => {
  return (
    <header className="bg-yellow-500 py-4 px-8 flex justify-between items-center">
      <div className="flex items-center">
        <Emoji symbol="🍕" label="pizza" className="text-3xl" />
        <h1 className="text-3xl font-bold ml-2">Pizza Place</h1>
      </div>
      <nav className="px-6">
        <ul className="flex space-x-4 text-lg font-semibold">
          <li>
            <div className="text-white hover:text-yellow-800 px-4">Home</div>
          </li>
          <li>
            <div className="text-white hover:text-yellow-800 cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
