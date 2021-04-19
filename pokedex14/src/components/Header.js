import { useHistory } from "react-router-dom";
import styled from "styled-components";
import Logo from "../images/logo.png"
import {goToHomePage, goToPokedex} from "../routes/coordinator"

const HeaderDiv = styled.div`
background-color: #EF5350;
height: 150px;
display: flex;
justify-content: space-between;
`

const TitleContainer = styled.div`

  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;

const DivImagens = styled.div `
display:flex;
width: 400px;
& > img:hover  {
    cursor: pointer;
}
`

const Imagem1 = styled.img`


`

const Imagem2 = styled.img`

`
const Header = (props) => {
    const history = useHistory();
    console.log(props)

    return (
        <HeaderDiv>
            <img src={Logo}></img>
            <TitleContainer>{props.titulo}</TitleContainer>
            <DivImagens>
                <Imagem1 src={props.imagem1} onClick={() => goToHomePage(history)}></Imagem1>
                <Imagem2 src={props.imagem2} onClick={() => goToPokedex(history)} ></Imagem2>
            </DivImagens>
  
        </HeaderDiv>
      );
    };

export default Header;
    