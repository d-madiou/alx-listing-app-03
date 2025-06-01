// components/layout/Header.tsx
import React from 'react';

const Header = () => {
  return (
    <header className="w-full bg-white shadow-md p-4 flex flex-col md:flex-row justify-between items-center gap-4">
      <div className="flex items-center gap-2">
        <img src="/logo.png" alt="Logo" className="h-8" />
        <h1 className="text-xl font-bold">Thierno Estate</h1>
      </div>

      <input
        type="text"
        placeholder="Search properties..."
        className="border px-3 py-1 rounded-md w-full md:w-1/3"
      />

      <nav className="flex flex-col md:flex-row items-center gap-4">
        <a href="#" className="text-gray-700 hover:text-black">Rooms</a>
        <a href="#" className="text-gray-700 hover:text-black">Mansion</a>
        <a href="#" className="text-gray-700 hover:text-black">Countryside</a>
        <a href="#" className="text-blue-600 hover:underline">Sign In</a>
        <a href="#" className="bg-blue-600 text-white px-3 py-1 rounded-md hover:bg-blue-700">Sign Up</a>
      </nav>
    </header>
  );
};

export default Header;