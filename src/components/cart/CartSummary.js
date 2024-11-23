import React from 'react';
import { useSelector } from 'react-redux';

const CartSummary = () => {
    const totalAmount = useSelector(state => state.cart.totalAmount);
    const discount = useSelector((state) => state.discount.discount);

    // Menghitung total setelah diskon
    const totalAfterDiscount = totalAmount - (totalAmount * discount / 100);

    return (
      <div className="p-4 rounded overflow-hidden shadow-md">
        <h2 className="text-lg font-medium mb-3">The total amount of</h2>
        <div className="flex justify-between py-1 text-sm">
            <span>Temporary amount</span>
            <span>{`$${totalAmount.toFixed(2)}`}</span>
        </div>
        <div className="border-b flex justify-between pt-1 pb-3 text-sm">
            <span>Shipping</span>
            <span>Free</span>
        </div>
        <div className="flex justify-between py-3 font-bold text-sm">
            <span>The total amount of (including VAT)</span>
            <span className='content-center'>{`$${totalAfterDiscount.toFixed(2)}`}</span>
        </div>
        <button className="w-full bg-blue-600 text-white p-2 mt-3 rounded-md hover:bg-blue-700 uppercase text-xs">Go to checkout</button>
      </div>
    )
}

export default CartSummary;
