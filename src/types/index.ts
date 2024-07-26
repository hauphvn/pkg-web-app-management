export interface IProduct {
    productID: string;
    productName: string;
    productCode?: string;
    store?: string;
    warranty?: string;
    unit?: string;
    importPrice?: string;
    salePrice: string;
    discount?: string;
    priceAfterDiscount?: string;
    quantity?: string;
    weight?: string;
    length?: string;
    width?: string;
    height?: string;
    isContactPrice?: boolean;
    isOnlineSale?: boolean;
}