export default function FlightEssentials() {
  return (
    <div className="mx-auto max-w-[1344px] px-4 py-8 flex flex-col items-center space-y-8">
      {/* Heading Section */}
      <div className="w-full">
        <h4 className="text-2xl sm:text-3xl font-bold mb-4 text-left">
          Don't Miss
        </h4>
      </div>

      {/* Image Section */}
      <div className="relative w-full aspect-[4/3] bg-gray-200 rounded-lg overflow-hidden">
        <img
          src="/dm.png"
          alt="Flight Essentials"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Text Section */}
      <div className="text-center px-4">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">
          FLIGHT ESSENTIALS
        </h1>
        <p className="text-base sm:text-lg text-gray-600 mb-6">
          Your built-to-last, all-week wears—but with style only Jordan Brand
          can deliver.
        </p>
        <button className="px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition">
          Shop
        </button>
      </div>
    </div>
  );
}
