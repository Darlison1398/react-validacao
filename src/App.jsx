import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './views/header/Header';
import Main from './views/main/Main';
import ExibirDados from './views/main/ExibirDados';
import Editar from './views/main/Editar';

function App() {
  return (
    <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/exibir" element={<ExibirDados />} />
          <Route path="/editar/:id" element={<Editar />} />
        </Routes>
    </Router>
  );
}

export default App;
