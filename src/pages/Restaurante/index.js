/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { Container, Main } from './styles';
import { banner } from '../../assets/placeholders';

import RestauranteInfo from '../../components/Restaurante/RestauranteInfo';
import Agendamento from '../../components/Restaurante/Agendamento';
import Banner from '../../components/Restaurante/Banner';

export default function Restaurante({ match }) {
  const restauranteId = match.params.id;

  return (
    <Container>
      <Banner id={restauranteId} />

      <Main>
        <div className="grid">
          <RestauranteInfo id={restauranteId} />
          <Agendamento id={restauranteId} />
        </div>
      </Main>
    </Container>
  );
}
