import CardStyled from "./styles/CardStyled";

const Card = ({types, name, sprites}) => {
    return ( 
            <CardStyled>
                <img  src={sprites.front_default} alt='pokemon' />
                <div>
                    <h5 >{name}</h5>
                    <h6>type: {types[0].type.name}</h6>
                </div>
            </CardStyled>
     );
}
 
export default Card;