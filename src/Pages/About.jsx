import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';

const About = () => {
  return (
    <div> 
    
    <div className="bg-[#111] text-white min-h-screen flex flex-col justify-center items-center px-4 py-10">
      <motion.div
        className="text-center mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl font-bold mb-4">About BusinessPulse</h1>
        <p className="text-lg text-gray-400 max-w-[700px] mx-auto">
          BusinessPulse is dedicated to empowering professionals and businesses by offering cutting-edge financial analysis and business strategies. We focus on Nepse technical analysis, government policies, and the latest innovations, including how AI is transforming marketing and sales.
        </p>
      </motion.div>

      
      <motion.div
        className="text-center mt-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, type: 'spring', stiffness: 120 }}
      >
        <h2 className="font-semibold text-2xl text-[#00df9a]">Our Vision</h2>
        <p className="text-lg text-gray-400 max-w-[600px] mx-auto mt-2">
          To equip individuals with the skills and knowledge needed to understand financial markets, AI-driven marketing, and effective business strategies for smarter decision-making and growth.
        </p>
      </motion.div>
      <motion.div
        className="text-center mt-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, type: 'spring', stiffness: 120 }}
      >
        <h2 className="font-semibold text-2xl text-[#00df9a]">Our Courses</h2>
        <p className="text-lg text-gray-400 max-w-[700px] mx-auto mt-2">
          BusinessPulse offers expert-led courses covering topics such as Nepse technical analysis, government policies affecting businesses, AI in marketing, and sales strategies. Stay updated with the latest market trends and enhance your business growth.
        </p>
      </motion.div>

      <motion.div
        className="mt-10 flex justify-center gap-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, type: 'spring', stiffness: 120 }}
      >
        <div className="w-[250px] h-[250px] bg-transparent border-2 border-gray-600 rounded-md flex justify-center items-center relative">
          <div className="absolute top-0 left-0 text-white p-4">
            <h2 className="font-bold text-2xl">Nepse Technical Analysis</h2>
            <p className="text-sm mt-2">Learn how to analyze Nepse charts and make informed investment decisions.</p>
          </div>
        </div>

        <div className="w-[250px] h-[250px] bg-transparent border-2 border-gray-600 rounded-md flex justify-center items-center relative">
          <div className="absolute top-0 left-0 text-white p-4">
            <h2 className="font-bold text-2xl">Government Policies</h2>
            <p className="text-sm mt-2">Stay updated on the latest government policies affecting businesses and investments.</p>
          </div>
        </div>

        <div className="w-[250px] h-[250px] bg-transparent border-2 border-gray-600 rounded-md flex justify-center items-center relative">
          <div className="absolute top-0 left-0 text-white p-4">
            <h2 className="font-bold text-2xl">AI in Marketing</h2>
            <p className="text-sm mt-2">Understand how AI is reshaping marketing and sales strategies for business growth.</p>
          </div>
        </div>
      </motion.div>
    </div>
    
    </div>
  );
};

export default About;
