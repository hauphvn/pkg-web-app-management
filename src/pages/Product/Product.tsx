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
import ProductImg from '../../assets/imgs/productImg.png'
import {useEffect, useState} from "react";
import AddNewProduct from "../../components/AddNewProduct";
import {IResProduct, IResProductEditSelected} from "../../types";
import UpdateProduct from "../../components/UpdateProduct";
import FilterProduct from "../../components/FilterProduct";
import ErrorModal from "../../components/ErrorModal/ErrorModal.tsx";

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
            productCode: '',
            actionType: 'unknown'
        })
    }
    const columns: TableProps<IResProduct>['columns'] = [
        {
            title: () => (<div className={'w-[116px]'}>Hình ảnh</div>),
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
            title: () => (<div className={''}>Sản phẩm</div>),
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
                        <div className={'text-[14px]'}><span className={'text-semantics-grey02'}>Giá bán:</span> <span
                            className={'text-accent-a01'}>{price} VND</span></div>
                    </div>
                )
            }
        },
        {
            title: () => (<div className={''}>Mã sản phẩm</div>),
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
            title: () => (<div className={''}>Số lượng</div>),
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
            title: () => (<div className={''}>Chỉnh sửa</div>),
            dataIndex: 'action',
            key: 'action',
            align: 'center',
            render: (_, {productID, productName, price, productCode}) => {
                return (
                    <div className={' flex flex-col gap-y-[10px] w-full justify-center items-center'}>
                        <div className="print-container gap-x-[12px] flex items-center">
                            <div
                                className="print-data w-[187px] flex  gap-x-[8px] h-[38px] px-[18px] py-[12px] items-center justify-between border-[0.5px] border-neutrals-500 rounded-[8px]">
                                <input className={'w-[50px] outline-0 text-[12px] p-0 m-0 leading-none'}
                                       placeholder={'TL Vàng'} type="text"/>
                                <div className={'border-semantics-grey01 border-l-[1px] h-[14px]'}></div>
                                <input className={'w-[84px] outline-0 text-[12px] p-0 m-0 leading-none'}
                                       placeholder={'Tiền công'} type="text"/>
                            </div>
                            <div
                                className="printer hover:cursor-pointer shadow-button-1 w-[40px] h-[40px] flex justify-center items-center rounded-[8px]">
                                <IconPrinter/>
                            </div>
                        </div>
                        <div className="actions-container flex gap-x-[12px] ">
                            <div
                                onClick={() => onEditProduct({
                                    productID,
                                    productName,
                                    price,
                                    productCode,
                                    actionType: 'update'
                                })}
                                className="icon rounded-[8px] py-[8px] px-[24px] shadow-button-1 hover:cursor-pointer w[72px] h-[40px] ">
                                <IconPen/>
                            </div>
                            <div
                                className="icon rounded-[8px] py-[8px] px-[24px] shadow-button-1 hover:cursor-pointer w[72px] h-[40px] ">
                                <IconWarehouse/>
                            </div>
                            <div
                                onClick={() => onEditProduct({
                                    productID,
                                    productName,
                                    price,
                                    productCode,
                                    actionType: 'delete'
                                })}
                                className="icon rounded-[8px] py-[8px] px-[24px] shadow-button-1 hover:cursor-pointer w[72px] h-[40px] ">
                                <IconRecycling/>
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
        actionType: 'unknown'
    })
    const [showUpdate, setShowUpdate] = useState(false);
    useEffect(() => {
        if (productEdit?.productID) {
            if (productEdit?.actionType === 'update') {
                setShowUpdate(true);
            } else if (productEdit?.actionType === 'delete') {
                setShowModalDelete(true);
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
        actionType: 'update' | 'delete'
    }) {
        setProductEdit({
            productID: param.productID,
            salePrice: param.price,
            productName: param.productName,
            productCode: param.productCode,
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
                className="titleContainer h-[88px] border-b-neutrals-300 border-b-[1px] pl-[32px] pr-[33px] flex justify-between items-center">
                <div className="title text-semantics-grey01 text-[32px]">Sản phẩm</div>
                <div className={'flex gap-x-[25px]'}>
                    <Button
                        icon={<IconManageMenu/>}
                        className={'h-[40px] shadow-button-1'}
                        name={'Nhập theo danh sách'}/>
                    <ButtonGradient
                        onClick={preOnShowAddNew}
                        icon={<IconPlus/>}
                        className={'h-[40px] w-[162px] text-[16px]  px-[24px] gap-x-[14px]'}
                        name={'Thêm mới'}/>
                </div>
            </div>
            <div className="action-filter-container h-[88px] px-[24px] py-[32px] flex  justify-between">
                <div className={'flex gap-x-[20px] w-[325px] items-center'}>
                    <label className={'text-neutrals-700 text-[14px]'} htmlFor="categories">Danh sách:</label>
                    <div className={' w-[230px] flex items-center'}>
                        <Select
                            maxTagCount={1}
                            suffixIcon={<IconSelectArrowButton/>}
                            className={' h-[38px] text-[12px]'}
                            id={'categories'}
                            options={categories}
                            placeholder={'Tất cả'}/>
                    </div>
                </div>
                <div className={'flex items-center gap-x-[20px]'}>
                    <Input
                        onChange={(e) => preHandlerSearch(e?.target?.value)}
                        suffix={<IconInputSearch/>}
                        className={'text-[12px] text-semantics-grey01 h-[40px] w-[230px] rounded-[8px] shadow-button-1 focus-within:shadow-button-1'}
                        placeholder={'Tìm kiếm sản phẩm'}/>
                    <div className={'relative'}>
                        <Button
                            onClick={() => setShowFilter(!showFilter)}
                            className={'text-semantics-grey01 text-[16px] h-[40px] shadow-button-1'}
                            icon={<IconFilter/>}
                            name={'Bộ lộc'}/>
                        <div className={'absolute top-[3rem] right-0 z-20'}>
                            {showFilter && <FilterProduct/>}
                        </div>
                    </div>
                </div>
            </div>
            <div className="table-container mt-[24px] pl-[24px] pr-[32px]">
                <Table
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
            <ErrorModal
                title={<div className={'text-semantics-grey01'}>Xoá sản phẩm</div>}
                onCancel={preOnCloseDelete}
                onOk={onHandleDelete} open={showModalDelete}>
                <div className={'p-6'}>
                    <p className={'text-semantics-grey02'}>Bạn có chắc chắn muốn <span className={'text-semantics-red02'}>xoá</span> sản phẩm {' '}
                        <span className={'font-bold'}>{productEdit.productName}</span>
                        {' '}này không?</p>
                </div>
            </ErrorModal>
        </div>
    );
};

export default Product;