import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p className="text-sm">© 2023 iPro Team. All rights reserved.</p>
        <div className="mt-2">
          <a href="#" className="text-gray-300 hover:text-white mx-2">
            Privacy Policy
          </a>
          <span className="text-gray-300">|</span>
          <a href="#" className="text-gray-300 hover:text-white mx-2">
            Terms of Service
          </a>
          <span className="text-gray-300">|</span>
          <a href="#" className="text-gray-300 hover:text-white mx-2">
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
