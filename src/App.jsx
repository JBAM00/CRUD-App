import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"
import Userlist from './Component/Userlist';
import Add from './Component/Add';
import Edit from './Component/Edit';

function App() {
  return (
    <div className=" container" >
      <h1 className=" mt-3 mb-3 text-center">
        <b>CRUD APP</b>
      </h1>
      <BrowserRouter>
        <Routes>
          <Route path = "/" element={<Userlist />} />
          <Route path="/add" element={<Add />} />
          <Route path="/edit/:user_id" element={<Edit />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App; 