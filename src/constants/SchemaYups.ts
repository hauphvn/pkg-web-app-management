import * as yup from 'yup'
import {stringRequired} from "./YupValidation.ts";

export const formLoginSchema = () => {
    return yup.object().shape({
        account: stringRequired,
        password: stringRequired
    })
}

export const formLoginDefault = {
    account: '',
    password: ''
}