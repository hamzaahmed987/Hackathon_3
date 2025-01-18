export default function RelatedCategories() {
    const categories = [
      "Best Selling Products",
      "Best Shoes",
      "New Basketball Shoes",
      "New Football Shoes",
      "New Men's Shoes",
      "New Running Shoes",
      "Best Men's Shoes",
      "New Jordan Shoes",
      "Best Women's Shoes",
      "Best Training & Gym"
    ]
  
    return (
      <div className="max-w-[1092px] max-h-[259px] p-6">
        <h2 className="text-xl font-medium mb-4">Related Categories</h2>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              className="px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors text-sm"
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    )
  }
  
  