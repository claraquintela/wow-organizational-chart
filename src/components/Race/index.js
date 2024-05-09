import Card from '../Card'
import './Race.css'

const Race =(props) => {

    return (
        <section className='block-race' style={{backgroundColor: props.color2}}>
            <h3 style={{borderColor: props.color1}}>{props.typeRace}</h3>
            <Card/>
        </section>
    )
}

export default Race