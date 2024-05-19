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
                <option value=''></option>
                {props.list.map(item =><option key={item} value={item}> {item}</option> )}
            </select>
        </div>
    )
}

export default Dropdown