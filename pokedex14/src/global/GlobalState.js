import React, { useState, useEffect } from 'react';
import GlobalStateContext from './GlobalStateContext';
import useRequestPokemon from '../Hooks/useRequestPokemon';
import useGetPokedexData from '../Hooks/useGetPokedexData';

const GlobalState = (props) => {
  const [pokedex, setPokedex] = useState([]);
  const [pokemons, setPokemons] = useState([]);
  useRequestPokemon(setPokemons);
  useGetPokedexData(setPokedex);

  useEffect(() => {
    localStorage.setItem('pokedex', JSON.stringify(pokedex));
  }, [pokedex]);

  const pokemonRegistered = (poke) => {
    const index = pokedex.findIndex((i) => i.id === poke.id);
    if (index === -1) {
      return false;
    }
    return true;
  };

  const addToPokeDex = (poke) => {
    const confirm = window.confirm(
      `Você deseja adicionar ${poke.name} da sua pokedex?`
    );
    if (confirm) {
      if (!pokemonRegistered(poke)) {
        setPokedex([...pokedex, poke]);
        alert(`${poke.name} foi adicionado a sua Pokedex!`);
      } else {
        alert(`${poke.name} já está na Pokedex!`);
      }
    }
  };

  const removeFromPokedex = (poke) => {
    const confirm = window.confirm(
      `Você deseja remover ${poke.name} da sua pokedex?`
    );
    if (confirm) {
      const newPokedex = pokedex.filter((register) => register.id !== poke.id);
      setPokedex(newPokedex);
      alert(`${poke.name} foi removido da sua pokedex`);
    }
  };

  return (
    <GlobalStateContext.Provider
      value={{ pokedex, pokemons, addToPokeDex, removeFromPokedex }}
    >
      {props.children}
    </GlobalStateContext.Provider>
  );
};

export default GlobalState;
