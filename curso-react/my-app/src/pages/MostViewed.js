import Feed from '../components/Feed.js'

export default function MostViewed() {
  const posts = []

  return (
    <main className='most-viewed'>
      <Feed 
      posts={posts}
      title={'Mais Vistos'}
      subtitle={'Acompanhe os assuntos mais comentados no momentoe fique por dentro de qualquer novidade'}
      />
    </main>
  )
}