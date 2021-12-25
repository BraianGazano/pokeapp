import CardStyled from "./styles/CardStyled";
import Subtitle from "./Subtitle";
import Img from "./Img";
const Card = ({types, name, sprites}) => {
    return ( 
            <CardStyled>
                <Img src={sprites.front_default} alt={'pokemon'} />
                <div>
                    <Subtitle title={name}></Subtitle>
                    <Subtitle title={'Tipo: '+ types[0].type.name}></Subtitle>
                </div>
            </CardStyled>
     );
}
 
export default Card;