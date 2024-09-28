"use client";

import { ChevronRightIcon } from "@heroicons/react/solid"; // Icon for the "Book a Call" button

export default function Navbar() {

  return (
    <nav className="w-full bg-gray-100 shadow-md py-2 px-8 flex justify-between items-center">
      <div className="text-2xl font-bold">RADIKLE</div>

      {/* Desktop Links */}
      <div className="hidden md:flex space-x-8 text-lg font-medium text-gray-800">
        <a href="#" className="hover:text-gray-600">Home</a>
        <a href="#" className="hover:text-gray-600">Our Team</a>
        <a href="#" className="hover:text-gray-600">Services</a>
      </div>

      {/* Book a Call Button for PC View */}
      <div className="hidden md:flex">
        <button className="bg-black text-white py-2 px-6 rounded-lg shadow-lg hover:bg-gray-900 flex items-center space-x-2">
          <span>Book a call</span>
          <ChevronRightIcon className="w-4 h-4" />
        </button>
      </div>
    </nav>
  );
}
