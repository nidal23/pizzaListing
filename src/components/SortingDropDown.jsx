import React from "react";

function SortingDropDown({ sortBy, setSortBy }) {
  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  return (
    <div className="relative">
      <select
        className="appearance-none bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
        value={sortBy}
        onChange={handleSortChange}
      >
        <option value="rating">Sort by rating</option>
        <option value="price">Sort by price</option>
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <svg
          className="fill-current h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M10 12l-4-4h8z" />
        </svg>
      </div>
    </div>
  );
}

export default SortingDropDown;
