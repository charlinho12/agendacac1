// SelecaoEspecialidades.jsx
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
  const [horaConsulta, setHoraConsulta] = useState(null);

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

  const handleHoraConsultaChange = (date) => {
    setHoraConsulta(date);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Especialidade selecionada:', especialidade);
    console.log('Data da consulta:', dataConsulta);
    console.log('Hora da consulta:', horaConsulta);
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
        <div>
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
        <div>
          <label htmlFor="horaConsulta">Hora da Consulta:</label>
          <select id="horaConsulta" value={horaConsulta} onChange={(e) => setHoraConsulta(e.target.value)}>
            <option value="">Selecione a hora</option>
            <option value="08:00">08:00</option>
            <option value="08:30">09:00</option>
            <option value="08:00">10:00</option>
            <option value="08:30">11:00</option>
            <option value="08:00">13:00</option>
            <option value="08:30">14:00</option>
            <option value="08:00">15:00</option>
            <option value="08:30">16:00</option>
            {/* Adicione mais opções de horário conforme necessário */}
          </select>
        </div>
        <button type="submit" style={{ marginTop: '10px' }}>Agendar Consulta</button>
      </form>
    </div>
  );
}

export default SelecaoEspecialidades;
