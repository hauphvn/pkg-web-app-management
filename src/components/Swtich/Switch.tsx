// interface SwitchProps {
//     className?: string;
// }
const Switch = () => {
    return (
        <div id={'switch-root'}>
            <label className="switch">
                <input type="checkbox"/>
                <span className="slider round"></span>
            </label>
        </div>
    );
};

export default Switch;