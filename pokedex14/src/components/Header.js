
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import Logo from "../images/logo.png";
import { goToHomePage, goToPokedex } from "../routes/coordinator";

const HeaderDiv = styled.div`
  background-color: #ef5350;
  height: 150px;
  display: flex;
  justify-content: space-between;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  margin: 0 auto;
`;
const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: bold;
  font-size: 40px;
`;

const ImgContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  & > img:hover {
    cursor: pointer;
  }
`;

const LogoContainer = styled.div`
  display: flex;

  flex: 1;
`;
const LogoImg = styled.img`
  width: auto;
  height: 100px;
`;

const Imagem1 = styled.img`
  width: auto;
  height: 100px;
`;

const Imagem2 = styled.img`
  width: auto;
  height: 100px;
`;
const Header = (props) => {
  const history = useHistory();
  console.log(props);

  return (
    <HeaderDiv>
      <HeaderContainer>
        <LogoContainer>
          {" "}
          <LogoImg src={Logo}></LogoImg>
        </LogoContainer>

        <TitleContainer>{props.titulo}</TitleContainer>
        <ImgContainer>
          <Imagem1
            src={props.imagem1}
            onClick={() => goToHomePage(history)}
          ></Imagem1>
          <Imagem2
            src={props.imagem2}
            onClick={() => goToPokedex(history)}
          ></Imagem2>
        </ImgContainer>
      </HeaderContainer>
    </HeaderDiv>
  );
};

export default Header;
