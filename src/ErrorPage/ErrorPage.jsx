import React from "react";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="relative flex items-center justify-center h-screen bg-gradient-to-br from-[#0f0f1a] to-[#1a1a2e] overflow-hidden">

      {/* Glow Effect */}
      <div className="absolute w-[600px] h-[600px] bg-cyan-400/30 blur-[120px] animate-pulse rounded-full top-[-100px] left-[-100px]"></div>
      <div className="absolute w-[600px] h-[600px] bg-purple-500/30 blur-[120px] animate-pulse rounded-full bottom-[-100px] right-[-100px]"></div>

      {/* Card */}
      <div className="relative z-10 text-center backdrop-blur-xl bg-white/5 border border-white/10 shadow-2xl rounded-2xl px-10 py-14 w-[380px] animate-[float_4s_ease-in-out_infinite]">

        {/* 404 Text */}
        <h1 className="text-8xl font-extrabold bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">
          404
        </h1>

        {/* Title */}
        <h2 className="text-2xl text-white mt-3">
          Oops! Lost in Space
        </h2>

        {/* Description */}
        <p className="text-gray-400 text-sm mt-2 mb-6">
          The page you're looking for drifted away into the universe.
        </p>

        {/* Button */}
        <Link
          to="/"
          className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 text-white font-semibold transition duration-300 hover:scale-110 hover:shadow-lg hover:shadow-cyan-400/50"
        >
          🚀 Back to Home
        </Link>
      </div>

      {/* Custom Animation */}
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-15px); }
          }
        `}
      </style>
    </div>
  );
};

export default ErrorPage;