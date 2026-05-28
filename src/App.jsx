import './App.css'  //  todavia no agrego nada  //
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/layout';
import Inicio from './pages/inicio';
import Productos from './pages/productos';
import Nosotros from './pages/nosotros';
import Carrito from './pages/carrito';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/carrito" element={<Carrito />} />
      </Routes>
    </Layout>  //  falta crear un 404 error
  )
}

export default App