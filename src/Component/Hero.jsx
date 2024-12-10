import React, { useState, useEffect } from 'react';

const Hero = () => {
  const strings = ['Financial Analysis', 'Nepse Analysis', 'AI in Marketing', 'Sales Techniques'];
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    let typingInterval;

    if (typing) {
      typingInterval = setInterval(() => {
        setCurrentText((prev) => {
          const nextChar = strings[currentIndex].slice(0, prev.length + 1);
          if (nextChar === strings[currentIndex]) {
            setTyping(false);
          }
          return nextChar;
        });
      }, 120); // Typing speed
    } else {
      setTimeout(() => {
        setTyping(true);
        setCurrentIndex((prev) => (prev + 1) % strings.length); // Move to the next term
        setCurrentText('');
      }, 1000); // Pause before the next term
    }

    return () => clearInterval(typingInterval);
  }, [typing, currentIndex]);

  return (
    <div className="text-white bg-[#111]">
      <div className="max-w-[1200px] mx-auto h-screen flex flex-col justify-center items-center text-center px-4">
        <p className="text-[#00dfa9] font-bold text-xl md:text-2xl mb-4">Transform Your Business with Data Insights</p>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4">
          Unlock the Power of Data for Growth
        </h1>

        <div className="flex justify-center items-center mb-6">
          <p className="text-xl sm:text-2xl font-medium">Master</p>
          <span className="text-xl sm:text-2xl font-bold text-[#00df9a] md:pl-4 pl-2">{currentText}</span>
        </div>

        <p className="text-lg sm:text-xl text-gray-500 mb-6 max-w-[800px]">
          Dive into specialized courses on Nepse analysis, financial techniques, AI in marketing & sales, and how to leverage data for business success.
        </p>

        <button className="bg-[#00df9a] text-black font-medium py-3 px-6 rounded-md text-lg">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;
