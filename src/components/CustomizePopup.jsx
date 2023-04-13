import React, { useState } from "react";

const CustomizePopup = ({ pizza, onClose }) => {
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedToppings, setSelectedToppings] = useState([]);

  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };

  const handleToppingChange = (event) => {
    const topping = event.target.value;
    const index = selectedToppings.indexOf(topping);
    if (event.target.checked) {
      if (index === -1) {
        setSelectedToppings([...selectedToppings, topping]);
      }
    } else {
      if (index !== -1) {
        selectedToppings.splice(index, 1);
        setSelectedToppings([...selectedToppings]);
      }
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const customizedPizza = {
      ...pizza,
      size: selectedSize,
      toppings: selectedToppings,
    };
    console.log(customizedPizza); // You can send this to the server for further processing
    onClose();
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white rounded-lg p-6 shadow-lg">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold">Customize Pizza</h3>
          <button
            className="text-gray-600 hover:text-gray-800 focus:outline-none"
            onClick={onClose}
          >
            X
          </button>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <img
              src={pizza.img_url}
              alt={pizza.name}
              className="w-full rounded-lg"
            />
          </div>
          <div>
            <h4 className="text-xl font-bold">{pizza.name}</h4>
            <p className="text-gray-700">{pizza.description}</p>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="font-bold mb-2 block">
                  {pizza.size[0].title}
                </label>
                <div className="flex flex-wrap gap-2">
                  {pizza.size[0].items.map((sizeOption) => (
                    <div key={sizeOption.size}>
                      <input
                        type={pizza.size[0].isRadio ? "radio" : "checkbox"}
                        name="size"
                        value={sizeOption.size}
                        checked={selectedSize === sizeOption.size}
                        onChange={handleSizeChange}
                        id={`size-${sizeOption.size}`}
                        className="sr-only"
                      />
                      <label
                        htmlFor={`size-${sizeOption.size}`}
                        className={`px-4 py-2 rounded-full border ${
                          selectedSize === sizeOption.size
                            ? "bg-red-500 text-white"
                            : "text-gray-700 hover:text-gray-800 hover:border-gray-500"
                        } cursor-pointer`}
                      >
                        {sizeOption.size}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mb-4">
                <label className="font-bold mb-2 block">
                  {pizza.toppings[0].title}
                </label>
                <div className="flex flex-wrap gap-2">
                  {pizza.toppings[0].items.map((toppingOption) => (
                    <div key={toppingOption.name}>
                      <input
                        type={pizza.toppings[0].isRadio ? "radio" : "checkbox"}
                        name="toppings"
                        value={toppingOption.name}
                        checked={selectedToppings.includes(toppingOption.name)}
                        onChange={handleToppingChange}
                        id={`topping-${toppingOption.name}`}
                        className="sr-only"
                      />
                      <label
                        htmlFor={`topping-${toppingOption.name}`}
                        className={`px-4 py-2 rounded-full border ${
                          selectedToppings.includes(toppingOption.name)
                            ? "bg-red-500 text-white"
                            : "text-gray-700 hover:text-gray-800 hover:border-gray-500"
                        } cursor-pointer`}
                      >
                        {toppingOption.name}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              <div className="text-right">
                <button
                  type="submit"
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
                >
                  Add to Cart
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomizePopup;
