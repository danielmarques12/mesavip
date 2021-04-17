/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { Container, Horarios, Select } from './styles';
import Dialog from '../Dialog';
import { api } from '../../../services/api';

export default function Agendamento(props) {
  const [horarios, setHorarios] = useState([]);
  const [horarioSelecionado, setHorarioSelecionado] = React.useState(0);
  const { restaurante_id } = props;

  async function getHorarios(id) {
    return api.get(`mesas/${props.restaurante_id}`);
  }

  useEffect(() => {
    getHorarios(props.id).then((item) => {
      setHorarios(item.data);
    });
  }, []);

  return (
    <Container>
      <div className="horarios-mesas">
        <Horarios>
          <strong>Horários disponíveis</strong>
          <Select
            onChange={(event) => {
              setHorarioSelecionado(event.target.value);
            }}
          >
            {horarios.map((horario) => (
              <option key={horario.id} value={horario.id}>
                {horario.horario}
              </option>
            ))}
          </Select>
        </Horarios>
      </div>
      <Dialog
        restaurante_id={restaurante_id}
        horarioSelecionado={horarioSelecionado}
      />
    </Container>
  );
}
