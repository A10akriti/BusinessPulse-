import React, { useState } from "react";
import Modal from "react-modal";
import { motion } from "framer-motion";

Modal.setAppElement("#root");

const Card = ({ title, price, features, imgSrc, borderColor, textColor, onButtonClick }) => (
  <motion.div
    whileHover={{ scale: 1.05, translateY: -10 }}
    className={`w-full shadow-xl flex flex-col p-6 rounded-lg bg-white border-l-4 ${borderColor}`}
  >
    <img src={imgSrc} alt={`${title} Icon`} className="w-20 mx-auto -mt-10" />
    <h2 className={`text-2xl font-bold text-center py-6 ${textColor}`}>{title}</h2>
    <p className={`text-center text-4xl font-bold ${textColor}`}>NPR {price}</p>
    <div className="text-center font-medium mt-4">
      {features.map((feature, index) => (
        <p key={index} className="py-2 border-b mx-8 text-gray-600">
          {feature}
        </p>
      ))}
    </div>
    <motion.button
      whileHover={{ backgroundColor: "#00df9a", color: "#000" }}
      className="bg-black text-white w-[200px] rounded-md font-medium mx-auto my-6 py-3"
      onClick={onButtonClick}
    >
      Start Trial
    </motion.button>
  </motion.div>
);

const PricingCards = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const cardsData = [
    {
      title: "Finance Courses",
      price: "2999",
      features: ["Beginner & Intermediate Levels", "Nepse Technical Analysis", "Fundamental Analysis"],
      imgSrc: "https://via.placeholder.com/50",
      borderColor: "border-green-500",
      textColor: "text-green-700",
    },
    {
      title: "Marketing & Sales Mastery",
      price: "5999",
      features: ["Advanced Sales Techniques", "AI in Marketing", "Strategies for Lead Conversion"],
      imgSrc: "https://via.placeholder.com/50",
      borderColor: "border-blue-500",
      textColor: "text-blue-700",
    },
    {
      title: "Business & Policies Mastery",
      price: "5999",
      features: ["Government Policy Analysis", "Business Registration Documents", "Legal Compliance Overview"],
      imgSrc: "https://via.placeholder.com/50",
      borderColor: "border-yellow-500",
      textColor: "text-yellow-700",
    },
  ];

  return (
    <div className="w-full py-16 px-4 bg-gradient-to-b from-green-100 to-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        {cardsData.map((card, index) => (
          <Card
            key={index}
            {...card}
            onButtonClick={() => setIsModalOpen(true)}
          />
        ))}
      </div>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        style={{
          overlay: { backgroundColor: "rgba(0, 0, 0, 0.7)" },
          content: { inset: "10%", padding: "20px", borderRadius: "10px" },
        }}
      >
        <h2 className="text-2xl font-bold text-center text-green-700 mb-4">Watch Demo Video</h2>
        <video controls className="w-full rounded-lg shadow-lg mb-4" src="https://via.placeholder.com/demo-video.mp4" />
        <h3 className="text-lg font-semibold text-gray-700 mb-2">Select Payment Method:</h3>
        <ul className="space-y-2">
          <li><input type="radio" id="esewa" name="payment" /> eSewa</li>
          <li><input type="radio" id="bank" name="payment" /> Bank Transfer</li>
        </ul>
        <button
          className="bg-green-500 text-white font-bold px-6 py-2 rounded-md mt-4"
          onClick={() => alert("Redirect to payment")}
        >
          Proceed to Pay
        </button>
      </Modal>
    </div>
  );
};

export default PricingCards;
