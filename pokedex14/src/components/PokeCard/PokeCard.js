import {
  PokeCardContainer,
  PokeDetails,
  PokeTypes,
  Type,
  CardButtons,
} from './styles';
import { Button } from '../index';

const PokeCard = ({ pokemon, type, onClick, showDetails }) => {

  return (
    <PokeCardContainer>
      <div>
        <img src={pokemon.sprites?.front_default} alt="front of the pokemon" />
      </div>
      <PokeDetails>
        <h5>Nº{pokemon.id}</h5>
        <h2>{pokemon.name}</h2>
        <PokeTypes>
          {pokemon.types?.map((item) => (
            <Type type={item.type.name}>{item.type.name}</Type>
          ))}
        </PokeTypes>
        <CardButtons>
          <Button
            text={type === 'pokedex' ? 'Remover' : 'Adicionar'}
            color={type === 'pokedex' ? 'black' : 'black'}
            onClick={onClick}
          />
          <Button text="Details" color="black" onClick={showDetails} />
        </CardButtons>
      </PokeDetails>
    </PokeCardContainer>
  );
};

export default PokeCard;
