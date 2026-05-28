import { useState, useEffect } from 'react'
import Item from '../Item/item'

function ItemListContainer() {
  const [productos, setProductos] = useState([])

  useEffect(() => {
    fetch('/src/productos.json')
      .then(res => res.json())
      .then(data => setProductos(data))
  }, [])

  return (
    <main>
      <h2>Nuestros productos</h2>
      {productos.map(producto => (
        <Item
          key={producto.id}
          id={producto.id}   //me falta resolver
          nombre={producto.nombre}
          precio={producto.precio}
        />
      ))}
    </main>
  )
}

export default ItemListContainer