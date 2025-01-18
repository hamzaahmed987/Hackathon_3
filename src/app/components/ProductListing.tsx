
"use client"

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { client } from "../../sanity/lib/client"; // Sanity client

interface Product {
  _id: string;
  name: string;
  category: string;
  price: number;
  imageUrl: string;
}

export default function ProductListing() {
  const [products, setProducts] = useState<Product[]>([]);

  // Fetch products from Sanity
  useEffect(() => {
    const fetchProducts = async () => {
      const query = `*[_type == "product"][0...4]{
        _id,
        name,
        category,
        price,
        "imageUrl": image.asset->url
      }`;
      const result: Product[] = await client.fetch(query);
      setProducts(result);
    };

    fetchProducts();
  }, []);

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8 max-w-[1440px] h-604 mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 space-y-4 sm:space-y-0">
        <h1 className="text-lg sm:text-xl font-medium">Best of Air Max</h1>
        <div className="flex items-center gap-4">
          <button className="text-sm font-medium hover:underline">Shop</button>
          <div className="flex gap-2">
            <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product._id}
            className="group cursor-pointer flex flex-col items-start"
          >
            {/* Product Image */}
            <div className="relative w-full aspect-square bg-[#f5f5f5] mb-4 rounded-lg overflow-hidden">
              <Image
                src={product.imageUrl}
                alt={product.name}
                fill
                className="object-contain p-4 transform group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
            </div>

            {/* Product Info */}
            <div className="space-y-1 text-center sm:text-left">
              <h2 className="font-medium text-sm sm:text-base">
                {product.name}
              </h2>
              <p className="text-gray-600 text-xs sm:text-sm">
                {product.category}
              </p>
              <p className="font-medium text-sm sm:text-base">
                ₹ {product.price.toLocaleString("en-IN")}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
