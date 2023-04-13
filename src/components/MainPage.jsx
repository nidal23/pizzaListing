import { useState, useEffect } from "react";
import axios from "axios";
import Emoji from "./Emoji";
import PizzaCard from "./PizzaCard";
import SortingDropDown from "./SortingDropDown";
import CustomizePopup from "./CustomizePopup";
import Toppings from "./Toppings";

function MainPage() {
  const [pizzas, setPizzas] = useState([]);
  const [selectedPizza, setSelectedPizza] = useState(null);
  const [showCustomizePopup, setShowCustomizePopup] = useState(false);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedToppings, setSelectedToppings] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [sortBy, setSortBy] = useState("rating");
  const [showVegOnly, setShowVegOnly] = useState(false);

  useEffect(() => {
    // Fetch pizza data from API
    axios
      .get("https://run.mocky.io/v3/ec196a02-aaf4-4c91-8f54-21e72f241b68")
      .then((response) => {
        setPizzas(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // Sort pizzas by rating or price
  const sortedPizzas = pizzas.sort((a, b) => {
    if (sortBy === "rating") {
      return b.rating - a.rating;
    } else {
      return a.price - b.price;
    }
  });

  // Filter pizzas by veg or non-veg
  const filteredPizzas = showVegOnly
    ? sortedPizzas.filter((pizza) => pizza.isVeg)
    : sortedPizzas.filter((pizza) => !pizza.isVeg);

  // Handle selecting a pizza and showing the customize popup
  const handleSelectPizza = (pizza) => {
    setSelectedPizza(pizza);
    setSelectedSize("");
    setSelectedToppings([]);
    setQuantity(1);
    setShowCustomizePopup(true);
  };

  // Handle adding the customized pizza to the cart
  const handleAddToCart = () => {
    const cartItem = {
      id: selectedPizza.id,
      name: selectedPizza.name,
      description: selectedPizza.description,
      isVeg: selectedPizza.isVeg,
      rating: selectedPizza.rating,
      price: selectedPizza.price,
      img_url: selectedPizza.img_url,
      size: selectedSize,
      toppings: selectedToppings,
      quantity: quantity,
    };
    // Add cart item to cart
    console.log(cartItem);
    setShowCustomizePopup(false);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-red-500 text-white p-4 h-52">
        <div className="flex justify-around items-center">
          <div className="">
            <h1 className="font-bold text-7xl">Pizza Place</h1>
            <p className="text-md text-right mt-3 font-extralight italic text-red-200">
              Delicious pizzas delivered to you.
            </p>
          </div>
          <div className="flex items-center space-x-6">
            <SortingDropDown sortBy={sortBy} setSortBy={setSortBy} />
            <button
              onClick={() => setShowVegOnly(!showVegOnly)}
              className="p-2 rounded-full bg-white text-red-500 mt-32"
            >
              {showVegOnly ? (
                <Emoji symbol="🥬" label="veggie" />
              ) : (
                <Emoji symbol="🍗" label="non-veg" />
              )}
            </button>
          </div>
        </div>
      </header>
      <main className="flex-1 p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {filteredPizzas.map((pizza) => (
            <PizzaCard
              key={pizza.id}
              pizza={pizza}
              onSelectPizza={handleSelectPizza}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default MainPage;
