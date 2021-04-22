import { useHistory } from 'react-router-dom';
import { goToDetailspage } from '../../routes/coordinator';
import { PokeCard } from '../../components/index';
import styled from 'styled-components';

import React, { useContext } from 'react';
import GlobalStateContext from '../../global/GlobalStateContext';

const PageContainer = styled.main`
  padding: 45px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  grid-gap: 20px;
`;

const Homepage = () => {
  const history = useHistory();
  const { addToPokeDex, pokemons, pokedex } = useContext(GlobalStateContext);

  const pokeCards =
    pokemons &&
    pokemons
      .filter((pokemon) => {
        return !pokedex?.some((register) => register.id === pokemon.id);
      })
      .map((item) => (
        <PokeCard
          key={item.id}
          pokemon={item}
          onClick={() => addToPokeDex(item)}
          showDetails={() => goToDetailspage(history, item.name)}
        />
      ));

  return <PageContainer>{pokeCards}</PageContainer>;
};

export default Homepage;
