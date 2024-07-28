import Input from "../Input";
import {Slider, SliderSingleProps} from "antd";
import Switch from "../Swtich";
import ButtonGradient from "../ButtonGradient";
import {useEffect, useState} from "react";
import {FormatCurrency} from "../../constants";

const FilterProduct = () => {
    const [valueRange, setValueRange] = useState<number[]>([1000_000, 1000_000_000])
    const formatter: NonNullable<SliderSingleProps['tooltip']>['formatter'] = (value) => FormatCurrency(value ? value : 0);
    const [enableOutOfStock, setEnableOutOfStock] = useState(false);
    const [outOfStockValue, setOutOfStockValue] = useState('');

    function handleChange(value: number[]) {
        if (value[0] > value[1]) {
            return;
        }
        setValueRange(value)
    }

    useEffect(() => {
        if (!enableOutOfStock) {
            setOutOfStockValue('')
        }
    }, [enableOutOfStock])
    return (
        <div id={'filter-product-root'}
             className={'filter-product-root flex flex-col gap-y-[24px] bg-neutrals-50 shadow-button-1 border-[0.5px] border-neutrals-300 rounded-[8px] w-[222px] h-auto px-[8px] py-[10px]'}>
            <div className="price-filter flex gap-x-[4px]">
                <Input
                    className={'bg-neutrals-200 rounded-[4px] h-[30px] pl-[10px]'}
                    placeholder={'Giá nhập'}/>
                <Input
                    className={'bg-neutrals-200 rounded-[4px] h-[30px] pl-[10px]'}
                    placeholder={'Giá bán'}/>
            </div>
            <div>
                <Slider
                    tooltip={{formatter}}
                    onChange={(value) => handleChange(value)}
                    defaultValue={valueRange}
                    range={true}
                    id={'slider-price'}
                    min={1000_000}
                    max={1000_000_000}
                    step={100_000}
                />
                <div className={'flex justify-between'}>
                    <span className={'text-[10px]'}>Từ: {FormatCurrency(valueRange[0])} </span>
                    <span className={'text-[10px]'}>Đến: {FormatCurrency(valueRange[1])}</span>
                </div>
            </div>
            <div className={'out-off-stuck  flex gap-x-[58px]'}>
                <Input
                    onChange={(e) => setOutOfStockValue(e?.target?.value)}
                    value={outOfStockValue}
                    disabled={!enableOutOfStock} className={'bg-neutrals-200 rounded-[4px] h-[30px] pl-[10px]'}
                    placeholder={'Còn'}/>
                <Switch
                    checked={enableOutOfStock}
                    onChange={(checked) => setEnableOutOfStock(checked)}
                    size={'small'}/>
            </div>
            <ButtonGradient className={'h-[34px] w-full'} name={'Áp dụng'}/>
        </div>
    );
};

export default FilterProduct;