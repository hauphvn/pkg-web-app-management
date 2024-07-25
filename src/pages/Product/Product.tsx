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

const categories: SelectOption[] = [
    {label: 'Category 1', value: '1'},
    {label: 'Category 2', value: '2'},
    {label: 'Category 3', value: '3'},
    {label: 'Category 4', value: '4'},
    {label: 'Category 5', value: '5'},
]

// dummy data table
interface DataType {
    key: string;
    image: string;
    productID: string;
    productName: string;
    productCode: string;
    amount: string;
    price: string;
}

const columns: TableProps<DataType>['columns'] = [
    {
        title: () => (<div className={''}>Hình ảnh</div>),
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
        render: () => {
            return (
                <div className={'min-w-[239px] flex flex-col gap-y-[10px] w-full justify-center items-center'}>
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
                        <div className="icon rounded-[8px] py-[8px] px-[24px] shadow-button-1 hover:cursor-pointer w[72px] h-[40px] ">
                            <IconPen/>
                        </div>
                        <div className="icon rounded-[8px] py-[8px] px-[24px] shadow-button-1 hover:cursor-pointer w[72px] h-[40px] ">
                            <IconWarehouse/>
                        </div>
                        <div className="icon rounded-[8px] py-[8px] px-[24px] shadow-button-1 hover:cursor-pointer w[72px] h-[40px] ">
                            <IconRecycling/>
                        </div>
                    </div>
                </div>
            )
        }
    },
];

const data: DataType[] = [
    {
        key: '1',
        productID: '1',
        productName: 'Cỏ 4 Lá Mix Ngũ Điếu Và Túi Tiền Vàng 10k ',
        image: ProductImg,
        productCode: 'PK00000001',
        amount: '1030',
        price: '1,000,000,000',
    },
    {
        key: '2',
        productID: '2',
        productName: 'Cỏ 5 Lá Mix Ngũ Điếu Và Túi Tiền Vàng 10k ',
        image: ProductImg,
        productCode: 'PK00000002',
        amount: '1200',
        price: '1,000,000,000',
    },
    {
        key: '3',
        productID: '3',
        productName: 'Cỏ 6 Lá Mix Ngũ Điếu Và Túi Tiền Vàng 10k ',
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
        productName: 'Cỏ 4 Lá Mix Ngũ Điếu Và Túi Tiền Vàng 10k ',
        image: ProductImg,
        productCode: 'PK00000005',
        amount: '100',
        price: '1,000,000,000',
    }
];
// end dummy data table
const Product = () => {
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
                        suffix={<IconInputSearch/>}
                        className={'text-[12px] text-semantics-grey01 h-[40px] w-[230px] rounded-[8px] shadow-button-1 focus-within:shadow-button-1'}
                        placeholder={'Tìm kiếm sản phẩm'}/>
                    <Button
                        className={'text-semantics-grey01 text-[16px] h-[40px] shadow-button-1'}
                        icon={<IconFilter/>}
                        name={'Bộ lộc'}/>
                </div>
            </div>
            <div className="table-container mt-[24px] pl-[24px] pr-[32px]">
                <Table
                    pagination={{position: ["bottomCenter"]}}
                    columns={columns} dataSource={data}
                    showSorterTooltip={{
                        title: 'Click để sắp xếp'
                    }}
                />
            </div>
        </div>
    );
};

export default Product;