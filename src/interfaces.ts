export interface IProduct {
  category: string;
  title: string;
  description: string;
  price: number;
  stock: number;
  id: number;
}

export interface ISelectOrder {
  order: string;
  setOrder: (p: string) => void;
}

export interface ISearch {
  productData: IProduct[];
  setProductsData: (p: any) => void;
}