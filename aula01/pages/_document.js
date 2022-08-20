/*
  Podemos customizar até a tag document, até essa parte mais externa, 
  como vai renderizar a tag body e tudo mais.
*/
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="pt-br">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
