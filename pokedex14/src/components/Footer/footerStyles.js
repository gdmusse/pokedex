import styled from "styled-components";


export const DivFooter = styled.div`
  background-color: #ef5350;
  font-family: 'Press Start 2P', cursive;;
  color: white;
  height: 23em;
  padding: 0 10em;
  margin-top: 4em;
  @media (min-device-width: 320px) and (max-device-width: 420px) {
    flex-direction: column;
    padding: 1em;
    height: 100%;
  }

`;
export const DivImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 25px 0 20px 0;
`;

export const DivText = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 20px 0 10px 0;
  border: 1px solid black;
  border-left: none;
  border-right: none;
  @media (min-device-width: 320px) and (max-device-width: 420px) {
    flex-direction: column;
    text-align: center;
    font-size: 20px;
  }
`;

export const ImgPokemon = styled.img`
  width: 10%;
  @media (min-device-width: 320px) and (max-device-width: 420px) {
    width: 20%;
  }
`;

export const Title = styled.p`
 font-weight: bold;
`

export const Copyright = styled.p`
  text-align: center;
  font-weight: bold;
  padding-top: 20px;
  color:black;
`
export const Link = styled.a`
  text-decoration: none;
  color: #222222;
  &:hover{
    text-decoration: none;
    color: #ffd500;
  }
`