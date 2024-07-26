import {Drawer} from "antd";
import Button from "../Button";
import ButtonGradient from "../ButtonGradient";
import {useState} from "react";
import {Controller, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {formAddProduct, formAddProductDefault} from "../../constants/SchemaYups.ts";
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

interface AddNewProductProps {
    show: boolean,
    onClose: () => void,
    onSubmit?: () => void
}

const AddNewProduct = (props: AddNewProductProps) => {
    const [tabIndex, setTabIndex] = useState<'info' | 'desc' | 'image'>('info');
    const [htmlDescription, setHtmlDescription] = useState('');

    function preOnTabClick(type: 'info' | 'desc' | 'image') {
        setTabIndex(type);
    }

    const {
        formState: {errors, isDirty, isValid},
        control: controlAddProduct,
    } = useForm({
        resolver: yupResolver(formAddProduct()),
        mode: 'all',
        defaultValues: formAddProductDefault
    })

    function onChangeEditorDescription(e: ContentEditableEvent) {
        setHtmlDescription(e.target.value);
    }

    return (
        <Drawer
            width={489}
            className={'add-new-product-drawer transition-all duration-300'}
            styles={{header: {paddingBottom: 0}}}
            title={<div className={'text-semantics-grey01 text-[32px] font-[500]'}>Thêm mới</div>}
            destroyOnClose maskClosable={false} closeIcon={null} onClose={props.onClose}
            open={props.show}>
            <div id={'add-new-product-container'}
                 className={'add-new-product-container flex justify-between flex-col h-full w-[435px]'}>
                <div className="contents-container w-full">
                    <div className="actions-tab flex mb-[24px] fixed w-full gap-x-[17px] ">
                        <div
                            onClick={() => preOnTabClick('info')}
                            className={`
                             ${tabIndex === 'info' ? ' border-[1.5px] border-greenFrom bg-semantics-green03 text-semantics-green01 font-[600]' : 'bg-neutrals-50 text-neutrals-700'} 
                              hover:cursor-pointer rounded-[8px] flex justify-center items-center  w-[131px] h-[42px]`}>
                            Thông tin
                        </div>
                        <div
                            onClick={() => preOnTabClick('desc')}
                            className={`
                             ${tabIndex === 'desc' ? ' border-[1.5px] border-greenFrom bg-semantics-green03 text-semantics-green01 font-[600]' : 'bg-neutrals-50 text-neutrals-700'} 
                                hover:cursor-pointer rounded-[8px] flex justify-center items-center  w-[131px] h-[42px]`}>
                            Mô tả
                        </div>
                        <div
                            onClick={() => preOnTabClick('image')}
                            className={`
                             ${tabIndex === 'image' ? ' border-[1.5px] border-greenFrom bg-semantics-green03 text-semantics-green01 font-[600]' : 'bg-neutrals-50 text-neutrals-700'} 
                               hover:cursor-pointer  rounded-[8px] flex justify-center items-center  w-[131px] h-[42px]`}>
                            Hình ảnh
                        </div>
                    </div>
                    <div
                        className={`${tabIndex === 'info' ? 'visible' : 'hidden'} form-container mt-[70px] max-h-[75vh] overflow-y-scroll scroll-smooth`}>
                        <Controller
                            control={controlAddProduct}
                            name='productName'
                            render={({field: {onChange, onBlur, value}}) => (
                                <div className={'control h-[98px]'}>
                                    <label htmlFor={'productName'}
                                           className={'label text-[12px] font-[500] text-neutrals-700 pb-[7px]'}>
                                        Tên sản phẩm
                                        <span className={'text-semantics-red02'}>*</span>
                                    </label>
                                    <div className={'relative flex '}>
                                        <div className={'w-full max-h-[50px]'}>
                                            <Input
                                                warning={!!errors.productName?.message}
                                                id={'account'}
                                                className={'bg-[#EBEBEF] h-[50px] pl-[11px]'}
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
                            control={controlAddProduct}
                            name='store'
                            render={({field: {onChange, onBlur, value}}) => (
                                <div className={'control h-[92px]'}>
                                    <label htmlFor={'store'}
                                           className={'label text-[12px] font-[500] text-neutrals-700 pb-[7px]'}>
                                        Cửa hàng
                                        <span className={'text-semantics-red02'}>*</span>
                                    </label>
                                    <div className={'relative flex '}>
                                        <div className={'w-full max-h-[50px]'}>
                                            <Select
                                                suffixIcon={<IconSelectArrowLarge/>}
                                                className={'control-add-product bg-neutrals-200 h-[50px]'}
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
                        <div className={'horizontal-line w-full bg-neutrals-300 h-[1px] mb-[16px]'}></div>
                        <div className={'text-semantics-red02 text-[12px] mb-[24px]'}>(*) Sản phẩm phải được nhập theo
                            giá ĐÃ TÍNH VAT
                        </div>
                        <div className="form-row flex gap-x-[40px] w-full flex-auto items-center">
                            <div className={'flex-1'}>
                                <Controller
                                    control={controlAddProduct}
                                    name='warranty'
                                    render={({field: {onChange, onBlur, value}}) => (
                                        <div className={'control h-[98px]'}>
                                            <label htmlFor={'warranty'}
                                                   className={'label text-[12px] font-[500] text-neutrals-700 pb-[7px]'}>
                                                Cửa hàng
                                                <span className={'text-semantics-red02'}>*</span>
                                            </label>
                                            <div className={'relative flex '}>
                                                <div className={'w-full max-h-[50px]'}>
                                                    <Select
                                                        suffixIcon={<IconSelectArrowLarge/>}
                                                        className={'control-add-product bg-neutrals-200 h-[50px]'}
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
                                    control={controlAddProduct}
                                    name='unit'
                                    render={({field: {onChange, onBlur, value}}) => (
                                        <div className={'control h-[98px]'}>
                                            <label htmlFor={'unit'}
                                                   className={'label text-[12px] font-[500] text-neutrals-700 pb-[7px]'}>
                                                Đơn vị tính
                                                <span className={'text-semantics-red02'}>*</span>
                                            </label>
                                            <div className={'relative flex '}>
                                                <div className={'w-full max-h-[50px]'}>
                                                    <Select
                                                        suffixIcon={<IconSelectArrowLarge/>}
                                                        className={'control-add-product bg-neutrals-200 h-[50px]'}
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
                                    control={controlAddProduct}
                                    name='importPrice'
                                    render={({field: {onChange, onBlur, value}}) => (
                                        <div className={'control h-[98px]'}>
                                            <label htmlFor={'productName'}
                                                   className={'label text-[12px] font-[500] text-neutrals-700 pb-[7px]'}>
                                                Giá nhập
                                                <span className={'text-semantics-red02'}>*</span>
                                            </label>
                                            <div className={'relative flex '}>
                                                <div className={'w-full max-h-[50px]'}>
                                                    <Input
                                                        warning={!!errors.importPrice?.message}
                                                        id={'account'}
                                                        className={'bg-[#EBEBEF] h-[50px] pl-[11px]'}
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
                                    control={controlAddProduct}
                                    name='salePrice'
                                    render={({field: {onChange, onBlur, value}}) => (
                                        <div className={'control h-[98px]'}>
                                            <label htmlFor={'salePrice'}
                                                   className={'label text-[12px] font-[500] text-neutrals-700 pb-[7px]'}>
                                                Giá bán
                                                <span className={'text-semantics-red02'}>*</span>
                                            </label>
                                            <div className={'relative flex '}>
                                                <div className={'w-full max-h-[50px]'}>
                                                    <Input
                                                        warning={!!errors.salePrice?.message}
                                                        id={'account'}
                                                        className={'bg-[#EBEBEF] h-[50px] pl-[11px]'}
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
                                    control={controlAddProduct}
                                    name='discount'
                                    render={({field: {onChange, onBlur, value}}) => (
                                        <div className={'control h-[92px]'}>
                                            <label htmlFor={'discount'}
                                                   className={'label text-[12px] font-[500] text-neutrals-700 pb-[7px]'}>
                                                Giảm giá
                                                <span className={'text-semantics-red02'}>*</span>
                                            </label>
                                            <div className={'relative flex '}>
                                                <div className={'w-full max-h-[50px]'}>
                                                    <Input
                                                        warning={!!errors.discount?.message}
                                                        id={'discount'}
                                                        className={'bg-[#EBEBEF] h-[50px] pl-[11px]'}
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
                                    control={controlAddProduct}
                                    name='priceAfterDiscount'
                                    render={({field: {onChange, onBlur, value}}) => (
                                        <div className={'control h-[92px]'}>
                                            <label htmlFor={'priceAfterDiscount'}
                                                   className={'label text-[12px] font-[500] text-neutrals-700 pb-[7px]'}>
                                                Giá sau giảm
                                                <span className={'text-semantics-red02'}>*</span>
                                            </label>
                                            <div className={'relative flex '}>
                                                <div className={'w-full max-h-[50px]'}>
                                                    <Input
                                                        warning={!!errors.salePrice?.message}
                                                        id={'priceAfterDiscount'}
                                                        className={'bg-[#EBEBEF] h-[50px] pl-[11px]'}
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
                        <div className={'horizontal-line w-full bg-neutrals-300 h-[1px] mb-[16px]'}></div>
                        <div className="form-row flex gap-x-[8px] w-full flex-auto items-center">
                            <div className={'flex-1'}>
                                <Controller
                                    control={controlAddProduct}
                                    name='quantity'
                                    render={({field: {onChange, onBlur, value}}) => (
                                        <div className={'control h-[98px]'}>
                                            <label htmlFor={'quantity'}
                                                   className={'label text-[12px] font-[500] text-neutrals-700 pb-[7px]'}>
                                                Số lượng
                                                <span className={'text-semantics-red02'}>*</span>
                                            </label>
                                            <div className={'relative flex '}>
                                                <div className={'w-full max-h-[50px]'}>
                                                    <Input
                                                        warning={!!errors.quantity?.message}
                                                        id={'quantity'}
                                                        className={'bg-[#EBEBEF] h-[50px] pl-[11px]'}
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
                                    control={controlAddProduct}
                                    name='weight'
                                    render={({field: {onChange, onBlur, value}}) => (
                                        <div className={'control h-[98px]'}>
                                            <label htmlFor={'weight'}
                                                   className={'label text-[12px] font-[500] text-neutrals-700 pb-[7px]'}>
                                                Khối lượng
                                                <span className={'text-semantics-red02'}>*</span>
                                            </label>
                                            <div className={'relative flex '}>
                                                <div className={'w-full max-h-[50px]'}>
                                                    <Input
                                                        warning={!!errors.weight?.message}
                                                        id={'account'}
                                                        className={'bg-[#EBEBEF] h-[50px] pl-[11px]'}
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
                                    control={controlAddProduct}
                                    name='length'
                                    render={({field: {onChange, onBlur, value}}) => (
                                        <div className={'control h-[98px]'}>
                                            <label htmlFor={'length'}
                                                   className={'label text-[12px] font-[500] text-neutrals-700 pb-[7px]'}>
                                                Dài(mm)
                                                <span className={'text-semantics-red02'}>*</span>
                                            </label>
                                            <div className={'relative flex '}>
                                                <div className={'w-full max-h-[50px]'}>
                                                    <Input
                                                        warning={!!errors.importPrice?.message}
                                                        id={'length'}
                                                        className={'bg-[#EBEBEF] h-[50px] pl-[11px]'}
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
                                    control={controlAddProduct}
                                    name='width'
                                    render={({field: {onChange, onBlur, value}}) => (
                                        <div className={'control h-[98px]'}>
                                            <label htmlFor={'width'}
                                                   className={'label text-[12px] font-[500] text-neutrals-700 pb-[7px]'}>
                                                Rộng(mm)
                                                <span className={'text-semantics-red02'}>*</span>
                                            </label>
                                            <div className={'relative flex '}>
                                                <div className={'w-full max-h-[50px]'}>
                                                    <Input
                                                        warning={!!errors.width?.message}
                                                        id={'width'}
                                                        className={'bg-[#EBEBEF] h-[50px] pl-[11px]'}
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
                                    control={controlAddProduct}
                                    name='height'
                                    render={({field: {onChange, onBlur, value}}) => (
                                        <div className={'control h-[98px]'}>
                                            <label htmlFor={'height'}
                                                   className={'label text-[12px] font-[500] text-neutrals-700 pb-[7px]'}>
                                                Cao(mm)
                                                <span className={'text-semantics-red02'}>*</span>
                                            </label>
                                            <div className={'relative flex '}>
                                                <div className={'w-full max-h-[50px]'}>
                                                    <Input
                                                        warning={!!errors.salePrice?.message}
                                                        id={'height'}
                                                        className={'bg-[#EBEBEF] h-[50px] pl-[11px]'}
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
                            <Editor value={htmlDescription} onChange={onChangeEditorDescription}>
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
                    <Button onClick={props.onClose} className={'w-[210px] h-[53px]'} name={'Hủy'}/>
                    <ButtonGradient className={'w-[210px] h-[53px]'} disabled name={'Thêm sản phẩm'}/>
                </div>
            </div>
        </Drawer>
    );
};

export default AddNewProduct;