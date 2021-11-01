import { useRouter } from 'next/router'
import Link from 'next/link'

export default function buscar() {
  const router = useRouter()

  const id = router.query.id
  return (
    <div>
      <h1>Rotas / {id} / buscar</h1>
      <Link href="/rotas">
        <button>Voltar</button>
      </Link>
    </div>
  )
}
