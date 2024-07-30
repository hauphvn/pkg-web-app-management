import './tableProductStyle.css';
import Button from "../../components/Button";
import ButtonGradient from "../../components/ButtonGradient";
import {
    IconFilter,
    IconInputSearch,
    IconManageMenu, IconPen,
    IconPlus,
    IconPrinter, IconRecycling,
    IconSelectArrowButton, IconWarehouse
} from "../../assets/svgs/SVGIcon.tsx";
import Select from "../../components/Select";
import {SelectOption} from "../../components/Select/Select.tsx";
import Input from "../../components/Input";
import {Table, TableProps} from "antd";
import ProductImg from '../../assets/imgs/productImg.png';
import {useEffect, useState} from "react";
import AddNewProduct from "../../components/AddNewProduct";
import {IResProduct, IResProductEditSelected} from "../../types";
import UpdateProduct from "../../components/UpdateProduct";
import FilterProduct from "../../components/FilterProduct";
import ErrorModal from "../../components/ErrorModal/ErrorModal.tsx";
import {useTheme} from "../../context/ThemeContext.tsx";
import ImportWarehouseProduct from "../../components/ImportWarehouseProduct";

const categories: SelectOption[] = [
    {label: 'Category 1', value: '1'},
    {label: 'Category 2', value: '2'},
    {label: 'Category 3', value: '3'},
    {label: 'Category 4', value: '4'},
    {label: 'Category 5', value: '5'},
]

// dummy data table
const dataDummy: IResProduct[] = [
    {
        key: '1',
        productID: '1',
        productName: 'Cây Tài Lộc Mẫu 2023 Japper Đỏ',
        image: ProductImg,
        productCode: 'PK00000001',
        amount: '1030',
        price: '1,000,000,000',
    },
    {
        key: '2',
        productID: '2',
        productName: 'Khoá Học Kiến Thức',
        image: ProductImg,
        productCode: 'PK00000002',
        amount: '1200',
        price: '1,000,000,000',
    },
    {
        key: '3',
        productID: '3',
        productName: 'Vòng Trầm 8 Ly Mix Kim Tiền Ng...',
        image: ProductImg,
        productCode: 'PK00000003',
        amount: '1010',
        price: '1,000,000,000',
    },
    {
        key: '4',
        productID: '4',
        productName: 'Cỏ 42 Lá Mix Ngũ Điếu Và Túi Tiền Vàng 10k ',
        image: ProductImg,
        productCode: 'PK00000004',
        amount: '1004',
        price: '1,000,000,000',
    },
    {
        key: '5',
        productID: '5',
        productName: 'Vòng Trầm Mix Thánh Giá (2 Vòng)',
        image: ProductImg,
        productCode: 'PK00000005',
        amount: '100',
        price: '1,000,000,000',
    }
];

// end dummy data table
interface ISearchParam {
    productName: string,
    page?: number,
}

const Product = () => {
    const{isDarkMode} = useTheme();
    const [showAddNew, setShowAddNew] = useState(false);
    const [showFilter, setShowFilter] = useState(false);
    const [delayInputSearch, setDelayInputSearch] = useState('');
    const [paramSearch, setParamSearch] = useState<ISearchParam>({
        productName: '',
    });
    const [showModalDelete, setShowModalDelete] = useState(false);
    const [products, setProducts] = useState<IResProduct[]>(dataDummy)
    const onResetProductEdit = () => {
        setProductEdit({
            productID: '',
            salePrice: '',
            productName: '',
            quantity: '',
            productCode: '',
            actionType: 'unknown'
        })
    }
    const columns: TableProps<IResProduct>['columns'] = [
        {
            title: () => (<div className={`${isDarkMode ? 'dark-mode' : ' '} w-[116px]`}>Hình ảnh</div>),
            dataIndex: 'image',
            key: 'image',
            align: 'center',
            render: (_, {image}) => {
                return (
                    <div className={' flex justify-center'}>
                        <img className={'w-[88px] h-[88px] '} src={image} alt={'product'}/>
                    </div>
                )
            },
        },
        {
            title: () => (<div className={`${isDarkMode ? 'dark-mode' : ' '} `}>Sản phẩm</div>),
            dataIndex: 'productName',
            key: 'productName',
            align: 'center',
            sorter: (a, b) => a.productName.localeCompare(b.productName),
            render: (_, {productName, price}) => {
                return (
                    <div className={'text-left flex flex-col gap-y-[8px] justify-center'}>
                        <div className={' font-[600] text-[20px]'}>
                            {productName}
                        </div>
                        <div className={'text-[14px]'}><span className={`${isDarkMode ? 'text-neutrals-400' : 'text-semantics-grey02'}`}>Giá bán:</span> <span
                            className={'text-accent-a01'}>{price} VND</span></div>
                    </div>
                )
            }
        },
        {
            title: () => (<div className={`${isDarkMode ? 'dark-mode' : ' '} `}>Mã sản phẩm</div>),
            dataIndex: 'productCode',
            key: 'productCode',
            align: 'center',
            sorter: (a, b) => a.productCode.localeCompare(b.productCode),
            render: (_, {productCode}) => {
                return (
                    <div className={' font-[500] text-[18px]'}>
                        {productCode}
                    </div>
                )
            }
        },
        {
            title: () => (<div className={`${isDarkMode ? 'dark-mode' : ' '} `}>Số lượng</div>),
            dataIndex: 'amount',
            key: 'amount',
            align: 'center',
            sorter: (a, b) => a.amount.localeCompare(b.amount),
            render: (_, {amount}) => {
                return (
                    <div className={' font-[500] text-[18px]'}>
                        {amount}
                    </div>
                )
            }
        },
        {
            title: () => (<div className={`${isDarkMode ? 'dark-mode' : ' '} `}>Chỉnh sửa</div>),
            dataIndex: 'action',
            key: 'action',
            align: 'center',
            render: (_, {productID, productName, price, productCode, amount}) => {
                return (
                    <div className={' flex flex-col gap-y-[10px] w-full justify-center items-center'}>
                        <div className="print-container gap-x-[12px] flex items-center">
                            <div
                                className={`${isDarkMode ? 'border-darkGrey-3838 bg-darkGrey-3333' : 'border-neutrals-500'} print-data w-[187px] flex  gap-x-[8px] h-[38px] px-[18px] py-[12px] items-center justify-between border-[0.5px] rounded-[8px]`}>
                                <input className={`${isDarkMode ? 'bg-darkGrey-3333' : ''} w-[50px] outline-0 text-[12px] p-0 m-0 leading-none`}
                                       placeholder={'TL Vàng'} type="text"/>
                                <div className={`border-semantics-grey01 border-l-[1px] h-[14px]`}></div>
                                <input className={`${isDarkMode ? 'bg-darkGrey-3333' : ''} w-[84px] outline-0 text-[12px] p-0 m-0 leading-none`}
                                       placeholder={'Tiền công'} type="text"/>
                            </div>
                            <div
                                className={`${isDarkMode ? 'bg-darkGrey-2E2E' : ''} printer hover:cursor-pointer shadow-button-1 w-[40px] h-[40px] flex justify-center items-center rounded-[8px]`}>
                                <IconPrinter isDarkMode={isDarkMode}/>
                            </div>
                        </div>
                        <div className="actions-container flex gap-x-[12px] ">
                            <div
                                onClick={() => onEditProduct({
                                    productID,
                                    productName,
                                    price,
                                    productCode,
                                    quantity: amount,
                                    actionType: 'update'
                                })}
                                className={` ${isDarkMode ? 'bg-darkGrey-2E2E' : ''} icon rounded-[8px] py-[8px] px-[24px] shadow-button-1 hover:cursor-pointer w[72px] h-[40px] `}>
                                <IconPen  isDarkMode={isDarkMode}/>
                            </div>
                            <div
                                onClick={() => onEditProduct({
                                    productID,
                                    productName,
                                    price,
                                    productCode,
                                    quantity: amount,
                                    actionType: 'import-warehouse'
                                })}
                                className={` ${isDarkMode ? 'bg-darkGrey-2E2E' : ''} icon rounded-[8px] py-[8px] px-[24px] shadow-button-1 hover:cursor-pointer w[72px] h-[40px] `}>
                                <IconWarehouse isDarkMode={isDarkMode}/>
                            </div>
                            <div
                                onClick={() => onEditProduct({
                                    productID,
                                    productName,
                                    price,
                                    productCode,
                                    quantity: amount,
                                    actionType: 'delete'
                                })}
                                className={` ${isDarkMode ? 'bg-darkGrey-2E2E' : ''} icon rounded-[8px] py-[8px] px-[24px] shadow-button-1 hover:cursor-pointer w[72px] h-[40px] `}>
                                <IconRecycling isDarkMode={isDarkMode}/>
                            </div>
                        </div>
                    </div>
                )
            }
        },
    ];
    const [productEdit, setProductEdit] = useState<IResProductEditSelected>({
        productID: '',
        salePrice: '',
        productName: '',
        productCode: '',
        quantity: '',
        actionType: 'unknown'
    })
    const [showUpdate, setShowUpdate] = useState(false);
    const [showImportWarehouseProduct, setShowImportWarehouseProduct] = useState(false);
    useEffect(() => {
        if (productEdit?.productID) {
            if (productEdit?.actionType === 'update') {
                setShowUpdate(true);
            } else if (productEdit?.actionType === 'delete') {
                setShowModalDelete(true);
            }
            else if (productEdit?.actionType === 'import-warehouse') {
                setShowImportWarehouseProduct(true);
            }
        }
    }, [productEdit?.productID])
    useEffect(() => {
        setTimeout(() => {
            setParamSearch(pre => ({
                ...pre,
                productName: delayInputSearch
            }));
        }, 300);
    }, [delayInputSearch]);
    useEffect(() => {
        const searchProducts = dataDummy.filter((fil: IResProduct) => fil.productName.toLowerCase().includes(paramSearch.productName?.toLowerCase())).map(product => (product));
        setProducts(searchProducts);
    }, [paramSearch?.productName]);

    function onEditProduct(param: {
        productID: string;
        price: string;
        productName: string,
        productCode: string,
        quantity: string,
        actionType: 'update' | 'delete' | 'import-warehouse'
    }) {
        setProductEdit({
            productID: param.productID,
            salePrice: param.price,
            productName: param.productName,
            productCode: param.productCode,
            quantity: param.quantity,
            actionType: param.actionType
        });
    }

    function preOnShowAddNew() {
        setShowAddNew(true);
    }

    function preOnCloseAddNew() {
        setShowAddNew(false);
    }

    function preOnCloseUpdate() {
        onResetProductEdit();
        setShowUpdate(false);
    }
    function preOnCloseImportWarehouseProduct() {
        onResetProductEdit();
        setShowImportWarehouseProduct(false);
    }

    function preHandlerSearch(value: string) {
        setDelayInputSearch(value);
    }

    function onHandleDelete() {
       const newProducts = products.filter(product => product.productID !== productEdit.productID);
         setProducts(newProducts);
         setShowModalDelete(false);
    }

    function preOnCloseDelete() {
        onResetProductEdit();
        setShowModalDelete(false);
    }

    return (
        <div>
            <div
                className={`${isDarkMode ? 'text-neutrals-400 border-b-darkGrey-2727' : 'text-semantics-grey01 border-b-neutrals-300'} titleContainer h-[88px] border-b-[1px] pl-[32px] pr-[33px] flex justify-between items-center`}>
                <div className="title  text-[32px]">Sản phẩm</div>
                <div className={'flex gap-x-[25px]'}>
                    <Button
                        icon={<IconManageMenu isDarkMode={isDarkMode}/>}
                        className={`${isDarkMode ? 'bg-darkGrey-3333 border-darkGrey-3838 text-neutrals-400' : ''} h-[40px] shadow-button-1`}
                        name={'Nhập theo danh sách'}/>
                    <ButtonGradient
                        onClick={preOnShowAddNew}
                        icon={<IconPlus/>}
                        className={`${isDarkMode ? 'border-darkGrey-3838-important border' : ''} h-[40px] w-[162px] text-[16px]  px-[24px] gap-x-[14px]`}
                        name={'Thêm mới'}/>
                </div>
            </div>
            <div className={`${isDarkMode ? 'text-neutrals-400' : 'text-neutrals-700'} action-filter-container h-[88px] px-[24px] py-[32px] flex  justify-between`}>
                <div className={'flex gap-x-[20px] w-[325px] items-center'}>
                    <label className={' text-[14px]'} htmlFor="categories">Danh sách:</label>
                    <div className={' w-[230px] flex items-center'}>
                        <Select
                            isDarkMode={isDarkMode}
                            maxTagCount={1}
                            suffixIcon={<IconSelectArrowButton/>}
                            className={`custom-select-dropdown ${isDarkMode? 'placeholder-dark border-dark bg-darkGrey-2E2E rounded-[8px] select-dark-content ' : ''} h-[38px] text-[12px]`}
                            id={'categories'}
                            options={categories}
                            placeholder={'Tất cả'}/>
                    </div>
                </div>
                <div className={'flex items-center gap-x-[20px]'}>
                    <Input
                        onChange={(e) => preHandlerSearch(e?.target?.value)}
                        suffix={<IconInputSearch isDarkMode={isDarkMode}/>}
                        className={`text-[12px]  h-[40px] w-[230px] rounded-[8px] ${!isDarkMode ? 'shadow-button-1 focus-within:shadow-button-1' : ' text-neutrals-400 border-dark placeholder-dark'}`}
                        placeholder={'Tìm kiếm sản phẩm'}/>
                    <div className={'relative'}>
                        <Button
                            onClick={() => setShowFilter(!showFilter)}
                            className={` ${isDarkMode ? 'text-neutrals-400 border-none hover:bg-darkGrey-2E2E ' : ''} text-[16px] h-[40px] shadow-button-1`}
                            icon={<IconFilter isDarkMode={isDarkMode}/>}
                            name={'Bộ lộc'}/>
                        <div className={'absolute top-[3rem] right-0 z-20'}>
                            {showFilter && <FilterProduct/>}
                        </div>
                    </div>
                </div>
            </div>
            <div className="table-container mt-[24px] pl-[24px] pr-[32px]">
                <Table
                    id={`${isDarkMode ? 'table-product-dark-mode' : 'table-product-light-mode'}`}
                    scroll={{x: '100%', y: '67vh'}}
                    pagination={{position: ["bottomCenter"]}}
                    columns={columns} dataSource={products}
                    showSorterTooltip={{
                        title: 'Click để sắp xếp'
                    }}
                />
            </div>
            <AddNewProduct show={showAddNew} onClose={preOnCloseAddNew}/>
            <UpdateProduct show={showUpdate} onClose={preOnCloseUpdate} productEdit={productEdit}/>
            <ImportWarehouseProduct show={showImportWarehouseProduct} onClose={preOnCloseImportWarehouseProduct} productEdit={productEdit}/>
            <ErrorModal
                title={<div className={`${isDarkMode ? 'dark-mode' : ' '} `}>Xoá sản phẩm</div>}
                onCancel={preOnCloseDelete}
                onOk={onHandleDelete} open={showModalDelete}>
                <div className={'p-6'}>
                    <p className={`${isDarkMode ? 'text-neutrals-400' : 'text-semantics-grey02'}`}>Bạn có chắc chắn muốn <span className={'text-semantics-red02'}>xoá</span> sản phẩm {' '}
                        <span className={'font-bold'}>{productEdit.productName}</span>
                        {' '}này không?</p>
                </div>
            </ErrorModal>
        </div>
    );
};

export default Product;