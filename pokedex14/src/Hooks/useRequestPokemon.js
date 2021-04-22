import getAllPokemons from '../utils/getAllPokemons';
import { useEffect } from 'react';

const useRequestPokemon = (setData) => {
  useEffect(() => {
    const allPokemons = async () => {
      const result = await getAllPokemons(20);
      setData(result);
    };
    allPokemons();
  }, [setData]);
};

export default useRequestPokemon;
