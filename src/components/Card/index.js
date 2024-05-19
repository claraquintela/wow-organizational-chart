import './Card.css'

const Card =(props) => {

    return (
        <div className='card'> 
            <div className='card-top' style={{backgroundColor: props.color}}>
                <img src={props.img} alt={props.character}/>
            </div>
            <div className='card-footer'>
                <h4>{props.character}</h4>
                <h5>{props.race}</h5>
                <h5>{props.faction}</h5>
            </div>
        </div>
    )
}

export default Card