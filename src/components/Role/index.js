import Card from '../Card'
import './Role.css'

const Role =(props) => {

    return (
        props.characters.length > 0 && <section className='block-role' style={{backgroundColor: props.color2}}>
          
            <h3 style={{borderColor: props.color1, color: props.color1}}>{props.typeRole}</h3>
            <div className='all-cards'> 
                {props.characters.map((character,index) => {
                    return <Card 
                    key={index} 
                    id={character.id}
                    character={character.character} 
                    race={character.race} 
                    faction={character.faction}
                    img={character.img} 
                    color={props.color1}
                    onDelete={props.onDelete}
                    />
                })}
           </div>
        </section>
    )
}

export default Role
