import React from 'react';
import DiscountAccordion from './DiscountAccordion';
import CartItem from './CartItem';
import CartSummary from './CartSummary';

const Cart = () => {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="py-5 mb-4 bg-slate-50">
        <h1 className="text-2xl font-bold mb-4 text-center">Shopping Cart</h1>
      </div>
      <div className="lg:mx-8 grid grid-cols-1 md:grid-cols-3 gap-y-5 md:gap-x-5">
        {/* Cart Items */}
        <CartItem />

        <div>
            {/* Summary */}
            <CartSummary />

            {/* Accordion */}
            <DiscountAccordion />
        </div>
      </div>
    </div>
  );
};

export default Cart;
