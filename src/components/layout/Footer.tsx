import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Travel Explorer</h3>
            <p className="text-gray-300">
              Discover the beauty of Sri Lanka with our curated travel
              experiences.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/tours" className="text-gray-300 hover:text-white">
                  Tours
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-white">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <address className="text-gray-300 not-italic">
              <p>123 Travel Street</p>
              <p>Colombo, Sri Lanka</p>
              <p>Email: info@travelexplorer.lk</p>
              <p>Phone: +94 11 234 5678</p>
            </address>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Newsletter</h4>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-3 py-2 rounded text-gray-800"
                required
              />
              <button
                type="submit"
                className="bg-primary hover:bg-teal-700 text-white px-4 py-2 rounded"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Travel Explorer. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
