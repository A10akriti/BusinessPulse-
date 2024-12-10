import React from 'react';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Resources from '../Pages/Resources';

const Footer = () => {
  return (
    <div className="bg-black text-white py-8">
      <div className="max-w-[1240px] mx-auto px-4 grid md:grid-cols-4 sm:grid-cols-2 gap-8">
        {/* Brand Description */}
        <div>
          <h1 className="text-3xl font-bold text-[#00df9a]">BusinessPulse</h1>
          <p className="py-4 text-gray-400">
            Stay informed and grow your business with insights, resources, and
            tools tailored for modern entrepreneurs.
          </p>
          <div className="flex space-x-4 mt-4">
            <FaFacebookF
              className="cursor-pointer hover:text-[#00df9a] transition"
              size={20}
            />
            <FaTwitter
              className="cursor-pointer hover:text-[#00df9a] transition"
              size={20}
            />
            <FaInstagram
              className="cursor-pointer hover:text-[#00df9a] transition"
              size={20}
            />
            <FaLinkedinIn
              className="cursor-pointer hover:text-[#00df9a] transition"
              size={20}
            />
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-semibold pb-4">Quick Links</h2>
          <ul>
            <Link to='/' > 
            <li className="py-2 text-gray-400 hover:text-[#00df9a] transition">            
            </li>
            Home
            </Link>
            <li className="py-2 text-gray-400 hover:text-[#00df9a] transition">
              Company
            </li>
            <Link to='/resources' element= {<Resources/>} > 
            <li className="py-2 text-gray-400 hover:text-[#00df9a] transition">
            </li>
            Resources</Link>
            
            <li className="py-2 text-gray-400 hover:text-[#00df9a] transition">
              About
            </li>
            <li className="py-2 text-gray-400 hover:text-[#00df9a] transition">
              Contact
            </li>
          </ul>
        </div>

      
        <div>
          <h2 className="text-xl font-semibold pb-4">Resources</h2>
          <ul>
            <li className="py-2 text-gray-400 hover:text-[#00df9a] transition">
              Blog
            </li>
            <li className="py-2 text-gray-400 hover:text-[#00df9a] transition">
              Case Studies
            </li>
            <li className="py-2 text-gray-400 hover:text-[#00df9a] transition">
              Pricing
            </li>
            <li className="py-2 text-gray-400 hover:text-[#00df9a] transition">
              FAQs
            </li>
            <li className="py-2 text-gray-400 hover:text-[#00df9a] transition">
              Support
            </li>
          </ul>
        </div>

        {/* Newsletter Signup */}
        <div>
          <h2 className="text-xl font-semibold pb-4">Subscribe to Our Newsletter</h2>
          <p className="text-gray-400 pb-4">
            Get the latest updates on business tips, resources, and more.
          </p>
          <form className="flex flex-col">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 rounded-md mb-4 text-black"
            />
            <button className="bg-[#00df9a] text-black py-2 rounded-md font-semibold hover:bg-[#00bf87] transition">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-gray-400 pt-8 border-t border-gray-700">
        <p>© 2024 BusinessPulse. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
