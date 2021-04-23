import React, { useContext } from 'react'
import { useParams } from "react-router-dom";
import BASE_URL from '../../routes/urls'
import useRequestData from '../../Hooks/useRequestData'
import Loader from "../../components/Loader"
import {
  DetailsCard,
  ColunaImagens,
  BoxImagens,
  Caracteristicas,
  Tipo,
  Informacoes,
  Movimentos,
  Tipos

} from './DetailsPageStyled'

import GlobalStateContext from '../../global/GlobalStateContext';

const DetailsPage = () => {

  const { loading } = useContext(GlobalStateContext);
  let totalStats = 0;

  const pathParams = useParams();

  const getDetails = useRequestData(`${BASE_URL}/pokemon/${pathParams.name}`, undefined);

  if (getDetails !== 0 && loading === false) {
    return (
      <DetailsCard>
        <ColunaImagens>
          {getDetails && (
            <>
              <BoxImagens src={getDetails.sprites.front_default} alt='front' />
              <BoxImagens src={getDetails.sprites.back_default} alt='back' />
            </>
          )}
        </ColunaImagens>


        <Caracteristicas>
          <h2>Características</h2>

          <table>
            <tbody>
              {getDetails &&
                getDetails.stats.map((stat) => {
                  totalStats += stat.base_stat;
                  return (
                    <tr>
                      <td>{stat.stat.name}</td>
                      <td>{stat.base_stat}</td>
                      <td><meter min="0" max="190" low="60" high="100" optimum="150" value={stat.base_stat}></meter></td>
                    </tr>
                  );
                })}
            </tbody>
            <tfoot>
              <tr>
                <td>Total</td>
                <td>{totalStats}</td>
              </tr>
            </tfoot>
          </table>

        </Caracteristicas>

        <Informacoes>

          <Tipos>

            <h2>Tipo</h2>
            {getDetails && getDetails.types.map((type) => {
              console.log(type.type.name)
              return (
                <Tipo type={type.type.name}>{type.type.name}</Tipo>
              )
            })
            }
          </Tipos>

          <Movimentos>
            <h2>Movimentos (5)</h2>

            <table>
              <thead>
                <tr>
                  <th>Move</th> 
                  <th>Level</th>
                </tr>
              </thead>
              {getDetails &&
                getDetails.moves.map((move, num) => {
                  return num < 5 && <tr>
                    <td>{move.move.name} </td>
                    <td>{move.version_group_details[0].level_learned_at}</td>
                  </tr>;
                })}
            </table>

          </Movimentos>
        </Informacoes>
      </DetailsCard>
    );
  }
  else {
    return <Loader />
  }

};

export default DetailsPage;
