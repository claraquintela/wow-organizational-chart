import './Form.css';
import TextField from '../TextField';
import Dropdown from '../Dropdown';
import Button from '../Button';
import {useState} from 'react';

const Form = (props) => {

    const [character, setCharacter] = useState('')
    const [role, setRole] = useState('')    
    const [img, setImage] = useState('')
    const [race, setRace] = useState('')

    const whenSubmiting = (event) => {
        event.preventDefault();
        props.addedChar({
            character,
            role,
            img,
            race
        })
        setCharacter('')
        setRole('')
        setImage('')
        setRace('')
    }

  
    return (

        <section className='formulaire'>
            <form onSubmit={whenSubmiting}>
                <h2>Inform character, class and race</h2>
                <TextField 
                    mandatory={true} 
                    label="Character" 
                    name="character"
                    placeholder="Character's name"
                    content={character} 
                    whenChanged={ content => setCharacter(content)}/>

        
                <TextField 
                    label="Image" 
                    name="img"
                    placeholder="Photo"
                    content = {img}
                    whenChanged = { content => setImage(content)}
                /> 

                <Dropdown 
                    mandatory={true}
                    label="Race"
                    name="race"
                    list={props.racesList}
                    content = {race}
                    whenChanged = {content => setRace(content)}
                    />

                <Dropdown 
                    mandatory={true}
                    label="Class"
                    name="role"
                    list={props.rolesList}
                    content = {role}
                    whenChanged = {content => setRole(content)}
                    />
                    
                <Button>
                    Save
                </Button>
            </form>
        </section>
    )
}

export default Form;    	