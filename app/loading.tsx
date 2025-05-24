"use client";

import React from "react";

export const LoadingSpinner: React.FC = () => (
  <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
    <div className="flex flex-col items-center">
      <div className="relative w-16 h-16 flex items-center justify-center">
        <div className="absolute w-full h-full rounded-full border-4 border-blue-400 border-t-transparent animate-spin"></div>
        <div className="absolute w-12 h-12 rounded-full border-4 border-indigo-300 border-t-transparent animate-spin-slow"></div>
      </div>
      <span className="mt-6 text-xl font-semibold tracking-wide uppercase text-blue-900 animate-fade-in">
        Loading...
      </span>
    </div>
  </div>
);

const Loading: React.FC = () => <LoadingSpinner />;

export default Loading;
