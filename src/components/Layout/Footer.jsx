import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaPinterest } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">About Us</h3>
            <p className="text-sm">
              Transform your living spaces with our luxurious curtains and room
              decor solutions. Elegance redefined for every corner of your home.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                 to='/'
                  className="hover:text-white transition-colors duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                 to='/'
                  className="hover:text-white transition-colors duration-300"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                 to='/'
                  className="hover:text-white transition-colors duration-300"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                 to='/'
                  className="hover:text-white transition-colors duration-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Subscription */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Stay Updated
            </h3>
            <p className="text-sm mb-4">
              Subscribe to receive updates, offers, and exclusive designs.
            </p>
            <form className="flex flex-col md:flex-row gap-3">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2 text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <button
                type="submit"
                className="bg-yellow-500 text-gray-900 px-6 py-2 rounded-md hover:bg-yellow-600 transition-all duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          {/* Social Media and Contact */}
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Social Icons */}
            <div className="flex gap-4 mb-4 md:mb-0">
              <Link
               to='/'
                className="text-gray-400 hover:text-yellow-400 transition-all duration-300"
              >
                <FaFacebookF size={24} />
              </Link>
              <Link
               to='/'
                className="text-gray-400 hover:text-yellow-400 transition-all duration-300"
              >
                <FaInstagram size={24} />
              </Link>
              <Link
               to='/'
                className="text-gray-400 hover:text-yellow-400 transition-all duration-300"
              >
                <FaTwitter size={24} />
              </Link>
              <Link
               to='/'
                className="text-gray-400 hover:text-yellow-400 transition-all duration-300"
              >
                <FaPinterest size={24} />
              </Link>
            </div>

            {/* Contact Info */}
            <div className="text-sm text-gray-400 text-center md:text-right">
              <p>© 2024 Luxury Curtains. All Rights Reserved.</p>
              <p>Designed with ❤️ by [Your Name]</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
