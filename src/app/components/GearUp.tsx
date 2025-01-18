"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { client } from "../../sanity/lib/client"; // Assuming you have Sanity client set up

interface Product {
  _id: string;
  productName: string;
  description: string;
  price: number;
  category: string;
  inventory: number;
  status: string;
  colors?: string[];
  imageUrl: string;
}

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);

  // Fetch products from Sanity
  useEffect(() => {
    const fetchProducts = async () => {
      const query = `*[_type == "product"] [0..3] {
        _id,
        productName,
        description,
        price,
        category,
        inventory,
        status,
        colors,
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
        <h1 className="text-lg sm:text-xl font-medium">Explore Our Products</h1>
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
                alt={product.productName}
                fill
                className="object-contain p-4 transform group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
            </div>

            {/* Product Info */}
            <div className="space-y-1 text-center sm:text-left">
              <h2 className="font-medium text-sm sm:text-base">
                {product.productName}
              </h2>
              {/* <p className="text-gray-600 text-xs sm:text-sm">{product.description}</p> */}
              <p className="font-medium text-sm sm:text-base">
                ₹ {product.price.toLocaleString("en-IN")}
              </p>
              <p className="text-gray-500 text-xs sm:text-sm">
                Category: {product.category}
              </p>
              <p className="text-gray-500 text-xs sm:text-sm">
                Inventory: {product.inventory > 0 ? `${product.inventory} in stock` : "Out of stock"}
              </p>
              <p className="text-gray-500 text-xs sm:text-sm">
                Status: {product.status}
              </p>
              {product.colors && product.colors.length > 0 && (
                <div className="mt-2">
                  <p className="text-gray-500 text-xs sm:text-sm">Colors:</p>
                  <div className="flex space-x-2">
                    {product.colors.map((color, index) => (
                      <div
                        key={index}
                        className="w-6 h-6 rounded-full border border-gray-300"
                        style={{ backgroundColor: color }}
                        title={color}
                      ></div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
