import { useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { PokeCard } from '../../components/index';
import axios from 'axios';
import styled from 'styled-components';

const PageContainer = styled.main`
  padding: 45px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  grid-gap: 20px;
`;

const Homepage = () => {
  const [pokemon, setPokemon] = useState({});
  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon/ditto').then((response) => {
      setPokemon(response.data);
    });
  }, []);
  const history = useHistory();

  return (
    <PageContainer>
      <PokeCard
        pokemon={pokemon}
        onClick={() => alert('Em construção T_T')}
        showDetails={() => alert('Em construção T_T')}
      />
      <PokeCard pokemon={pokemon} />
      <PokeCard pokemon={pokemon} />
      <PokeCard pokemon={pokemon} />
      <PokeCard pokemon={pokemon} />
      <PokeCard pokemon={pokemon} />
    </PageContainer>
  );
};

export default Homepage;
