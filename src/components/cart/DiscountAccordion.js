import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { applyDiscount, removeDiscount } from '../../redux/actions/discountActions';
import { TrashIcon } from '@heroicons/react/16/solid';

const DiscountAccordion = () => {
  // Accordion Action
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  // Discount Action
  const [code, setCode] = useState('');
  const dispatch = useDispatch();
  const discount = useSelector((state) => state.discount.discount);
  const appliedCode = useSelector((state) => state.discount.appliedCode);

  const handleApplyCode = () => {
    dispatch(applyDiscount(code));
  };

  const handleRemoveCode = () => {
    dispatch(removeDiscount());
    setCode(''); // Reset input setelah kode dihapus
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
          {appliedCode ? (
            <div className="flex items-center justify-between">
              <p className="text-sm uppercase">Applied Discount: {discount}%</p>
              <button onClick={handleRemoveCode}><TrashIcon className="size-4 text-red-500 me-1" /></button>
            </div>
          ) : (
            <div className='flex flex-col gap-4'>
              <input
                type="text"
                placeholder="Enter discount code"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg text-sm"
              />
              <button
                onClick={handleApplyCode}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-xs uppercase"
              >
                Apply Code
              </button>
              
              <span className='text-xs uppercase'>Demo: <b>DISCOUNT10</b> and <b>DISCOUNT20</b></span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default DiscountAccordion;
