import router, { useRouter } from 'next/router'
import Link from 'next/link'

export default function rotas() {
  function navegacaoSimples(path) {
    router.push(path)
  }

  function navegacaoComParams(path) {
    router.push({
      pathname: path,
      query: {
        id: '123',
        nome: 'William'
      }
    })
  }

  return (
    <div>
      <h1>Rotas Index</h1>
      <ul>
        <Link href="/rotas/params?id=12&nome=Ana">
          <li>Params</li>
        </Link>
        <Link href="/rotas/123/buscar">
          <li>Buscar</li>
        </Link>
        <Link href="/rotas/123/William">
          <li>William</li>
        </Link>
      </ul>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start'
        }}
      >
        <button onClick={() => router.push('/rotas/123/buscar')}>Buscar</button>
        <button onClick={() => navegacaoSimples('/rotas/123/William')}>
          William
        </button>
        <button onClick={() => navegacaoComParams('/rotas/params')}>
          Params
        </button>
      </div>
    </div>
  )
}
