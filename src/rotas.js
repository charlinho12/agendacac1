import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import HomePage from './HomePage';
import SelecaoLoc from './SelecaoLoc';

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={HomePage} />
      <Route path="/selecaoloc" component={SelecaoLoc} />
    </BrowserRouter>
  );
}

export default App;
