import React, { useState, useEffect } from "react";
import GlobalStateContext from "./GlobalStateContext";
import useRequestPokemon from "../Hooks/useRequestPokemon";
import useGetPokedexData from "../Hooks/useGetPokedexData";
import { message } from "antd";

const GlobalState = (props) => {
  const [pokedex, setPokedex] = useState([]);
  const [pokemons, setPokemons] = useState([]);
  useRequestPokemon(setPokemons);
  useGetPokedexData(setPokedex);

  useEffect(() => {
    localStorage.setItem("pokedex", JSON.stringify(pokedex));
  }, [pokedex]);

  const successAlert = (msg) => {
    message.success({
      content: `${msg}`,
      duration: 1,
      className: "custom-class",
      style: {
        marginTop: "15vh",
      },
    });
  };

  const errorAlert = (msg) => {
    message.error({
      content: `${msg}`,
      className: "custom-class",
      style: {
        marginTop: "15vh",
      },
    });
  };

  const pokemonRegistered = (poke) => {
    const index = pokedex.findIndex((i) => i.id === poke.id);
    if (index === -1) {
      return false;
    }
    return true;
  };

  const addToPokeDex = (poke) => {
    const pokeNameCapitalized = poke.name.replace(/^\w/, (c) =>
      c.toUpperCase()
    );
    const confirm = window.confirm(
      `Você deseja adicionar ${pokeNameCapitalized} a sua pokedex?`
    );
    if (confirm) {
      if (!pokemonRegistered(poke)) {
        setPokedex([...pokedex, poke]);
        successAlert(`${pokeNameCapitalized} foi adicionado a sua Pokedex!`);
      } else {
        errorAlert(`${pokeNameCapitalized} já está na sua Pokedex!`);
      }
    }
  };

  const removeFromPokedex = (poke) => {
    const pokeNameCapitalized = poke.name.replace(/^\w/, (c) =>
      c.toUpperCase()
    );
    const confirm = window.confirm(
      `Você deseja remover ${pokeNameCapitalized} da sua pokedex?`
    );
    if (confirm) {
      const newPokedex = pokedex.filter((register) => register.id !== poke.id);
      setPokedex(newPokedex);
      successAlert(`${pokeNameCapitalized} foi removido da sua pokedex`);
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
