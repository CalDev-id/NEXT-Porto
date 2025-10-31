"use client";
import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const timelineData = [
  {
    year: "2022",
    title: "Fullstack Developer Intern",
    subtitle: "PT Nusa Tekno Global",
  },
  {
    year: "2023",
    title: "Machine Learning Cohort",
    subtitle: "Bangkit Academy by Google",
  },
  {
    year: "2024",
    title: "Junior iOS Developer",
    subtitle: "Apple Developer Academy @Binus",
  },
  {
    year: "2025",
    title: "AI Engineer Intern",
    subtitle: "Telkom Indonesia",
  },
];

const Career = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-6 bg-gradient-to-r bg-white text-gray-800 transition-colors duration-500">
      {/* Title */}
    <div className="flex justify-center">
              <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-5xl font-extrabold mb-12 bg-clip-text text-transparent bg-black"
      >
        My Career Journey
      </motion.h1>
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-5xl font-extrabold mb-12 bg-clip-text ml-5 text-transparent bg-blue-600"
      >
        🚀
      </motion.h1>
    </div>

      <div className="relative w-full max-w-5xl">
        <ul className="flex flex-col lg:flex-row lg:justify-center lg:space-x-10 space-y-10 lg:space-y-0">
          {timelineData.map((item, index) => (
            <motion.li
              key={item.year}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="relative flex flex-col items-center lg:items-start text-center lg:text-left group"
            >
              {/* Tahun */}
              <div className="text-2xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
                {item.year}
              </div>

              {/* Icon */}
              <motion.div
                whileHover={{ scale: 1.2, rotate: 10 }}
                className="bg-gradient-to-r from-blue-600 to-blue-400 p-2 rounded-full shadow-md mb-4"
              >
                <CheckCircle2 className="w-6 h-6 text-white" />
              </motion.div>

              {/* Box Konten */}
              <div className="bg-white border border-gray-200 hover:border-blue-400 transition-all duration-300 rounded-2xl p-6 shadow-md w-64 h-32 flex flex-col justify-center hover:scale-105">
                <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                <p className="text-gray-500 mt-1 text-sm">{item.subtitle}</p>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Career;
