const Card = ({types, name, sprites}) => {
    return ( 
        <div className='card' style={{ width: '10rem', height: '15rem', backgroundColor: '#F0F0C9' }}>
            <img  src={sprites.front_default} alt='pokemon' />
            <div>
                <h5 >{name}</h5>
                <h6>type: {types[0].type.name}</h6>
            </div>
        </div>
     );
}
 
export default Card;