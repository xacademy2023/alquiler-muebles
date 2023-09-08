export interface Product {
  id?: number;
  name: string;
  shortDescription: string;
  description: string;
  price: number;
  stock: number;
  category: string;
  coverImage: string;
  images: string[];
}
