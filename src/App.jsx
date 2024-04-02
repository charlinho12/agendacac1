import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { registerLocale, setDefaultLocale } from 'react-datepicker';
import ptBR from 'date-fns/locale/pt-BR'; // Importe o localizador para português
import './selecaoesp.css';

registerLocale('pt-BR', ptBR);
setDefaultLocale('pt-BR');

function SelecaoEspecialidades() {
  const [especialidade, setEspecialidade] = useState('');
  const [dataConsulta, setDataConsulta] = useState(null);

  const especialidades = [
    'Psicologo',
    'Nutricionista Esportivo',
    'Nutricionista Clinico',
    
  ];

  const handleEspecialidadeChange = (event) => {
    setEspecialidade(event.target.value);
  };

  const handleDataConsultaChange = (date) => {
    setDataConsulta(date);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Especialidade selecionada:', especialidade);
    console.log('Data da consulta:', dataConsulta);
  };

  return (
    <div>
      <h1>Marcação de Consulta</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="especialidade">Especialidade:</label>
          <select id="especialidade" value={especialidade} onChange={handleEspecialidadeChange}>
            <option value="">Selecione uma especialidade</option>
            {especialidades.map(especialidade => (
              <option key={especialidade} value={especialidade}>{especialidade}</option>
            ))}
          </select>
        </div>
        <div style={{ position: 'relative' }}>
          <label htmlFor="dataConsulta">Data da Consulta:</label>
          <DatePicker
            id="dataConsulta"
            selected={dataConsulta}
            onChange={handleDataConsultaChange}
            dateFormat="dd/MM/yyyy"
            calendarClassName="calendario-fixo"
            inline
          />
        </div>
        <button type="submit" style={{ marginTop: '10px' }}>Agendar Consulta</button>
      </form>
    </div>
  );
}

export default SelecaoEspecialidades;
