import Image from "next/image";

export default function CheckoutForm() {
  return (
    <div className="mx-auto max-w-[880px] p-6 space-y-6">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left Column - Delivery Form */}
        <div className="flex-1 max-w-full">
          {/* How would you like to get your order? */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-2">
              How would you like to get your order?
            </h2>
            <p className="text-sm text-gray-600 mb-4">
              Let me know exactly how you would like to get the shipment. For sure we ensure you we
              will have it to order within 2 days time. You will get to track your order and receive
              it at your doorstep. We will make sure you get the best service from us and we will be
              there to solve any problems you face during your shipping delivery. Please click on
              any of the icons and proceed to your order.
            </p>
            <select className="w-full border rounded-md p-2 mb-6">
              <option>Option 1</option>
            </select>
          </div>

          {/* Enter your name and address */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-4">Enter your name and address:</h2>
            <div className="space-y-4">
              <input type="text" placeholder="First Name" className="w-full border rounded-md p-2" />
              <input type="text" placeholder="Last Name" className="w-full border rounded-md p-2" />
              <input
                type="text"
                placeholder="Address Line 1"
                className="w-full border rounded-md p-2"
              />
              <input
                type="text"
                placeholder="Address Line 2"
                className="w-full border rounded-md p-2"
              />
              <input
                type="text"
                placeholder="Address Line 3"
                className="w-full border rounded-md p-2"
              />
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="text"
                  placeholder="Postal Code"
                  className="w-full border rounded-md p-2"
                />
                <input
                  type="text"
                  placeholder="Locality"
                  className="w-full border rounded-md p-2"
                />
              </div>
              <select className="w-full border rounded-md p-2">
                <option>Select Country</option>
              </select>
              <select className="w-full border rounded-md p-2">
                <option>Select State</option>
              </select>
              <div className="flex items-center gap-2">
                <input type="checkbox" id="save-address" />
                <label htmlFor="save-address" className="text-sm">
                  Make this my preferred address
                </label>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-4">What's your contact information?</h2>
            <div className="space-y-4">
              <input
                type="email"
                placeholder="Email"
                className="w-full border rounded-md p-2"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full border rounded-md p-2"
              />
            </div>
          </div>

          {/* PIN */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-4">What's your PIN?</h2>
            <input
              type="text"
              placeholder="PIN"
              className="w-full border rounded-md p-2"
            />
          </div>

          {/* Continue Button */}
          <div className="space-y-2">
            <button className="w-full bg-gray-100 py-2 rounded-md">Continue</button>
            <div className="border-t pt-4 mt-4">
              <div className="text-sm font-medium">Delivery</div>
              <div className="space-y-2 mt-2 text-sm text-gray-600">
                <div>Shipping</div>
                <div>Billing</div>
                <div>Payment</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Order Summary */}
        <div className="max-w-full lg:max-w-[320px] bg-white p-4 rounded-lg">
          <h2 className="font-semibold mb-4">Order Summary</h2>
          <div className="space-y-4">
            {/* Product 1 */}
            <div className="flex gap-4">
              <div className="w-20 h-20 bg-gray-100 rounded-md">
                <Image
                  src="/cart.png"
                  width={416}
                  height={416}
                  alt="T-shirt"
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
              <div>
                <h3 className="font-medium">Men's T-shirt</h3>
                <p className="text-sm text-gray-600">Size: M</p>
                <p className="text-sm text-gray-600">Color: Blue</p>
              </div>
            </div>
            {/* Product 2 */}
            <div className="flex gap-4">
              <div className="w-20 h-20 bg-gray-100 rounded-md">
                <Image
                  src="/shoe.png"
                  width={416}
                  height={416}
                  alt="Sneakers"
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
              <div>
                <h3 className="font-medium">Nike Air Max</h3>
                <p className="text-sm text-gray-600">Size: 42</p>
                <p className="text-sm text-gray-600">Color: Gray</p>
              </div>
            </div>
            {/* Total */}
            <div className="border-t pt-4">
              <div className="flex justify-between mb-2">
                <span>Total</span>
                <span>₹ 999.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
