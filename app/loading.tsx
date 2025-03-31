"use client";

import React from "react";

const Loading: React.FC = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 border-4 border-t-4 border-solid rounded-full animate-spin"></div>
        <span className="mt-4 text-xl  font-semibold tracking-wide uppercase">
          Loading...
        </span>
      </div>
    </div>
  );
};

export default Loading;
