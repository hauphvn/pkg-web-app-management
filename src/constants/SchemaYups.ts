import * as yup from 'yup'
import {stringNormal, stringRequired} from "./YupValidation.ts";

export const formLoginSchema = () => {
    return yup.object().shape({
        account: stringRequired,
        password: stringRequired,
        keyEnv: stringRequired,
    })
}

export const formAddEditProduct = () => {
    return yup.object().shape({
        productName: stringRequired,
        store: stringNormal,
        warranty: stringNormal,
        unit: stringNormal,
        importPrice: stringNormal,
        salePrice: stringNormal,
        discount: stringNormal,
        priceAfterDiscount:stringNormal,
        quantity: stringNormal,
        weight: stringNormal,
        length: stringNormal,
        width: stringNormal,
        height: stringNormal,
        isContactPrice: yup.boolean(),
        isOnlineSale: yup.boolean(),
    })
}
export const formImportWarehouseProduct = () => {
    return yup.object().shape({
        productName: stringRequired,
       remainingQuantity: stringNormal,
        additionalQuantity: stringNormal,
    })
}
export const formImportWarehouseProductDefault ={
    productName: '',
    remainingQuantity: '',
    additionalQuantity: '',
}
export const formAddEditProductDefault = {
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
    password: '',
    keyEnv: '',
}