import styled from "styled-components";

export const DetailsCard = styled.div `
width:90%;
display: flex;
justify-content: center;
border-top: 1px solid rgba(255, 255, 255, 0.5);
border-left: 1px solid rgba(255, 255, 255, 0.5);
backdrop-filter: blur(5px);
margin: auto;
text-align: center;
margin-top: 10px;
color: white;
margin-left: 30px;
background-color: #1C1C21;
border: 1px solid black;
box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);
border-radius: 15px;
background: rgba(169, 169, 169,0.5);
`

export const Linha = styled.div `
width: 100%;
color:black;
`

export const ColunaImagens = styled.div`
  align-self: center;
  height: 75%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
export const BoxImagens = styled.img`
  height: 25vh;
`

