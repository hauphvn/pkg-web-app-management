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

export interface IResProduct {
    key: string;
    productID: string;
    productName: string;
    image: string;
    productCode: string;
    amount: string;
    price: string;
}

export interface IResProductEditSelected {
    productID: string;
    productName: string;
    productCode: string;
    quantity: string;
    actionType: 'update' | 'delete' | 'import-warehouse' | 'unknown';
    salePrice: string;
}
