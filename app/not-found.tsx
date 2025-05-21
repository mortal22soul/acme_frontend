"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const NotFound: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen  text-center">
      <div className="text-6xl font-bold">404</div>
      <div className="mt-4 text-2xl font-semibold text-gray-800">
        Oops! Page Not Found
      </div>
      <p className="mt-2 text-lg text-gray-600">
        {`Sorry, the page you're looking for doesn't exist.`}
      </p>
      <Link href="/" className="mt-6  rounded-lg text-lg font-medium">
        <Button className="hover:bg-gray-600">Navigate home</Button>
      </Link>
    </div>
  );
};

export default NotFound;
