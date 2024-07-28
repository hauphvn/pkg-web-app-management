const FormatCurrency = (value: number) => {
    return value.toLocaleString('vi', {style: 'currency', currency: 'VND'});
}

export {FormatCurrency};