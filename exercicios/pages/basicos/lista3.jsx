function gerarLista(final = 10) {
  const lista = []
  for (let i = 1; i <= final; i++) {
    lista.push(<span id={i}>{i},</span>)
  }

  return lista
}

export default function lista3() {
  return (
    <>
      <div>{gerarLista(20)}</div>

      <div>{gerarLista(2)}</div>
    </>
  )
}
