// Rota dinâmica: route => posts[slug]
import { useRouter } from 'next/router'
import Link from 'next/link'

export default function Post() {
  const router = useRouter()
  return (
    <div>
      <p>
        Comentários do post com slug: {router.query.slug}
      </p>
      <Link href="/">
        <a>Ir para home</a>
      </Link>
      <Link href={`/posts/${router.query.slug}`}>
        <a>Ir para o post</a>
      </Link>
    </div>
  )
}
