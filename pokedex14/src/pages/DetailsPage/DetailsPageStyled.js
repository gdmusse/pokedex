import styled from "styled-components";

export const DetailsCard = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  border-left: 1px solid rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(5px);
  margin: auto;
  text-align: center;
  margin-top: 40px;
  color: white;
  margin-left: 80px;
  background-color: #1c1c21;
  border: 1px solid black;
  box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);
  border-radius: 15px;
  background: rgba(169, 169, 169, 0.5);
  @media (max-width: 1200px) {
    margin-left: 35px;
    margin-top: 100px;
  }
  @media (max-width: 700px) {
    margin-left: 10px;
    margin-top: 30px;
    overflow: hidden;
    width: 95%;
    flex-direction: column;
    margin-bottom: 20px;
  }
  
`;

export const Linha = styled.div`
  width: 100%;
  color: black;
`;

export const ColunaImagens = styled.div`
  align-self: center;
  height: 75%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const BoxImagens = styled.img`
  height: 25vh;
  @media (max-width: 700px) {
    height: 20vh;
  }
`;
