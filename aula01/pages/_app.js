/* 
  Layout compartilhado
  estarão presentes em todas as páginas
*/
export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <style>{
        `* {
          font-family: sans-serif;
        }
      `}</style>
      Text em todas as páginas
      <Component {...pageProps} />
    </>
  )
}
