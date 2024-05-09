import './Dropdown.css';

const Dropdown = (props) => {
    
    const whenTyping = (event) => {
        props.whenChanged(event.target.value);
    }

    return (
        <div className='dropdown'>
            <label>
                {props.label}
            </label>
            <select onChange={whenTyping}>
                {props.rolesList.map(item =><option key={item} value={props.value}> {item}</option> )}
            </select>
        </div>
    )
}

export default Dropdown