import getPokemons from '../utils/getPokemons';
import { useEffect } from 'react';

const useRequestPokemon = (setData) => {
  useEffect(() => {
    const allPokemons = async () => {
      const result = await getPokemons();
      setData(result);
    };
    allPokemons();
  }, [setData]);
};

export default useRequestPokemon;
