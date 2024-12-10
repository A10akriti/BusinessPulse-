import React from "react";
import { motion } from "framer-motion";

const Blog = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const noteVariants = {
    hidden: { scale: 0, rotate: 10, opacity: 0 },
    visible: { scale: 1, rotate: 0, opacity: 1, transition: { duration: 0.6 } },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100 text-gray-800 p-5">
      {/* Header */}
      <header className="text-center py-8">
        <h1 className="text-4xl font-bold text-green-700">
          How AI is Transforming Marketing and Sales
        </h1>
        <p className="text-lg text-gray-600 mt-3">
          Discover how AI integrates with analytics to revolutionize industries.
        </p>
      </header>

      {/* Content Container */}
      <motion.div
        className="container mx-auto max-w-5xl space-y-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Introduction */}
        <motion.section
          className="bg-white p-6 shadow-lg rounded-lg"
          variants={itemVariants}
        >
          <h2 className="text-2xl font-semibold text-green-800">Introduction</h2>
          <p className="mt-3 leading-7 text-gray-700">
            Artificial Intelligence (AI) is no longer a futuristic concept. It
            is actively transforming industries, especially marketing and sales.
            By leveraging data analytics, AI can enhance strategies for
            financial markets, such as Nepse analysis, and revolutionize the way
            businesses approach customers and sales targets.
          </p>
        </motion.section>

        {/* AI in Marketing */}
        <motion.section
          className="bg-white p-6 shadow-lg rounded-lg"
          variants={itemVariants}
        >
          <h2 className="text-2xl font-semibold text-green-800">
            The Role of AI in Marketing
          </h2>
          <ul className="list-disc ml-5 mt-3 text-gray-700 space-y-2">
            <li>
              <strong>Personalization:</strong> AI tailors marketing strategies
              using customer data, ensuring better engagement and results.
            </li>
            <li>
              <strong>Predictive Analytics:</strong> AI-driven tools predict
              trends and consumer behaviors with high accuracy.
            </li>
            <li>
              <strong>Automated Content Creation:</strong> Content creation is
              streamlined with AI, saving time and boosting creativity.
            </li>
          </ul>
        </motion.section>

        {/* AI in Sales */}
        <motion.section
          className="bg-white p-6 shadow-lg rounded-lg"
          variants={itemVariants}
        >
          <h2 className="text-2xl font-semibold text-green-800">AI in Sales</h2>
          <ul className="list-disc ml-5 mt-3 text-gray-700 space-y-2">
            <li>
              <strong>Customer Insights:</strong> Predicting customer needs to
              refine sales strategies and deliver exceptional value.
            </li>
            <li>
              <strong>Chatbots and Automation:</strong> AI-powered chatbots are
              transforming customer service, ensuring seamless sales processes.
            </li>
            <li>
              <strong>Enhanced Lead Generation:</strong> AI efficiently
              qualifies and prioritizes leads for better conversion rates.
            </li>
          </ul>
        </motion.section>

        {/* Notes Board */}
        <motion.div
          className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-lg shadow-md"
          variants={noteVariants}
        >
          <h3 className="text-lg font-bold text-yellow-700">
            Key Takeaway Notes:
          </h3>
          <ul className="mt-2 space-y-2 text-gray-700">
            <li>AI makes marketing more personal and precise.</li>
            <li>Sales teams can leverage AI for better insights and lead management.</li>
            <li>AI tools like chatbots revolutionize customer interactions.</li>
          </ul>
        </motion.div>

        {/* Conclusion */}
        <motion.section
          className="bg-white p-6 shadow-lg rounded-lg"
          variants={itemVariants}
        >
          <h2 className="text-2xl font-semibold text-green-800">Conclusion</h2>
          <p className="mt-3 leading-7 text-gray-700">
            AI has proven to be a game-changer for marketing and sales. By
            integrating advanced analytics and automation, platforms like BTB,
            BTC, and SAAS can achieve unprecedented levels of efficiency and
            customer satisfaction. Businesses embracing AI are at the forefront
            of innovation, driving growth in a competitive world.
          </p>
        </motion.section>
      </motion.div>
    </div>
  );
};

export default Blog;
