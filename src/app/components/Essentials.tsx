import Image from "next/image";

export default function Essentials() {
  return (
    <div className="max-w-[1344px] mx-auto px-4 py-8 space-y-12">
      {/* Heading */}
      <h1 className="text-2xl sm:text-3xl font-bold text-center md:text-left">
        The Essentials
      </h1>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Men's Section */}
        <div className="relative aspect-[4/5] bg-gray-200 rounded-lg overflow-hidden">
          <Image
            src="/e3.png" // Replace with your image
            alt="Men's Essentials"
            fill
            className="object-cover"
          />
        </div>

        {/* Women's Section */}
        <div className="relative aspect-[4/5] bg-gray-200 rounded-lg overflow-hidden">
          <Image
            src="/e1.png" // Replace with your image
            alt="Women's Essentials"
            fill
            className="object-cover"
          />
        </div>

        {/* Kids' Section */}
        <div className="relative aspect-[4/5] bg-gray-200 rounded-lg overflow-hidden">
          <Image
            src="/e2.png" // Replace with your image
            alt="Kids' Essentials"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Links Section */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-sm px-4 md:px-0">
        {/* Icons */}
        <div>
          <h2 className="font-semibold mb-2">Icons</h2>
          <ul className="space-y-1 text-gray-600">
            <li>Air Force 1</li>
            <li>Huarache</li>
            <li>Air Max 90</li>
            <li>Air Max 95</li>
          </ul>
        </div>

        {/* Shoes */}
        <div>
          <h2 className="font-semibold mb-2">Shoes</h2>
          <ul className="space-y-1 text-gray-600">
            <li>All Shoes</li>
            <li>Custom Shoes</li>
            <li>Jordan Shoes</li>
            <li>Running Shoes</li>
          </ul>
        </div>

        {/* Clothing */}
        <div>
          <h2 className="font-semibold mb-2">Clothing</h2>
          <ul className="space-y-1 text-gray-600">
            <li>All Clothing</li>
            <li>Modest Wear</li>
            <li>Hoodies & Pullovers</li>
            <li>Shirts & Tops</li>
          </ul>
        </div>

        {/* Kids */}
        <div>
          <h2 className="font-semibold mb-2">Kids&apos;</h2>
          <ul className="space-y-1 text-gray-600">
            <li>Infant & Toddler Shoes</li>
            <li>Kids&apos; Shoes</li>
            <li>Kids&apos; Jordan Shoes</li>
            <li>Kids&apos; Basketball Shoes</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
