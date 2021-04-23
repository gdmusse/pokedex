import React, {useContext} from 'react'
import { useParams } from "react-router-dom";
import BASE_URL from '../../routes/urls'
import useRequestData from '../../Hooks/useRequestData'
import Loader from "../../components/Loader"
import {
  DetailsCard, 
  Linha,
  ColunaImagens,
  BoxImagens,

} from './DetailsPageStyled'

import GlobalStateContext from '../../global/GlobalStateContext';

const DetailsPage = () => {

  const { loading} = useContext(GlobalStateContext);

    const pathParams = useParams();
    
    
    const getDetails = useRequestData(`${BASE_URL}/pokemon/${pathParams.name}`, undefined);
   
    if(getDetails !== 0 && loading === false){
      return (
        <DetailsCard>
            <ColunaImagens>
            { getDetails && (
                <Linha>
                <BoxImagens src={getDetails.sprites.front_default} alt= 'front' />
                <BoxImagens src={getDetails.sprites.back_default}  alt= 'back'/>
                </Linha>
            )}
            </ColunaImagens>


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
             <h2>Sou do tipo</h2>
             {getDetails && getDetails.types.map ((type) => {
               console.log(type.type.name)
                 return (
                     <Linha>
                        <p>{type.type.name}</p>
                     </Linha>
                 )
             })

             }
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
    }
    else {
      return <Loader/>
    }
       
    };

export default DetailsPage;
    