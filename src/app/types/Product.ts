// types/Product.ts
export interface Product {
    id: string;
    name: string;
    category: string;
    price: number;
    colors: number;
    images: string[]; // Array of image URLs
    label?: string;
  }
  