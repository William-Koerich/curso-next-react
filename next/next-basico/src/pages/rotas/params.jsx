import { useRouter } from 'next/router'
import Link from 'next/link'

export default function params() {
  const router = useRouter()
  const id = router.query.id
  const name = router.query.nome
  return (
    <div>
      <h1>
        Rotas params: {id}, {name}
      </h1>
      <Link href="/rotas">
        <button>Voltar</button>
      </Link>
    </div>
  )
}
