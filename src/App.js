import React from 'react';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route path="/"></Route>
            <Route path="/:id"></Route>
          </Route>
          <Route path="/contato" />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
