import { useHistory } from "react-router-dom";
import { goToDetailspage } from "../../routes/coordinator";
import { useState } from "react";
import { PokeCard } from "../../components/index";
import styled from "styled-components";
import useRequestPokemon from "../../Hooks/useRequestPokemon";
import React, { useContext } from "react";
import { GlobalStateContext } from "../../global/GlobalStateContext";

const PageContainer = styled.main`
  padding: 45px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  grid-gap: 20px;
`;

const Homepage = () => {
  const history = useHistory();
  const [pokemons, setPokemons] = useState([]);
  const { pokedex, setPokedex } = useContext(GlobalStateContext);

  useRequestPokemon(setPokemons);

  const addToPokeDex = (poke) => {
    const index = pokedex.findIndex((i) => i.id === poke.id);
    let newPokedex = [...pokedex];
    if (index === -1) {
      newPokedex.push({ ...poke });
    } else {
      alert(`${poke.name} já está na Pokedex!`);
    }
    pokedex(setPokedex);
    alert(`${poke.name} foi adicionado a sua Pokedex!`);
  };

  const pokeCards =
    pokemons &&
    pokemons.map((item) => (
      <PokeCard
        pokemon={item}
        onClick={() => addToPokeDex(item)}
        showDetails={() => goToDetailspage(history, item.name)}
      />
    ));

  return <PageContainer>{pokeCards}</PageContainer>;
};

export default Homepage;
