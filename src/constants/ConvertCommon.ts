import {statusCodes} from "./index.ts";

const FormatCurrency = (value: number) => {
    return value.toLocaleString('vi', {style: 'currency', currency: 'VND'});
}

const MapStatusCodeInternal = (statusCode: number): string => {
    let message ='Lỗi hệ thống. Vui lòng thử lại sau';
    const index = statusCodes.findIndex(item => item.statusCodes === statusCode);
    if(index !== -1){
        message = statusCodes[index].message;
    }
    return message;
}
export {FormatCurrency, MapStatusCodeInternal};