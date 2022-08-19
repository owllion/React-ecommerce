export interface ICoupon {
  code: string;
  discountType: string;
  amount: number;
  expiryDate: Date;
  minimumAmount: number;
  isUsed: boolean;
}

export interface IApplyCoupon {
  code: string;
  totalPrice: number;
}
