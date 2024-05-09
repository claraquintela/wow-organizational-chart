import './Role.css'

const Role =(props) => {

    return (
        <section className='block-role' style={{backgroundColor: props.color2}}>
            <h3 style={{borderColor: props.color1}}>{props.typeRole}</h3>

        </section>
    )
}

export default Role