import React from "react";
import AuthNavbar from '../Login/AuthNavbar';
import Features from '../Login/Features';
import w1 from '../../assets/w1.png';
import w2 from '../../assets/w2.png';
import w3 from  '../../assets/w3.png';
import w4 from '../../assets/w4.png';

const CartPage = () => {
  const cartItems = [
    {
      name: "Taylor Farms Broccoli Florets Vegetables",
      price: "$125.00",
      stock: "In Stock",
      image: w1,
    },
    {
      name: "Smart Phone With Intel Celeron",
      price: "$125.00",
      stock: "In Stock",
      image: w2,
    },
    {
      name: "HP Chromebook With Intel Celeron",
      price: "$125.00",
      stock: "In Stock",
      image: w3,
    },
    {
      name: "Smart Watch With Intel Celeron",
      price: "$125.00",
      stock: "In Stock",
      image: w4,
    },
  ];

  return (
    <>
      <AuthNavbar />

      <div className="container mx-auto p-4">
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 px-4 py-2 text-left">Delete</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Product Name</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Unit Price</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Stock Status</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item, index) => (
                <tr key={index} className="bg-white hover:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-4">
                    <button className="text-black hover:text-red-600 hover:underline">❌ Remove</button>
                  </td>
                  <td className="border border-gray-300 px-4 py-4">
                    <div className="flex items-center gap-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 rounded object-cover"
                      />
                      <div>
                        <p className="font-semibold">{item.name}</p>
                        <div className="flex items-center text-xs text-gray-600 gap-2 mt-1">
                          <span>⭐ 4.8</span>
                          <span>|</span>
                          <span>128 Reviews</span>
                        </div>
                        <button className="mt-2 px-3 py-1 text-xs rounded bg-gray-100 hover:bg-gray-200">
                          Add To Cart 🛒
                        </button>
                      </div>
                    </div>
                  </td>
                  <td className="border border-gray-300 px-4 py-4 font-medium">{item.price}</td>
                  <td className="border border-gray-300 px-4 py-4 font-medium text-black">
                    {item.stock}
                  </td>
                  <td className="border border-gray-300 px-4 py-4">
                    <button className="bg-cyan-700 hover:bg-cyan-600 text-white px-4 py-2 rounded">
                      Add To Cart 🛒
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <Features />
    </>
  );
};

export default CartPage;
