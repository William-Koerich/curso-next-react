import { useState } from 'react'

export default function Contador() {
  const [value, setValue] = useState(0)

  function decrementar() {
    setValue(value - 1)
  }

  function incrementar() {
    setValue(value + 1)
  }

  return (
    <>
      <h1>Contador</h1>
      <div>Valor = {value}</div>
      <button onClick={() => incrementar()}>Incrementar</button>
      <button onClick={() => decrementar()}>Decrementar</button>
    </>
  )
}
