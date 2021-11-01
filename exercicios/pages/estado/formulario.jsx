import { useState } from 'react'

export default function formulario() {
  const [value, setValue] = useState('inicial')

  return (
    <>
      <div>
        <input
          type="text"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
      </div>
    </>
  )
}
