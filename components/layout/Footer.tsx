// components/layout/Footer.tsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-gray-100 p-4 mt-10 text-center text-sm text-gray-600">
      <p>&copy; {new Date().getFullYear()} Thierno Estate. All rights reserved.</p>
      <div className="mt-2">
        <a href="#" className="mx-2 hover:underline">Privacy Policy</a>
        <a href="#" className="mx-2 hover:underline">Terms of Service</a>
        <a href="#" className="mx-2 hover:underline">Contact</a>
      </div>
    </footer>
  );
};

export default Footer;
