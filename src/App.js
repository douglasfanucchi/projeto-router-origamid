import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Products from './pages/Products';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route path="/" element={<Products />}></Route>
            <Route path="/:id"></Route>
          </Route>
          <Route path="/contato" />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
