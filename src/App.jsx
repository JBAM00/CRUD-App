import { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Userlist from './Component/Userlist';
import "boostrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <div id="container" >
      <h1 className="mt-3 mb-3 text-center">
        <b>CRUD APP</b>
      </h1>
      <BrowserRouter>
        <Routes>
          <Route path = "/" element={<Userlist/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;