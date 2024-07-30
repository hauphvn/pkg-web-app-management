import {Drawer} from "antd";
import Button from "../Button";
import ButtonGradient from "../ButtonGradient";
import {useEffect, useState} from "react";
import {Controller, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {formAddEditProduct, formAddEditProductDefault} from "../../constants/SchemaYups.ts";
import Input from "../Input";
import Select from "../Select";
import {IconSelectArrowLarge} from "../../assets/svgs/SVGIcon.tsx";
import Switch from "../Swtich";
import {
    BtnBold, BtnBulletList,
    BtnItalic, BtnLink, BtnNumberedList, BtnRedo, BtnStrikeThrough, BtnUnderline, BtnUndo, ContentEditableEvent,
    Editor,
    EditorProvider,
    Toolbar
} from 'react-simple-wysiwyg';
import ImageProductImport from "../ImageProductImport";
import {IProduct} from "../../types";
import {useTheme} from "../../context/ThemeContext.tsx";

interface UpdateProductProps {
    show: boolean,
    onClose: () => void,
    onSubmit?: () => void,
    productEdit: IProduct
}

const UpdateProduct = (props: UpdateProductProps) => {
    const {isDarkMode} = useTheme();
    const [tabIndex, setTabIndex] = useState<'info' | 'desc' | 'image'>('info');
    const [htmlDescription, setHtmlDescription] = useState('');

    function preOnTabClick(type: 'info' | 'desc' | 'image') {
        setTabIndex(type);
    }

    const {
        formState: {errors, isDirty, isValid},
        control: controlEditProduct,
        reset
    } = useForm({
        resolver: yupResolver(formAddEditProduct()),
        mode: 'all',
        defaultValues: formAddEditProductDefault
    })

    function onChangeEditorDescription(e: ContentEditableEvent) {
        setHtmlDescription(e.target.value);
    }

    useEffect(() => {
        reset({
            productName: props.productEdit?.productName,
            store: props.productEdit?.store,
            warranty: props.productEdit?.warranty,
            unit: props.productEdit?.unit,
            importPrice: props.productEdit?.importPrice,
            salePrice: props.productEdit?.salePrice,
            discount: props.productEdit?.discount,
            priceAfterDiscount: props.productEdit?.priceAfterDiscount,
            quantity: props.productEdit?.quantity,
            weight: props.productEdit?.weight,
            length: props.productEdit?.length,
            width: props.productEdit?.width,
            height: props.productEdit?.height,
            isContactPrice: props.productEdit?.isContactPrice,
            isOnlineSale: props.productEdit?.isOnlineSale,
        })
    }, [props.productEdit?.productID])
    return (
        <Drawer
            width={489}
            className={'update-product-drawer transition-all duration-300'}
            styles={{
                body: {background: isDarkMode ? 'var(--color-dark-2E2E)' : ''},
                header: {
                    paddingBottom: 0,
                    background: isDarkMode ? 'var(--color-dark-2E2E)' : '',
                    borderBottomColor: isDarkMode ? 'var(--color-dark-2727)' : '--color-neutrals-50'
                },
            }}
            title={<div
                className={`${isDarkMode ? 'text-neutrals-400' : 'text-semantics-grey01'}  text-[32px] font-[500]`}>
                {props?.productEdit?.productCode}</div>}
            destroyOnClose maskClosable={false} closeIcon={null} onClose={props.onClose}
            open={props.show}>
            <div id={'update-product-container'}
                 className={`${isDarkMode ? 'bg-darkGrey-2E2E' : ''} add-new-product-container flex justify-between flex-col h-full w-[435px]`}>
                <div className="update-contents-container w-full">
                    <div className="actions-tab flex mb-[24px] fixed w-full gap-x-[17px] ">
                        <div
                            onClick={() => preOnTabClick('info')}
                            className={`
                             ${tabIndex === 'info' ? (isDarkMode ? ' border-[1.5px] border-darkGrey-3838 bg-darkGrey-2E2E text-neutrals-400 font-[600]' : ' border-[1.5px] border-greenFrom bg-semantics-green03 text-semantics-green01 font-[600]') : (isDarkMode ? 'bg-darkGrey-3333 text-neutrals-600 ' : 'bg-neutrals-50 text-neutrals-700')}'} 
                              hover:cursor-pointer rounded-[8px] flex justify-center items-center  w-[131px] h-[42px]`}>
                            Thông tin
                        </div>
                        <div
                            onClick={() => preOnTabClick('desc')}
                            className={`
                            ${tabIndex === 'desc' ? (isDarkMode ? ' border-[1.5px] border-darkGrey-3838 bg-darkGrey-2E2E text-neutrals-400 font-[600]' : ' border-[1.5px] border-greenFrom bg-semantics-green03 text-semantics-green01 font-[600]') : (isDarkMode ? 'bg-darkGrey-3333 text-neutrals-600 ' : 'bg-neutrals-50 text-neutrals-700')}'} 
                                hover:cursor-pointer rounded-[8px] flex justify-center items-center  w-[131px] h-[42px]`}>
                            Mô tả
                        </div>
                        <div
                            onClick={() => preOnTabClick('image')}
                            className={`
                             ${tabIndex === 'image' ? (isDarkMode ? ' border-[1.5px] border-darkGrey-3838 bg-darkGrey-2E2E text-neutrals-400 font-[600]' : ' border-[1.5px] border-greenFrom bg-semantics-green03 text-semantics-green01 font-[600]') : (isDarkMode ? 'bg-darkGrey-3333 text-neutrals-600 ' : 'bg-neutrals-50 text-neutrals-700')}'} 
                               hover:cursor-pointer  rounded-[8px] flex justify-center items-center  w-[131px] h-[42px]`}>
                            Hình ảnh
                        </div>
                    </div>
                    <div
                        className={`${tabIndex === 'info' ? 'visible' : 'hidden'} form-container mt-[70px] max-h-[75vh] overflow-y-scroll scroll-smooth`}>
                        <Controller
                            control={controlEditProduct}
                            name='productName'
                            render={({field: {onChange, onBlur, value}}) => (
                                <div className={'control h-[98px] px-[2px]'}>
                                    <label htmlFor={'productName'}
                                           className={'label text-[12px] font-[500] text-neutrals-700 pb-[7px]'}>
                                        Tên sản phẩm
                                        <span className={'text-semantics-red02'}>*</span>
                                    </label>
                                    <div className={'relative flex '}>
                                        <div className={'w-full max-h-[50px]'}>
                                            <Input
                                                warning={errors.productName?.message}
                                                id={'account'}
                                                className={`${isDarkMode ? 'bg-darkGrey-3636 border-darkGrey-2E2E placeholder-semantics-grey02 text-semantics-grey03 ' : 'bg-neutrals-200'} h-[50px] pl-[11px]`}
                                                placeholder={'Nhập tên sản phẩm'}
                                                onChange={onChange}
                                                onBlur={onBlur}
                                                value={value || ''}
                                            />
                                        </div>
                                        <span
                                            className={'absolute bottom-[-17px] text-semantics-red02 text-[12px]'}>
                                                {errors.productName?.message || ''}
                                            </span>
                                    </div>
                                </div>
                            )}
                        />
                        <Controller
                            control={controlEditProduct}
                            name='store'
                            render={() => (
                                <div className={'control h-[92px]'}>
                                    <label htmlFor={'store'}
                                           className={'label text-[12px] font-[500] text-neutrals-700 pb-[7px]'}>
                                        Cửa hàng
                                        <span className={'text-semantics-red02'}>*</span>
                                    </label>
                                    <div className={'relative flex px-[2px]'}>
                                        <div className={'w-full max-h-[50px]'}>
                                            <Select
                                                suffixIcon={<IconSelectArrowLarge/>}
                                                className={`control-add-product custom-select-dropdown ${isDarkMode ? 'placeholder-dark border-dark bg-darkGrey-2E2E rounded-[8px] select-dark-content ' : 'bg-neutrals-200 '} h-[50px] text-[12px]`}
                                                options={[]} placeholder={'Chọn cửa hàng'}/>
                                        </div>
                                        <span
                                            className={'absolute bottom-[-17px] text-semantics-red02 text-[12px]'}>
                                                {errors.store?.message || ''}
                                            </span>
                                    </div>
                                </div>
                            )}
                        />
                        <div
                            className={`${isDarkMode ? 'bg-darkGrey-3838' : 'bg-neutrals-300'} horizontal-line w-full h-[1px] mb-[16px]`}></div>
                        <div className={'text-semantics-red02 text-[12px] mb-[24px]'}>(*) Sản phẩm phải được nhập theo
                            giá ĐÃ TÍNH VAT
                        </div>
                        <div className="form-row flex gap-x-[40px] w-full flex-auto items-center">
                            <div className={'flex-1'}>
                                <Controller
                                    control={controlEditProduct}
                                    name='warranty'
                                    render={() => (
                                        <div className={'control h-[98px]'}>
                                            <label htmlFor={'warranty'}
                                                   className={'label text-[12px] font-[500] text-neutrals-700 pb-[7px]'}>
                                                Cửa hàng
                                                <span className={'text-semantics-red02'}>*</span>
                                            </label>
                                            <div className={'relative flex px-[2px] '}>
                                                <div className={'w-full max-h-[50px]'}>
                                                    <Select
                                                        suffixIcon={<IconSelectArrowLarge/>}
                                                        className={`control-add-product custom-select-dropdown ${isDarkMode ? 'placeholder-dark border-dark bg-darkGrey-2E2E rounded-[8px] select-dark-content ' : 'bg-neutrals-200 '} h-[50px] text-[12px]`}
                                                        options={[]} placeholder={'Thời gian bảo hành'}/>
                                                </div>
                                                <span
                                                    className={'absolute bottom-[-17px] text-semantics-red02 text-[12px]'}>
                                                {errors.warranty?.message || ''}
                                            </span>
                                            </div>
                                        </div>
                                    )}
                                />
                            </div>
                            <div className={'flex gap-x-[15px] flex-1 items-center'}>
                                <label className={'min-w-[109px] text-[14px] font-[500] text-neutrals-700'}
                                       htmlFor="isOnlineSale">Bán
                                    trực tuyến</label>
                                <Switch
                                />
                            </div>
                        </div>
                        <div className="form-row flex gap-x-[40px] w-full flex-auto items-center">
                            <div className={'flex-1'}>
                                <Controller
                                    control={controlEditProduct}
                                    name='unit'
                                    render={() => (
                                        <div className={'control h-[98px]'}>
                                            <label htmlFor={'unit'}
                                                   className={'label text-[12px] font-[500] text-neutrals-700 pb-[7px]'}>
                                                Đơn vị tính
                                                <span className={'text-semantics-red02'}>*</span>
                                            </label>
                                            <div className={'relative flex px-[2px] '}>
                                                <div className={'w-full max-h-[50px]'}>
                                                    <Select
                                                        suffixIcon={<IconSelectArrowLarge/>}
                                                        className={`control-add-product custom-select-dropdown ${isDarkMode ? 'placeholder-dark border-dark bg-darkGrey-2E2E rounded-[8px] select-dark-content ' : 'bg-neutrals-200 '} h-[50px] text-[12px]`}
                                                        options={[]} placeholder={'Đơn vị tính'}/>
                                                </div>
                                                <span
                                                    className={'absolute bottom-[-17px] text-semantics-red02 text-[12px]'}>
                                                {errors.unit?.message || ''}
                                            </span>
                                            </div>
                                        </div>
                                    )}
                                />
                            </div>
                            <div className={'flex gap-x-[15px] flex-1 items-center'}>
                                <label className={'min-w-[109px] text-[14px] font-[500] text-neutrals-700'}
                                       htmlFor="isOnlineSale">Giá liên hệ</label>
                                <Switch
                                />
                            </div>
                        </div>
                        <div className="form-row flex gap-x-[8px] w-full flex-auto items-center">
                            <div className={'flex-1'}>
                                <Controller
                                    control={controlEditProduct}
                                    name='importPrice'
                                    render={({field: {onChange, onBlur, value}}) => (
                                        <div className={'control h-[98px]'}>
                                            <label htmlFor={'productName'}
                                                   className={'label text-[12px] font-[500] text-neutrals-700 pb-[7px]'}>
                                                Giá nhập
                                                <span className={'text-semantics-red02'}>*</span>
                                            </label>
                                            <div className={'relative flex px-[2px] '}>
                                                <div className={'w-full max-h-[50px]'}>
                                                    <Input
                                                        warning={errors.importPrice?.message}
                                                        id={'account'}
                                                        className={`${isDarkMode ? 'bg-darkGrey-3636 border-darkGrey-2E2E placeholder-semantics-grey02 text-semantics-grey03 ' : 'bg-neutrals-200'} h-[50px] pl-[11px]`}
                                                        placeholder={'Nhập giá nhập'}
                                                        onChange={onChange}
                                                        onBlur={onBlur}
                                                        value={value || ''}
                                                    />
                                                </div>
                                                <span
                                                    className={'absolute bottom-[-17px] text-semantics-red02 text-[12px]'}>
                                                {errors.importPrice?.message || ''}
                                            </span>
                                            </div>
                                        </div>
                                    )}
                                />
                            </div>
                            <div className={'flex-1'}>
                                <Controller
                                    control={controlEditProduct}
                                    name='salePrice'
                                    render={({field: {onChange, onBlur, value}}) => (
                                        <div className={'control h-[98px]'}>
                                            <label htmlFor={'salePrice'}
                                                   className={'label text-[12px] font-[500] text-neutrals-700 pb-[7px]'}>
                                                Giá bán
                                                <span className={'text-semantics-red02'}>*</span>
                                            </label>
                                            <div className={'relative flex px-[2px] '}>
                                                <div className={'w-full max-h-[50px]'}>
                                                    <Input
                                                        warning={errors.salePrice?.message}
                                                        id={'account'}
                                                        className={`${isDarkMode ? 'bg-darkGrey-3636 border-darkGrey-2E2E placeholder-semantics-grey02 text-semantics-grey03 ' : 'bg-neutrals-200'} h-[50px] pl-[11px]`}

                                                        placeholder={'Nhập giá bán'}
                                                        onChange={onChange}
                                                        onBlur={onBlur}
                                                        value={value || ''}
                                                    />
                                                </div>
                                                <span
                                                    className={'absolute bottom-[-17px] text-semantics-red02 text-[12px]'}>
                                                {errors.salePrice?.message || ''}
                                            </span>
                                            </div>
                                        </div>
                                    )}
                                />
                            </div>
                        </div>
                        <div className="form-row flex gap-x-[8px] w-full flex-auto items-center">
                            <div className={'flex-1'}>
                                <Controller
                                    control={controlEditProduct}
                                    name='discount'
                                    render={({field: {onChange, onBlur, value}}) => (
                                        <div className={'control h-[92px]'}>
                                            <label htmlFor={'discount'}
                                                   className={'label text-[12px] font-[500] text-neutrals-700 pb-[7px]'}>
                                                Giảm giá
                                                <span className={'text-semantics-red02'}>*</span>
                                            </label>
                                            <div className={'relative flex px-[2px] '}>
                                                <div className={'w-full max-h-[50px]'}>
                                                    <Input
                                                        warning={errors.discount?.message}
                                                        id={'discount'}
                                                        className={`${isDarkMode ? 'bg-darkGrey-3636 border-darkGrey-2E2E placeholder-semantics-grey02 text-semantics-grey03 ' : 'bg-neutrals-200'} h-[50px] pl-[11px]`}

                                                        placeholder={'Giảm giá'}
                                                        onChange={onChange}
                                                        onBlur={onBlur}
                                                        value={value || ''}
                                                    />
                                                </div>
                                                <span
                                                    className={'absolute bottom-[-17px] text-semantics-red02 text-[12px]'}>
                                                {errors.discount?.message || ''}
                                            </span>
                                            </div>
                                        </div>
                                    )}
                                />
                            </div>
                            <div className={'flex-1'}>
                                <Controller
                                    control={controlEditProduct}
                                    name='priceAfterDiscount'
                                    render={({field: {onChange, onBlur, value}}) => (
                                        <div className={'control h-[92px]'}>
                                            <label htmlFor={'priceAfterDiscount'}
                                                   className={'label text-[12px] font-[500] text-neutrals-700 pb-[7px]'}>
                                                Giá sau giảm
                                                <span className={'text-semantics-red02'}>*</span>
                                            </label>
                                            <div className={'relative flex px-[2px] '}>
                                                <div className={'w-full max-h-[50px]'}>
                                                    <Input
                                                        warning={errors.salePrice?.message}
                                                        id={'priceAfterDiscount'}
                                                        className={`${isDarkMode ? 'bg-darkGrey-3636 border-darkGrey-2E2E placeholder-semantics-grey02 text-semantics-grey03 ' : 'bg-neutrals-200'} h-[50px] pl-[11px]`}

                                                        placeholder={'Giá sau giảm'}
                                                        onChange={onChange}
                                                        onBlur={onBlur}
                                                        value={value || ''}
                                                    />
                                                </div>
                                                <span
                                                    className={'absolute bottom-[-17px] text-semantics-red02 text-[12px]'}>
                                                {errors.priceAfterDiscount?.message || ''}
                                            </span>
                                            </div>
                                        </div>
                                    )}
                                />
                            </div>
                        </div>
                        <div
                            className={`${isDarkMode ? 'bg-darkGrey-3838' : 'bg-neutrals-300'} horizontal-line w-full h-[1px] mb-[16px]`}></div>
                        <div className="form-row flex gap-x-[8px] w-full flex-auto items-center">
                            <div className={'flex-1'}>
                                <Controller
                                    control={controlEditProduct}
                                    name='quantity'
                                    render={({field: {onChange, onBlur, value}}) => (
                                        <div className={'control h-[98px]'}>
                                            <label htmlFor={'quantity'}
                                                   className={'label text-[12px] font-[500] text-neutrals-700 pb-[7px]'}>
                                                Số lượng
                                                <span className={'text-semantics-red02'}>*</span>
                                            </label>
                                            <div className={'relative flex px-[2px] '}>
                                                <div className={'w-full max-h-[50px]'}>
                                                    <Input
                                                        warning={errors.quantity?.message}
                                                        id={'quantity'}
                                                        className={`${isDarkMode ? 'bg-darkGrey-3636 border-darkGrey-2E2E placeholder-semantics-grey02 text-semantics-grey03 ' : 'bg-neutrals-200'} h-[50px] pl-[11px]`}

                                                        placeholder={'Nhập số lượng'}
                                                        onChange={onChange}
                                                        onBlur={onBlur}
                                                        value={value || ''}
                                                    />
                                                </div>
                                                <span
                                                    className={'absolute bottom-[-17px] text-semantics-red02 text-[12px]'}>
                                                {errors.quantity?.message || ''}
                                            </span>
                                            </div>
                                        </div>
                                    )}
                                />
                            </div>
                            <div className={'flex-1'}>
                                <Controller
                                    control={controlEditProduct}
                                    name='weight'
                                    render={({field: {onChange, onBlur, value}}) => (
                                        <div className={'control h-[98px]'}>
                                            <label htmlFor={'weight'}
                                                   className={'label text-[12px] font-[500] text-neutrals-700 pb-[7px]'}>
                                                Khối lượng
                                                <span className={'text-semantics-red02'}>*</span>
                                            </label>
                                            <div className={'relative flex px-[2px] '}>
                                                <div className={'w-full max-h-[50px]'}>
                                                    <Input
                                                        warning={errors.weight?.message}
                                                        id={'account'}
                                                        className={`${isDarkMode ? 'bg-darkGrey-3636 border-darkGrey-2E2E placeholder-semantics-grey02 text-semantics-grey03 ' : 'bg-neutrals-200'} h-[50px] pl-[11px]`}

                                                        placeholder={'Nhập khối lượng'}
                                                        onChange={onChange}
                                                        onBlur={onBlur}
                                                        value={value || ''}
                                                    />
                                                </div>
                                                <span
                                                    className={'absolute bottom-[-17px] text-semantics-red02 text-[12px]'}>
                                                {errors.weight?.message || ''}
                                            </span>
                                            </div>
                                        </div>
                                    )}
                                />
                            </div>
                        </div>
                        <div className="form-row flex gap-x-[8px] w-full flex-auto items-center">
                            <div className={'flex-1'}>
                                <Controller
                                    control={controlEditProduct}
                                    name='length'
                                    render={({field: {onChange, onBlur, value}}) => (
                                        <div className={'control h-[98px]'}>
                                            <label htmlFor={'length'}
                                                   className={'label text-[12px] font-[500] text-neutrals-700 pb-[7px]'}>
                                                Dài(mm)
                                                <span className={'text-semantics-red02'}>*</span>
                                            </label>
                                            <div className={'relative flex px-[2px] '}>
                                                <div className={'w-full max-h-[50px]'}>
                                                    <Input
                                                        warning={errors.importPrice?.message}
                                                        id={'length'}
                                                        className={`${isDarkMode ? 'bg-darkGrey-3636 border-darkGrey-2E2E placeholder-semantics-grey02 text-semantics-grey03 ' : 'bg-neutrals-200'} h-[50px] pl-[11px]`}

                                                        placeholder={'Nhập chiều dài'}
                                                        onChange={onChange}
                                                        onBlur={onBlur}
                                                        value={value || ''}
                                                    />
                                                </div>
                                                <span
                                                    className={'absolute bottom-[-17px] text-semantics-red02 text-[12px]'}>
                                                {errors.length?.message || ''}
                                            </span>
                                            </div>
                                        </div>
                                    )}
                                />
                            </div>
                            <div className={'flex-1'}>
                                <Controller
                                    control={controlEditProduct}
                                    name='width'
                                    render={({field: {onChange, onBlur, value}}) => (
                                        <div className={'control h-[98px]'}>
                                            <label htmlFor={'width'}
                                                   className={'label text-[12px] font-[500] text-neutrals-700 pb-[7px]'}>
                                                Rộng(mm)
                                                <span className={'text-semantics-red02'}>*</span>
                                            </label>
                                            <div className={'relative flex px-[2px] '}>
                                                <div className={'w-full max-h-[50px]'}>
                                                    <Input
                                                        warning={errors.width?.message}
                                                        id={'width'}
                                                        className={`${isDarkMode ? 'bg-darkGrey-3636 border-darkGrey-2E2E placeholder-semantics-grey02 text-semantics-grey03 ' : 'bg-neutrals-200'} h-[50px] pl-[11px]`}

                                                        placeholder={'Nhập chiều rộng'}
                                                        onChange={onChange}
                                                        onBlur={onBlur}
                                                        value={value || ''}
                                                    />
                                                </div>
                                                <span
                                                    className={'absolute bottom-[-17px] text-semantics-red02 text-[12px]'}>
                                                {errors.width?.message || ''}
                                            </span>
                                            </div>
                                        </div>
                                    )}
                                />
                            </div>
                            <div className={'flex-1'}>
                                <Controller
                                    control={controlEditProduct}
                                    name='height'
                                    render={({field: {onChange, onBlur, value}}) => (
                                        <div className={'control h-[98px]'}>
                                            <label htmlFor={'height'}
                                                   className={'label text-[12px] font-[500] text-neutrals-700 pb-[7px]'}>
                                                Cao(mm)
                                                <span className={'text-semantics-red02'}>*</span>
                                            </label>
                                            <div className={'relative flex px-[2px] '}>
                                                <div className={'w-full max-h-[50px]'}>
                                                    <Input
                                                        warning={errors.salePrice?.message}
                                                        id={'height'}
                                                        className={`${isDarkMode ? 'bg-darkGrey-3636 border-darkGrey-2E2E placeholder-semantics-grey02 text-semantics-grey03 ' : 'bg-neutrals-200'} h-[50px] pl-[11px]`}

                                                        placeholder={'Nhập chiều cao'}
                                                        onChange={onChange}
                                                        onBlur={onBlur}
                                                        value={value || ''}
                                                    />
                                                </div>
                                                <span
                                                    className={'absolute bottom-[-17px] text-semantics-red02 text-[12px]'}>
                                                {errors.height?.message || ''}
                                            </span>
                                            </div>
                                        </div>
                                    )}
                                />
                            </div>
                        </div>
                    </div>
                    <div
                        className={`${tabIndex === 'desc' ? 'visible' : 'hidden'} form-container mt-[70px] max-h-[70vh] overflow-y-scroll scroll-smooth`}>
                        <EditorProvider>
                            <Editor
                                style={{color: isDarkMode ? 'var(--color-neutrals-400)' : ''}}
                                value={htmlDescription} onChange={onChangeEditorDescription}>
                                <Toolbar>
                                    <BtnRedo/>
                                    <BtnUndo/>
                                    <BtnBold/>
                                    <BtnItalic/>
                                    <BtnUnderline/>
                                    <BtnLink/>
                                    <BtnStrikeThrough/>

                                    <BtnBulletList/>
                                    <BtnNumberedList/>
                                </Toolbar>
                            </Editor>
                        </EditorProvider>
                    </div>

                    <div
                        className={`${tabIndex === 'image' ? 'visible' : 'hidden'} form-container mt-[70px] max-h-[70vh] overflow-y-scroll scroll-smooth`}>
                        <div className={'text-semantics-red02 text-[12px] font-[500] mb-[24px]'}>(*) Dung lượng
                            hình {'<300KB'}</div>
                        <div className={'flex gap-[9px] flex-wrap'}>
                            {[1, 2, 3, 4, 5].map((item, index) => (
                                <ImageProductImport caption={item === 1 ? 'Ảnh bìa' : 'Ảnh ' + item} key={index}
                                                    item={item}/>
                            ))}
                        </div>

                    </div>

                </div>
                <div className="submit-container flex gap-x-[8px] pt-[5px] ">
                    <Button onClick={props.onClose}
                            className={`${isDarkMode ? 'border-darkGrey-3838-important text-neutrals-50' : ''} h-[53px] w-[210px]`}
                            name={'Hủy'}/>
                    <ButtonGradient
                        className={`${isDarkMode ? 'border-darkGrey-3838-important' : ''} h-[53px] w-[210px]`}
                        disabled={!(isDirty && isValid)}
                        name={'Cập nhật'}/>
                </div>
            </div>
        </Drawer>
    );
};

export default UpdateProduct;