import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './views/header/Header';
import Main from './views/main/Main';
import ExibirDados from './views/main/ExibirDados';
import Editar from './views/main/Editar';
import Login from './views/login/Login';
import CriarConta from './views/login/CriarConta';

function App() {
 
  return (
    <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/criarConta" element={<CriarConta />} />
          <Route path="/main" element={<Main />} />
          <Route path="/exibir" element={<ExibirDados />} />
          <Route path="/editar/:id" element={<Editar />} />
        </Routes>
    </Router>
  );
}

export default App;