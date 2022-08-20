// Rota dinâmica: route => posts[slug]
import { useRouter } from 'next/router'
import Link from 'next/link'
// file [id].js e folder [id]/index.js são equivalentes

// Comportamento de spa
// As transições do lado do cliente com Link
// Com tag a, ele faz um refresh de tudo, e baixa novamente os arquivos
export default function Post() {
  const router = useRouter()
  return (
    <div>
      <p>
        Página de post: {router.query.slug}
      </p>
      <Link href="/">
        <a>Ir para home</a>
      </Link>
      <Link href={`${router.query.slug}/comentarios`}>
        <a>Ir para comentarios</a>
      </Link>
    </div>
  )
}
