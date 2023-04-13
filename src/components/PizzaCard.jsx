import React, { useState } from "react";
import Emoji from "./Emoji";
import CustomizePopup from "./CustomizePopup";

function PizzaCard({ pizza, onSelectPizza }) {
  const [showCustomizePopup, setShowCustomizePopup] = useState(false);
  const handleSelectPizza = () => {
    onSelectPizza(pizza);
  };
  const handleCustomizeClick = () => {
    setShowCustomizePopup(true);
  };
  const handlePopupClose = () => {
    setShowCustomizePopup(false);
  };
  const starRating = (
    <>
      {[...Array(Math.round(pizza.rating))].map((_, i) => (
        <Emoji key={i} symbol="⭐️" label="star" />
      ))}
    </>
  );

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <img src={pizza.img_url} alt={pizza.name} className="w-full mb-4" />
      <h2 className="text-lg font-bold">{pizza.name}</h2>
      <p className="text-gray-600">{pizza.description}</p>
      <div className="flex flex-wrap justify-between items-center mt-4">
        <div>
          {starRating}
          <span className="ml-2">{pizza.rating}</span>
        </div>

        <div className="font-bold text-red-500">₹{pizza.price}</div>

        <button
          onClick={handleCustomizeClick}
          className="px-4 py-2 rounded-full bg-red-500 text-white"
        >
          Customize
        </button>
      </div>
      {showCustomizePopup && (
        <CustomizePopup pizza={pizza} onClose={handlePopupClose} />
      )}
    </div>
  );
}

export default PizzaCard;
