import { useRouter } from 'next/dist/client/router'
export default function buscar() {
  const router = useRouter()

  const id = router.query.id
  return (
    <div>
      <h1>Rotas / {id} / buscar</h1>
    </div>
  )
}
