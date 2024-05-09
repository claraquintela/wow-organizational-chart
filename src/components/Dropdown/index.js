import './Dropdown.css';

const Dropdown = (props) => {

    const whenTyping = (event) => {
        console.log(event.target.value);
        props.whenChanged(event.target.value);
    }

    return (
        <div className='dropdown'>
            <label>
                {props.label}
            </label>
            <select onChange={whenTyping}>
                <option value=''></option>
                {props.list.map(item =><option key={item} value={props.value}> {item}</option> )}
            </select>
        </div>
    )
}

export default Dropdown