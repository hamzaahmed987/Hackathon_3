export default function ProductHero() {
  return (
    <section className="w-full max-w-4xl mx-auto px-4 py-16 text-center">
      {/* First Look Label */}
      <p className="text-sm tracking-wide mb-4">
        First Look
      </p>

      {/* Product Title */}
      <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
        NIKE AIR MAX PULSE
      </h1>

      {/* Product Description */}
      <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
        Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse
        — designed to push you past your limits and help you go to the max.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <button className="min-w-[120px] bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors">
          Notify Me
        </button>
        <button className="min-w-[120px] bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors">
          Shop Air Max
        </button>
      </div>
    </section>
  )
}

