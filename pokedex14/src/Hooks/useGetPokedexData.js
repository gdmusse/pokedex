import { useEffect } from 'react';

const useGetPokedexData = (setData) => {
  useEffect(() => {
    const pokedexData = localStorage.getItem('pokedex');
    if (pokedexData) {
      setData(JSON.parse(pokedexData));
    }
  }, [setData]);
};

export default useGetPokedexData;
