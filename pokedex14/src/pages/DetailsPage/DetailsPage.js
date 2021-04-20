import React from 'react'
import { useParams } from "react-router-dom";
import BASE_URL from '../../routes/urls'
import useRequestData from '../../Hooks/useRequestData'
import {DetailsCard, Linha } from './DetailsPageStyled'


const DetailsPage = () => {

    const pathParams = useParams();
      //Requisição dos dados de detalhes dos pokémons
    const getDetails = useRequestData(`${BASE_URL} / ${pathParams.name}`, undefined);
    
       return (
        <DetailsCard>
            <Linha>
            { getDetails && (
                <Linha>
                <img src={getDetails.sprites.front_default} alt= 'front' />
                <img src={getDetails.sprites.back_default}  alt= 'back'/>
                </Linha>
            )}
            </Linha>

            <Linha>
             <h2>Sou do tipo</h2>
             {getDetails && getDetails.types.map ((type) => {
                 return (
                     <Linha>
                        <p>Meu poder é: {type.type.name}</p>
                     </Linha>
                 )
             })

             }
            </Linha>

            <Linha>
            <h2>Características</h2>
            {getDetails &&
              getDetails.stats.map((stat) => {
                return (
                  <Linha>
                    <p>Meu {stat.stat.name} é {stat.base_stat}</p>
                  </Linha>
                );
              })}

            </Linha>

            <Linha>
            <h2>Meus 5 movimentos são</h2>
            {getDetails &&
              getDetails.moves.map((move, num) => {
                return num < 5 && <p>{move.move.name}</p>;
              })}
            </Linha>
        </DetailsCard>
      );
    };

export default DetailsPage;
    