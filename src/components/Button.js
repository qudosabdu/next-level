"use client";

import React from "react";

function Button({ title, className}) {
  return (
    <div
      className={`flex items-center justify-center 
      ${className}`}
    >
      <button className="text-xs font-mono  bg-blue-500 hover:bg-blue-700 py-1 text-white md:py-2 md:px-4 rounded-md">
        {title}
      </button>
    </div>
  );
}

export default Button;
