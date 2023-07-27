import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
            <h2 className="text-xl font-bold mb-4">Company Name</h2>
            <p className="text-sm">123 Main Street</p>
            <p className="text-sm">City, Country</p>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-4">About Us</h2>
            <ul className="text-sm">
              <li className="mb-2"><a href="#">Our Mission</a></li>
              <li className="mb-2"><a href="#">Our Vision</a></li>
              <li className="mb-2"><a href="#">Our Team</a></li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-4">Products</h2>
            <ul className="text-sm">
              <li className="mb-2"><a href="#">Product 1</a></li>
              <li className="mb-2"><a href="#">Product 2</a></li>
              <li className="mb-2"><a href="#">Product 3</a></li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-4">Contact</h2>
            <p className="text-sm">Email: contact@example.com</p>
            <p className="text-sm">Phone: +123 456 7890</p>
          </div>
        </div>
        <hr className="border-t border-gray-600 my-4" />
        <div className="text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Company Name. All rights reserved.</p>
          <p>Designed and developed by <a href="#">Attah Sosah</a>.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
