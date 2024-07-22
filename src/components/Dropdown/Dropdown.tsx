import { Dropdown as DropdownAnt, DropdownProps as AntDropdownProps} from 'antd';

export interface IDataDropdown{
    label: string,
    key: string
}
interface DropdownProps extends Omit<AntDropdownProps, 'children'> {
    className?: string,
    items: any[],
    name: string
}
const Dropdown = (props: DropdownProps) => {
    // const [itemsState, setItemsState] = useState<any[]>([])
    // useEffect(() => {
    //     setItemsState(props.items)
    // }, [props.items]);
    return (
        <DropdownAnt.Button
            className={`
            ${props.className} 
            
            `}
            menu={props.items}
            {...props}
        >
            {props.name}
        </DropdownAnt.Button>
    );
};

export default Dropdown;