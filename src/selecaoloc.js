import React, { useState } from 'react';
import './selecaoloc.css'; // Estilo CSS opcional

function App() {
  const [selectedOption, setSelectedOption] = useState(null);

  const selectOption = (option) => {
    setSelectedOption(option);
  };

  const resetSelection = () => {
    setSelectedOption(null);
  };

  const confirmSelection = () => {
    // Implemente a lógica para confirmar a seleção aqui
    console.log("Opção confirmada:", selectedOption);
  };

  return (
    <div className="App">
      <h1>Agendamento - Centro de Atendimento Comunitario</h1>
      <h2>Clinica - Escola de Nutrição</h2>
      <h3>Nutrição Esportiva</h3>
      <div className="options">
        <div className="option">
          <img
            src="/src/img/ceub.jpg"
            alt="Unidade CAC Taguatinga"
            className={selectedOption === 1 ? 'selected' : ''}
            onClick={() => selectOption(1)}
          />
          <p>Unidade CAC Ed. União</p>
        </div>
        <div className="option">
          <img
            src="/src/img/ceubtagua.jpg"
            alt="Unidade CAC Ed. União"
            className={selectedOption === 2 ? 'selected' : ''}
            onClick={() => selectOption(2)}
          />
          <p>Unidade CAC Taguatinga</p>
        </div>
      </div>
      
        <div>
          
          <button onClick={resetSelection}>Voltar</button>
          <button onClick={confirmSelection}>Avançar</button>
        </div>
      
    </div>
  );
}

export default App;
