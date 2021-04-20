import styled from 'styled-components';

const typeColors = {
  fire: '#EE8130',
  grass: '#7AC74C',
  water: '#6390F0',
  bug: '#A6B91A',
  normal: '#A8A77A',
  flying: '#A98FF3',
  fighting: '#C22E28',
  ghost: '#735797',
  ground: '#E2BF65',
  ice: '#96D9D6',
  poison: '#A33EA1',
  psychic: '#F95587',
  rock: '#B6A136',
  dragon: '#6F35FC',
  electric: '#F7D02C',
  fairy: '#D685AD',
};

const PokeCardContainer = styled.article`
  *,
  *:before,
  *:after {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  font-family: sans-serif;

  display: flex;
  flex-direction: column;

  & > div:first-of-type {
    padding: 16px;
    & > img {
      border-radius: 8px;
      background: #ececec;
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
`;

const PokeDetails = styled.section`
  padding: 0 15px;
  display: flex;
  flex-direction: column;

  & > h2 {
    padding-top: 12px;
    text-transform: capitalize;
  }

  & > h5 {
    color: #7c7c7c;
  }
`;

const PokeTypes = styled.section`
  padding-top: 8px;
  display: flex;
`;

const Type = styled.span`
  text-transform: capitalize;
  background: ${(props) => typeColors[props.type]};
  padding: 6px 22px;
  border-radius: 4px;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
`;

const CardButtons = styled.section`
  padding-top: 20px;
  display: flex;
  justify-content: space-between;
`;

export { PokeCardContainer, PokeDetails, PokeTypes, Type, CardButtons };
