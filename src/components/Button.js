"use client";

import React from "react";

function Button({ title, className }) {
  return (
    <div
      className={`flex items-center justify-center 
      ${className}`}
    >
      <button className="sm font-sm bg-blue-500 hover:bg-blue-700 py-2 px-4 text-white md:py-4 md:px-6 rounded-md">
        {title}
      </button>
    </div>
  );
}

export default Button;
