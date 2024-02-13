export interface ICustomer {
  id: number;
  name: string;
  city: string;
  orderTotal?: number;
  customerSince: any;
}

export interface IOrder {
  customerId: number;
  orderItems: IOrderItem[];
}

export interface IOrderItem {
  id: number;
  productName: string;
  itemCost: number;
}

export interface IProduct {
  id?: number;
  title?: string;
  description?: string;
  brand?: string;
  category?: string;
  price?: number;
  discountPercentage?: number;
  rating?: number;
  stock?: number;
  thumbnail?: string;
  images?: any[];
}
