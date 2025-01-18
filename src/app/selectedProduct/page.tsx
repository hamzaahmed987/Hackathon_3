import Image from "next/image";

export default function Selected() {
  return (
    <>
      <div className="max-w-[1440px] max-h-[1173px] p-4 flex flex-col items-center">

        <div className="flex flex-col items-center max-w-[1200px] max-h-[1125px] md:flex-row md:items-start gap-8">
          {/* Image Section */}
          <div className="flex-shrink-0 w-full md:w-1/2 max-w-[653px]">
            <Image src={"/shoe.png"} alt="product" width={653} height={653} className="object-cover" />
          </div>

          {/* Details Section */}
          <div className="flex flex-col items-start justify-center w-full md:w-1/2 max-w-[376px] p-6">
            <h2 className="text-2xl font-bold mb-4">Nike Air Force 1 PLT.AF.ORM</h2>

            <p className="text-[15px] text-[#111111] font-poppins overflow-hidden text-ellipsis whitespace-normal line-clamp-4">
              Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its "inside out"-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.
            </p>

            <div className="flex flex-col items-start gap-2 mt-4">
              <h4 className="text-[36px] text-[#111111] font-medium font-poppins">₹ 8,695.00</h4>
              <button className="bg-black text-white py-2 px-6 rounded-lg hover:bg-gray-800 transition-colors">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
