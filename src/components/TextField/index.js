import "./TextField.css"

const TextField = (props) => {

    const whenTyping = (event) => {
        props.whenChanged(event.target.value);
    }

    return (

        <div className="text-field"> 
            <label>
                {props.label}
            </label>
            <input value={props.content} onChange={whenTyping} required={props.mandatory} placeholder = {props.placeholder}/>
        </div>

    )
}

export default TextField