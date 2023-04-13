import React from "react";
import Emoji from "./Emoji";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-sm py-4">
      <div className="container mx-auto flex justify-between items-center">
        <p>&copy; 2023 Pizzalicious. All rights reserved.</p>
        <p>
          Made with <Emoji symbol="❤️" label="love" /> by Nid Mo
        </p>
      </div>
    </footer>
  );
};

export default Footer;
