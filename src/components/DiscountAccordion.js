import React, { useState } from 'react';

const DiscountAccordion = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mt-6 border rounded-lg shadow-lg">
      <div
        className="p-4 flex justify-between items-center cursor-pointer"
        onClick={toggleAccordion}
      >
        <h2 className="text-sm">Add a discount code (optional)</h2>
        <span>
          {isOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 15l7-7 7 7"
              ></path>
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          )}
        </span>
      </div>
      {isOpen && (
        <div className="p-4">
          <input
            type="text"
            placeholder="Enter discount code"
            className="w-full px-4 py-2 border rounded-lg"
          />
          <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
            Apply Code
          </button>
        </div>
      )}
    </div>
  );
};

export default DiscountAccordion;
