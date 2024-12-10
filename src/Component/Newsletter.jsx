import React from 'react';

const Newsletter = () => {
  return (
    <div className="w-full py-16 text-white px-4 bg-[#0a192f]">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        {/* Left Section */}
        <div className="lg:col-span-2 my-4">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold">
            Stay updated with BusinessPulse
          </h1>
          <p className="text-gray-500">Sign up to get the latest insights on finance, marketing, and sales.</p>
        </div>

        {/* Right Section */}
        <div className="my-4">
          <div className="flex flex-col sm:flex-row items-center justify-between">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-3 flex w-full rounded-md text-black focus:outline-none focus:ring-2 focus:ring-[#00df9a]"
            />
            <button className="bg-[#00df9a] text-black w-[200px] rounded-md font-medium ml-4 my-6 py-3">
              Subscribe
            </button>
          </div>
          <p className="text-gray-500">
            We care about your data. Read our{' '}
            <a href="#" className="text-[#00df9a] underline">
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
