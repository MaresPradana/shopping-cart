import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementQuantity, decrementQuantity, removeItem } from '../redux/cartSlice';
import { BookmarkIcon, TrashIcon } from '@heroicons/react/16/solid';
import DiscountAccordion from './DiscountAccordion';

const Cart = () => {
  const items = useSelector(state => state.cart.items);
  const totalAmount = useSelector(state => state.cart.totalAmount);
  const dispatch = useDispatch();

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="py-5 mb-4 bg-slate-50">
        <h1 className="text-2xl font-bold mb-4 text-center">Shopping Cart</h1>
      </div>
      <div className="lg:mx-8 grid grid-cols-1 md:grid-cols-3 gap-y-5 md:gap-x-5">
        {/* Cart Items */}
        <div className="col-span-2 rounded overflow-hidden shadow-md p-4">
          <h2 className="font-medium text-lg">Cart ({items.length} items)</h2>
          {items.map((item, index) => (
            <div key={item.id} className={`grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-y-4 md:gap-x-4 py-4 ${items.length !== index + 1 ? 'border-b' : ''}`}>
              <div className="bg-slate-100 justify-items-center content-center rounded-md shadow-md h-60 md:h-36">
                <img src={item.image} alt={item.name} className="w-52 h52 md:w-20 md:h-20" />
              </div>
              <div className="md:col-span-2 lg:col-span-3">
                <div className="flex flex-col md:flex-row md:justify-between mb-3 gap-y-3">
                    <div className="flex flex-col mb-3 md:mb-0">
                        <h3 className="font-medium text-lg">{item.name}</h3>
                        <span className="uppercase text-xs">{item.category} - {item.variant}</span>
                        <span className="uppercase text-xs mt-2">Color: {item.variant}</span>
                        <span className="uppercase text-xs">Size: {item.ratio}</span>
                    </div>
                    <div className="flex items-top justify-end">
                        <button className="border px-3 pb-1 h-fit" onClick={() => dispatch(decrementQuantity(item.id))}>-</button>
                        <span className="border px-3 pb-1 h-fit">{item.quantity}</span>
                        <button className="border px-3 pb-1 h-fit" onClick={() => dispatch(incrementQuantity(item.id))}>+</button>
                    </div>
                </div>
                <div className="flex justify-between">
                    <div className="flex flex-col lg:flex-row gap-x-3 gap-y-2">
                        <button className="uppercase text-xs flex justify-start" onClick={() => dispatch(removeItem(item.id))}>
                            <TrashIcon className="size-4 text-slate-500 me-1" />Remove Item
                        </button>
                        <button className="uppercase text-xs flex justify-start" onClick={() => dispatch(removeItem(item.id))}>
                            <BookmarkIcon className="size-4 text-slate-500 me-1" />Move To Wish List
                        </button>
                    </div>
                    <span className="font-medium text-sm text-start content-end md:text-end">{`$${item.price}`}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div>
            {/* Summary */}
            <div className="p-4 rounded overflow-hidden shadow-md">
            <h2 className="text-xl font-semibold">The total amount of</h2>
            <div className="flex justify-between py-2">
                <span>Temporary amount</span>
                <span>{`$${totalAmount.toFixed(2)}`}</span>
            </div>
            <div className="flex justify-between py-2">
                <span>Shipping</span>
                <span>Free</span>
            </div>
            <div className="flex justify-between py-2 font-bold">
                <span>Total (including VAT)</span>
                <span>{`$${totalAmount.toFixed(2)}`}</span>
            </div>
            <button className="w-full bg-blue-600 text-white p-2 mt-4 rounded-md hover:bg-blue-700">Go to checkout</button>
            </div>

            {/* Accordion */}
            <DiscountAccordion />
        </div>
      </div>
    </div>
  );
};

export default Cart;
