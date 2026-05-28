import { Link } from 'react-router-dom'

function header() {
  return (
    <header>
      <h1>Joyería Elegance</h1>
      <nav>
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/productos">Productos</Link></li>
          <li><Link to="/nosotros">Nosotros</Link></li>
          <li><Link to="/carrito">Carrito</Link></li>
        </ul>
      </nav>
    </header>
  )
}  //  eliminar <ul> luego e implementar dentro de css

export default header