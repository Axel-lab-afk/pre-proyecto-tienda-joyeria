import { useState, useEffect } from 'react'

function nosotros() {
  const [equipo, setEquipo] = useState([])
  const [cargando, setCargando] = useState(true)

  useEffect(() => {
    fetch('/data/nosotros.json')
      .then(res => res.json())
      .then(data => {
        setEquipo(data)
        setCargando(false)
      })
  }, [])

  if (cargando) return <p>Cargando equipo...</p>

  return (
    <div>
      <h2>Nuestro equipo</h2>
      {equipo.map(persona => (
        <div key={persona.id}>
          <h4>{persona.nombre}</h4>
          <p>{persona.puesto}</p>
          <p>{persona.email}</p>
        </div>
      ))}
    </div>
  )
}

export default nosotros