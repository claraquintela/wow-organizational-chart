import './Card.css'
import { AiFillCloseCircle } from "react-icons/ai";

const Card =(props) => {
    
    const factionColor = props.faction === "Horde" ? "#C10808" : "#0D3296";

    return (
        <div className='card'> 
        <AiFillCloseCircle 
            size={25} 
            className='delete-card' 
            onClick={()=> props.onDelete(props.id)}
        />
        
            <div className='card-top' style={{backgroundColor: factionColor}}>
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