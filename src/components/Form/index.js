import './Form.css';
import TextField from '../TextField';
import Dropdown from '../Dropdown';
import Button from '../Button';
import {useState} from 'react';

const Form = () => {

    const itens = [ 
        'Human',
        'Elf',
        'Dwarf',
        'Hobbit',
        'Uru-khai',
        'Orc',
        'Goblin'
    ]

    const [character, setCharacter] = useState('')
    const [role, setRole] = useState('')    
    const [img, setImage] = useState('')
    const [race, setRace] = useState('')

    const whenSubmiting = (event) => {
        event.preventDefault();
        // console.log('Form submited => ', character, role, img, race);
    }

    return (

        <section className='formulaire'>
            <form onSubmit={whenSubmiting}>
                <h2>Inform character, class and race</h2>
                <TextField 
                    mandatory={true} 
                    label="Character" 
                    placeholder="Character's name"
                    content={character} 
                    whenChanged={ content => setCharacter(content)}/>

                <TextField 
                    mandatory={true} 
                    label="Roles" 
                    placeholder="Character's class"
                    content = {role}
                    whenChanged = { content => setRole(content)}
                    />

                <TextField 
                label="Image" 
                placeholder="Photo"
                content = {img}
                whenChanged = { content => setImage(content)}
                /> 
                <Dropdown 
                    mandatory={true}
                    label="Race"
                    itens={itens}
                    content = {race}
                    whenChanged = {content => setRace(content)}
                    />
                <Button>
                    Save
                </Button>
            </form>
        </section>
    )
}

export default Form;    	