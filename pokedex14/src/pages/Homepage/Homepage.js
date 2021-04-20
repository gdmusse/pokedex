import { useHistory } from 'react-router-dom';
import { goToDetailspage } from '../../routes/coordinator';
import { useState } from 'react';
import { PokeCard } from '../../components/index';
import styled from 'styled-components';
import useRequestPokemon from '../../Hooks/useRequestPokemon';

const PageContainer = styled.main`
  padding: 45px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  grid-gap: 20px;
`;

const Homepage = () => {
  const history = useHistory();
  const [pokemons, setPokemons] = useState([]);
  useRequestPokemon(setPokemons);

  const pokeCards =
    pokemons &&
    pokemons.map((item) => (
      <PokeCard
        pokemon={item}
        onClick={() => alert('Em construção T_T')}
        showDetails={() => goToDetailspage(history, item.name)}
      />
    ));

  return <PageContainer>{pokeCards}</PageContainer>;
};

export default Homepage;
