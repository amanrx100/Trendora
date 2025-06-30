import React from "react";
import AuthNavbar from "../Login/AuthNavbar";
import Features from "../Login/Features";

const CheckoutPage = () => {
  const cartItems = [
    { id: 1, name: "HP Chromebook With Intel Celeron", price: 250 },
    { id: 2, name: "HP Chromebook With Intel Celeron", price: 250 },
    { id: 3, name: "HP Chromebook With Intel Celeron", price: 250 },
    { id: 4, name: "HP Chromebook With Intel Celeron", price: 250 },
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <>
    <AuthNavbar />
    <div className="bg-white py-10 px-4 lg:px-12">
      {/* Coupon */}
      <div className="max-w-7xl mx-auto mb-8">
        <p className="border border-gray-300 text-sm text-gray-600 px-4 py-3 rounded">
          Have a coupon?{" "}
          <span className="text-black font-medium cursor-pointer">Click here to enter your code</span>
        </p>
      </div>

      {/* Checkout Form */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10">
        {/* Billing Form */}
        <div className="w-full lg:w-2/3 space-y-6">
          {/* Name Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input placeholder="First Name" className="w-full border border-gray-300 rounded px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400" />
            <input placeholder="Last Name" className="w-full border border-gray-300 rounded px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400" />
          </div>

          <input placeholder="Business Name" className="w-full border border-gray-300 rounded px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400" />
          <input placeholder="United states (US)" className="w-full border border-gray-300 rounded px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400" />
          <input placeholder="House number and street name" className="w-full border border-gray-300 rounded px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400" />
          <input placeholder="Apartment, suite, etc. (optional)" className="w-full border border-gray-300 rounded px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400" />
          <input placeholder="City" className="w-full border border-gray-300 rounded px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400" />
          <input placeholder="Sans Fransisco" className="w-full border border-gray-300 rounded px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"/>
          <input placeholder="Post Code" className="w-full border border-gray-300 rounded px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400" />
          <input placeholder="Phone" className="w-full border border-gray-300 rounded px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400" />
          <input placeholder="Email Address" className="w-full border border-gray-300 rounded px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"/>

          <div>
            <h3 className="font-semibold text-sm text-gray-900 mb-2">Additional Information</h3>
            <textarea
              placeholder="Notes about your order, e.g. special notes for delivery."
              className="w-full border border-gray-300 rounded px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
        </div>

        {/* Order Summary */}
        <div className="w-full lg:w-1/3">
          <div className="bg-gray-50 border border-gray-200 rounded p-6">
            <h3 className="text-base font-semibold mb-4">Your Orders</h3>

            <div className="flex justify-between border-b pb-2 font-semibold text-sm">
              <span>Product</span>
              <span>Subtotal</span>
            </div>

            {cartItems.map((item, i) => (
              <div key={i} className="flex justify-between py-2 border-b text-sm text-gray-700">
                <span>{item.name} × 1</span>
                <span className="font-semibold">${item.price.toFixed(2)}</span>
              </div>
            ))}

            <div className="flex justify-between font-semibold text-sm py-3 border-b">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>

            <div className="flex justify-between font-semibold text-sm py-3">
              <span>Total</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>

            {/* Payment Methods */}
            <div className="space-y-3 mt-4 text-sm text-gray-700">
              <label className="flex items-center gap-2">
                <input type="radio" name="payment" defaultChecked className="accent-blue-600" />
                <span>Direct Bank transfer</span>
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="payment" className="accent-blue-600" />
                <span>Check payments</span>
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="payment" className="accent-blue-600" />
                <span>Cash on delivery</span>
              </label>
            </div>

            {/* Place Order */}
            <button className="w-full bg-cyan-700 text-white py-2 mt-6 rounded hover:bg-cyan-600 transition">
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
    <Features />
    </>
  );
};

export default CheckoutPage;
