import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../Component/Navbar';

const Resources = () => {
  return (
    <div> 
      
    <div className="bg-[#111] text-white min-h-screen flex flex-col justify-center items-center px-4 py-10">
      <motion.div
        className="text-center mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl font-bold mb-4">BusinessPulse Resources</h1>
        <p className="text-lg text-gray-400 max-w-[700px] mx-auto">
          BusinessPulse offers expert-led financial analyst courses, covering topics like Nepse technical analysis, government policies, marketing strategies, sales techniques, and the latest innovations, including AI's role in transforming marketing and sales.
        </p>
      </motion.div>

      <div className="flex gap-10">
        <motion.div
          className="w-[250px] h-[250px] border-2 border-gray-600 rounded-md flex justify-center items-center relative"
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ type: 'spring', stiffness: 100 }}
        >
          <div className="absolute top-0 left-0 text-white p-4">
            <h2 className="font-bold text-2xl">Nepse Technical Analysis</h2>
            <p className="text-sm mt-2">Learn how to analyze Nepse charts and make informed investment decisions.</p>
          </div>
        </motion.div>

        <motion.div
          className="w-[250px] h-[250px] border-2 border-gray-600 rounded-md flex justify-center items-center relative"
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ type: 'spring', stiffness: 100 }}
        >
          <div className="absolute top-0 left-0 text-white p-4">
            <h2 className="font-bold text-2xl">Government Policies</h2>
            <p className="text-sm mt-2">Stay updated on the latest government policies affecting businesses and investments.</p>
          </div>
        </motion.div>

        <motion.div
          className="w-[250px] h-[250px] border-2 border-gray-600 rounded-md flex justify-center items-center relative"
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ type: 'spring', stiffness: 100 }}
        >
          <div className="absolute top-0 left-0 text-white p-4">
            <h2 className="font-bold text-2xl">AI in Marketing</h2>
            <p className="text-sm mt-2">Understand how artificial intelligence is reshaping marketing and sales strategies.</p>
          </div>
        </motion.div>
      </div>
    </div>
    </div>
  );
};

export default Resources;
