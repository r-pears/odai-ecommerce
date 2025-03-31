export interface Product {
    id: string;
    name: string;
    price: number;
    description: string;
    image: string;
    category: string;
    stock: number;
    rating?: number;
    reviews?: Review[];
}

interface Review {
    id: string;
    user: string;
    rating: number;
    comment: string;
    date: string;
  }