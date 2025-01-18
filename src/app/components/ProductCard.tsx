// components/ProductCard.tsx
import Image from 'next/image'
import { Product } from '../types/Product'

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group">
      {product.images.map((image, index) => (
        <div key={index} className="relative aspect-square mb-2">
          <Image
            src={image}
            alt={`${product.name} - ${index + 1}`}
            fill
            className="object-cover rounded-md"
          />
        </div>
      ))}
      {product.label && (
        <p className="text-red-600 text-sm mb-1">{product.label}</p>
      )}
      <h3 className="font-medium text-sm group-hover:underline">{product.name}</h3>
      <p className="text-gray-500 text-sm">{product.category}</p>
      <p className="text-gray-500 text-sm">{product.colors} Colour</p>
      <p className="font-medium text-sm">MRP : ₹ {product.price.toLocaleString()}</p>
    </div>
  );
}
