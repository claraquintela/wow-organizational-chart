import './Card.css'

const Card =(props) => {

    return (
        <div className='colaborador'> 
        <div className='cabecalho'>
            <img src='/imagens/Varian.webp' alt=''/>
        </div>
        <div className='rodape'>
            <h4>Varian Wrynn</h4>
            <h5>Warrior</h5>
        </div>
    </div>
    )
}

export default Card