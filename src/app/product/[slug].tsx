'use client';

// product/[slug].tsx
import { useRouter } from "next/router";
import { client } from "../../sanity/lib/client";

interface Product {
  _id: string;
  productName: string;
  description: string;
  price: number;
  category: string;
  inventory: number;
  status: string;
  colors: string[];
  imageUrl: string;
}

export default function ProductPage({ product }: { product: Product }) {
  return (
    <div className="product-details">
      <img src={product.imageUrl} alt={product.productName} />
      <h1>{product.productName}</h1>
      <p>{product.description}</p>
      <p>Price: ₹ {product.price}</p>
      <p>Category: {product.category}</p>
      <p>Inventory: {product.inventory}</p>
      {/* Add more product details as needed */}
    </div>
  );
}

// Get the product data based on the slug
export async function getServerSideProps({ params }: { params: { slug: string } }) {
  const query = `*[_type == "product" && slug.current == $slug][0] {
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

  const product = await client.fetch(query, { slug: params.slug });

  return {
    props: {
      product,
    },
  };
}
