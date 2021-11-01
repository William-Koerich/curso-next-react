import { useRouter } from 'next/dist/client/router'
export default function params() {
  const router = useRouter()
  const id = router.query.id
  const name = router.query.nome
  return (
    <div>
      <h1>
        Rotas params: {id}, {name}
      </h1>
    </div>
  )
}
