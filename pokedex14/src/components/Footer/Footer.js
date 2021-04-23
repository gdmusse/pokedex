import React from "react";
import {DivFooter, ImgPokemon, DivImg, DivText, Title, Copyright, Link} from "./footerStyles"
import evee from "../../images/evee.png"
import sudo from "../../images/sudo.png"
import swinub from "../../images/swinub.png"


const Footer = () => {
    return (
        <DivFooter>
          <DivImg>
          <ImgPokemon src={evee}/>
          <ImgPokemon src={sudo}/>
          <ImgPokemon src={swinub}/>
          </DivImg>
  
          <DivText>
            <section>
              <Title>Desenvolvedores:</Title>
                <p>Gabriel Musse</p>
                <p>Lucas Bacelar</p>
                <p>Danielle Costa</p>

            </section>
            
          </DivText>
          <Copyright>Copyright © 2020</Copyright>
        </DivFooter>
      );
}
export default Footer