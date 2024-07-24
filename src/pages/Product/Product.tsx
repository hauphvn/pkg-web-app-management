import Button from "../../components/Button";
import ButtonGradient from "../../components/ButtonGradient";
import {
    IconFilter,
    IconInputSearch,
    IconManageMenu,
    IconPlus,
    IconSelectArrowButton
} from "../../assets/svgs/SVGIcon.tsx";
import Select from "../../components/Select";
import {SelectOption} from "../../components/Select/Select.tsx";
import Input from "../../components/Input";
import {Space, Table, TableProps, Tag} from "antd";

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
    name: string;
    age: number;
    address: string;
    tags: string[];
}

const columns: TableProps<DataType>['columns'] = [
    {
        title: () => (<div className={'text-[16px] text-neutrals-50 bg-neutrals-900 py-[5px] px-[24px] rounded-[8px] w-[116px] '}>hauphvn</div>),
        dataIndex: 'name',
        key: 'name',
        render: (text) => <a>{text}</a>,
    },
    {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: 'Tags',
        key: 'tags',
        dataIndex: 'tags',
        render: (_, { tags }) => (
            <>
                {tags.map((tag) => {
                    let color = tag.length > 5 ? 'geekblue' : 'green';
                    if (tag === 'loser') {
                        color = 'volcano';
                    }
                    return (
                        <Tag color={color} key={tag}>
                            {tag.toUpperCase()}
                        </Tag>
                    );
                })}
            </>
        ),
    },
    {
        title: 'Action',
        key: 'action',
        render: (_, record) => (
            <Space size="middle">
                <a>Invite {record.name}</a>
                <a>Delete</a>
            </Space>
        ),
    },
];

const data: DataType[] = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
    },
    {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        tags: ['loser'],
    },
    {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sydney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },
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
                    columns={columns} dataSource={data}/>;
            </div>
        </div>
    );
};

export default Product;