import React from 'react';
import { XCircle, Minus, Plus } from 'lucide-react';
import AuthNavbar from '../Login/AuthNavbar';
import Features from '../Login/Features';
import w1 from "../../assets/w1.png";
import w2 from '../../assets/w2.png';
import w3 from  '../../assets/w3.png';
import w4 from '../../assets/w4.png';



const CartTable = () => {
  const cartItems = [
    { id: 1, name: 'Taylor Farms Broccoli Florets Vegetables', price: 125, rating: 4.8, reviews: 128,image:w1 },
    { id: 2, name: 'Taylor Farms Broccoli Florets Vegetables', price: 125, rating: 4.8, reviews: 128 ,image:w2 },
    { id: 3, name: 'Taylor Farms Broccoli Florets Vegetables', price: 125, rating: 4.8, reviews: 128 ,image:w3 },
    { id: 4, name: 'Taylor Farms Broccoli Florets Vegetables', price: 125, rating: 4.8, reviews: 128,image:w4  }
  ];

  return (
    <>
    <AuthNavbar/>
    <div className="min-h-screen bg-white px-4 sm:px-8 py-8">
      <div className="max-w-7xl mx-auto">
        {/* Grid for Cart Table and Cart Totals */}
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_1.2fr] gap-8">
          
          {/* Cart Table */}
          <div className="bg-white rounded-xl border border-gray-300 p-6 overflow-x-auto">
            <table className="min-w-full text-sm text-left">
              <thead>
                <tr className="border-b">
                  <th className="py-2 pr-4">Delete</th>
                  <th className="py-2 pr-4">Product Name</th>
                  <th className="py-2 pr-4">Price</th>
                  <th className="py-2 pr-4">Quantity</th>
                  <th className="py-2">Subtotal</th>
                </tr>
              </thead>
              <tbody>
                {[1, 2, 3, 4].map((_, index) => (
                  <tr key={index} className="border-b border-transparent">
                    <td className="py-6 pr-4 align-top">
                      <button className="flex items-center gap-1 text-black hover:text-red-500">
                        <span className="border border-black rounded-full w-5 h-5 flex items-center justify-center text-xs">×</span>
                        Remove
                      </button>
                    </td>
                    <td className="py-6 pr-4 align-top">
                      <div className="flex items-start gap-4">
                       <img src={cartItems[index].image} alt="Product" className="w-20 h-20 object-cover rounded-md" />

                        <div>
                          <p className="font-semibold text-sm mb-1">Taylor Farms Broccoli Florets Vegetables</p>
                          <div className="flex items-center gap-1 text-xs text-gray-600">
                            <span>⭐ 4.8</span>
                            <span className="ml-1">| 128 Reviews</span>
                          </div>
                          <div className="mt-2 flex gap-2">
                            <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">Camera</span>
                            <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">Videos</span>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="py-6 pr-4 align-top font-semibold">$125.00</td>
                    <td className="py-6 pr-4 align-top">
                      <div className="flex items-center border border-gray-300 rounded w-fit">
                        <button className="px-2 py-1">−</button>
                        <span className="px-4">1</span>
                        <button className="px-2 py-1">+</button>
                      </div>
                    </td>
                    <td className="py-6 align-top font-semibold">$125.00</td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Coupon and Update Button */}
            <div className="mt-8 flex flex-col sm:flex-row  items-center justify-between gap-4">
              <div className="flex gap-2 w-full sm:w-auto">
                <input
                  type="text"
                  placeholder="Coupon Code"
                  className="border border-gray-300 px-4 py-2 rounded w-full sm:w-60"
                />
                <button className="bg-teal-700 text-white px-4 py-2 rounded">Apply Coupon</button>
              </div>
              <button className="text-sm text-gray-500 hover:text-black">Update Cart</button>
            </div>
          </div>

          {/* Cart Totals */}
          <div className="bg-white rounded-xl border  border-gray-300 p-6 w-full self-start">
            <h2 className="text-md font-semibold mb-4">Cart Totals</h2>
            <div className="space-y-4 text-sm">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-semibold">$250.00</span>
              </div>
              <div className="flex justify-between">
                <span>Estimated Delivery</span>
                <span className="font-semibold">Free</span>
              </div>
              <div className="flex justify-between">
                <span>Estimated Taxes</span>
                <span className="font-semibold">USD 10.00</span>
              </div>
            </div>

            <div className="mt-4 bg-gray-100 px-4 py-2 flex justify-between font-semibold">
              <span>Total</span>
              <span>$250.00</span>
            </div>

            <button className="mt-6 w-full bg-teal-700 hover:bg-teal-800 text-white py-2 rounded">
              Proceed to checkout
            </button>
          </div>
        </div>
      </div>
    </div>
    <Features/>
    </>
  );
};

export default CartTable;
