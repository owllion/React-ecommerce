export interface ICoupon {
  code: string;
  discountType: string;
  amount: number;
  expiryDate: Date;
  minimumAmount: number;
}
