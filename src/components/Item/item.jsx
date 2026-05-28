import { Link } from 'react-router-dom'

function Item({ id, nombre, precio }) {
  return (
    <div>
      <Link to={`/producto/${id}`}>
        <h3>{nombre}</h3>
      </Link>
      <p>${precio}</p>
    </div>
  )
}

export default Item