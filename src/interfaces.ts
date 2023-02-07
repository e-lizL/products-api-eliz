export interface IProduct {
  category: string;
  title: string;
  description: string;
  price: number;
  stock: number;
}

export interface ISelectOrder {
  order: string;
  setOrder: (p: string) => void;
}