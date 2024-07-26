import * as yup from 'yup'
import {stringRequired} from "./YupValidation.ts";

export const formLoginSchema = () => {
    return yup.object().shape({
        account: stringRequired,
        password: stringRequired
    })
}

export const formAddProduct = () => {
    return yup.object().shape({
        productName: stringRequired,
        store: stringRequired,
        warranty: stringRequired,
        unit: stringRequired,
        importPrice: stringRequired,
        salePrice: stringRequired,
        discount: stringRequired,
        priceAfterDiscount: stringRequired,
        quantity: stringRequired,
        weight: stringRequired,
        length: stringRequired,
        width: stringRequired,
        height: stringRequired,
        isContactPrice: yup.boolean(),
        isOnlineSale: yup.boolean(),
    })
}
export const formAddProductDefault = {
    productName: '',
    store: '',
    warranty: '',
    unit: '',
    importPrice: '',
    salePrice: '',
    discount: '',
    priceAfterDiscount: '',
    quantity: '',
    weight: '',
    length: '',
    width: '',
    height: '',
    isContactPrice: false,
    isOnlineSale: false,
}
export const formLoginDefault = {
    account: '',
    password: ''
}