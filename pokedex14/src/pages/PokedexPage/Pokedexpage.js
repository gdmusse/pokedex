import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { goToDetailspage } from '../../routes/coordinator';
import React, { useContext } from 'react';
import GlobalStateContext from '../../global/GlobalStateContext';
import { PokeCard } from '../../components/index';
import Loader from "../../components/Loader"

const PageContainer = styled.main`
  padding: 45px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  grid-gap: 20px;
`;

const Pokedexpage = () => {
  const history = useHistory();
  const { removeFromPokedex, pokemons, pokedex, loading } = useContext(
    GlobalStateContext
  );

  const pokeCards =
    pokemons &&
    pokemons
      .filter((pokemon) => {
        return pokedex?.some((registered) => registered.id === pokemon.id);
      })
      .map((item) => (
        <PokeCard
          key={item.id}
          pokemon={item}
          type="pokedex"
          onClick={() => removeFromPokedex(item)}
          showDetails={() => goToDetailspage(history, item.name)}
        />
      ));
      if(pokemons.length !== 0 && loading === false){
        return <PageContainer>{pokeCards}</PageContainer>;
      }
      else {
        return <Loader/>
      }

};

export default Pokedexpage;
