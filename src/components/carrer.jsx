"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { careerTimeline } from "../data/career";

const Career = () => {
  return (
    <div
      id="career"
      className="flex flex-col items-center justify-center py-20 px-6 bg-gradient-to-r bg-white text-gray-800 transition-colors duration-500"
    >
      {/* Title */}
    <div className="flex justify-center">
              <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-5xl font-extrabold mb-12 bg-clip-text text-transparent bg-black pb-10"
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
          {careerTimeline.map((item, index) => (
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
                <h3 className="text-lg font-semibold text-gray-800">{item.role}</h3>
                <p className="text-gray-500 mt-1 text-sm">{item.company}</p>
              </div>
            </motion.li>
          ))}
        </ul>
        <div className="mt-12 flex justify-center">
          <Link
            href="/career"
            className="inline-flex items-center gap-2 rounded-full border mt-10 border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-900 hover:text-slate-900"
          >
            View Career Page
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 13 14"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M1 0.5V2.5H9.59L0 12.09L1.41 13.5L11 3.91V12.5H13V0.5H1Z"
                fill="currentColor"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Career;
