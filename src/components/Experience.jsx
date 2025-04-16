// src/components/Experience.jsx
import React from "react";

const Experience = () => {
  return (
    <div className="border-t border-b border-[#4b2e2e] py-4 px-6 text-[#4b2e2e]">
      <h2 className="text-center font-medium text-lg mb-2">Experience</h2>

      <div className="text-sm">
        <p className="mb-2">
          <span className="font-bold">E-commerce project</span> – HTML
          website similar to Shopee and Amazon using HTML, CSS, and JavaScript.
        </p>

        <ul className="list-disc list-inside pl-4 space-y-1">
          <li>
            Developed a program that functions like an inventory system/cart.
          </li>
          <li>
            Developed a program in Python that functions as a GPU Builder Hub.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Experience;
