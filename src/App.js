import React from 'react';

import {MainPage, Login, Registeration} from './Containers/index';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/register' element={<Registeration />}></Route>
          <Route exact path='/' element={<Login />}></Route>
          <Route exact path='/home' element={<MainPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
