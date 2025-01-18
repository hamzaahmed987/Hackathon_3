import Image from "next/image";
import Link from "next/link";
import { Heart, Trash2 } from "lucide-react";

export default function ShoppingCart() {
  return (
    <div className="mx-auto max-w-[1100px] p-4">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Delivery Section - Left Side */}
        <div className="flex-1">
          <div className="bg-gray-50 p-4 mb-6 rounded-lg">
            <div className="flex justify-between items-center">
              <h2 className="font-medium">Free Delivery</h2>
              <Link href="/delivery" passHref>
                <button className="text-sm underline">View details</button>
              </Link>
            </div>
            <p className="text-sm text-gray-600">
              Applies to orders of ₹ 14,000.00 or more.
            </p>
          </div>

          <h1 className="text-2xl font-bold mb-6">Bag</h1>

          <div className="space-y-6 max-h-[547px] overflow-auto">
            {/* First Product */}
            <div className="flex flex-col md:flex-row gap-4 border-b pb-6">
              <div className="w-24 h-24 bg-gray-100 rounded-lg overflow-hidden mx-auto md:mx-0">
                <Image
                  src="/cart.png"
                  alt="Nike Dri-FIT ADV TechKnit Ultra"
                  width={96}
                  height={96}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="flex-1">
                <div className="flex flex-col md:flex-row justify-between">
                  <div>
                    <h3 className="font-medium">
                      Nike Dri-FIT ADV TechKnit Ultra
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Men's Short-Sleeve Running Top
                    </p>
                    <p className="text-gray-600 text-sm">
                      Ashen Slate/Cobalt Bliss
                    </p>
                    <div className="flex flex-wrap gap-4 mt-2 text-sm">
                      <p>Size: L</p>
                      <p>Quantity: 1</p>
                    </div>
                  </div>
                  <p className="font-medium mt-2 md:mt-0">₹ 3,895.00</p>
                </div>
                <div className="flex gap-4 mt-4">
                  <button className="flex items-center gap-2 text-gray-600">
                    <Heart className="w-5 h-5" />
                  </button>
                  <button className="flex items-center gap-2 text-gray-600">
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Second Product */}
            <div className="flex flex-col md:flex-row gap-4 border-b pb-6">
              <div className="w-24 h-24 bg-gray-100 rounded-lg overflow-hidden mx-auto md:mx-0">
                <Image
                  src="/shoe.png"
                  alt="Nike Air Max 97 SE"
                  width={96}
                  height={96}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="flex-1">
                <div className="flex flex-col md:flex-row justify-between">
                  <div>
                    <h3 className="font-medium">Nike Air Max 97 SE</h3>
                    <p className="text-gray-600 text-sm">Men's Shoes</p>
                    <p className="text-gray-600 text-sm">
                      Flat Pewter/Light Bone/Black/White
                    </p>
                    <div className="flex flex-wrap gap-4 mt-2 text-sm">
                      <p>Size: 8</p>
                      <p>Quantity: 1</p>
                    </div>
                  </div>
                  <p className="font-medium mt-2 md:mt-0">₹ 16,995.00</p>
                </div>
                <div className="flex gap-4 mt-4">
                  <button className="flex items-center gap-2 text-gray-600">
                    <Heart className="w-5 h-5" />
                  </button>
                  <button className="flex items-center gap-2 text-gray-600">
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Summary Section - Right Side */}
        <div className="w-full md:w-[350px]">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-6">Summary</h2>
            <div className="space-y-4">
              <div className="flex justify-between">
                <p>Subtotal</p>
                <p className="font-medium">₹ 20,890.00</p>
              </div>
              <div className="flex justify-between">
                <p>Estimated Delivery & Handling</p>
                <p className="font-medium">Free</p>
              </div>
              <div className="border-t pt-4">
                <div className="flex justify-between">
                  <p className="font-bold">Total</p>
                  <p className="font-bold">₹ 20,890.00</p>
                </div>
              </div>
              <button className="w-full bg-black text-white py-4 rounded-full hover:bg-gray-800 transition-colors">
                Member Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
