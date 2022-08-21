import { useState } from 'react';

import './styles/App.css'
import './styles/PostForm.css'
import './styles/Feed.css'

import clockIcon from './images/clock.svg'
import userIcon from './images/user.svg'
import paperPlaneIcon from './images/paper-plane.svg'
import emptyFolderIcon from './images/empty-folder.svg'

export default function App() {
  /*const posts = [
    {
      id: Math.random(),
      content: 'Conteudo do post',
      userName: 'Bruno',
      publishedAt: new Date()
    },
    {
      id: Math.random(),
      content: 'Conteudo do post2',
      userName: 'Usuario 2',
      publishedAt: new Date()
    }
  ];*/
  const [userName, setUserName] = useState('')
  const [history, setHistory] = useState('')
  const [posts, setPosts] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();

    setPosts([
      ...posts,
      {
        id: Math.random(),
        content: history,
        userName,
        publishedAt: new Date()
      },
    ]);

    setHistory('');
    setUserName('');
  };

  return (
    <div className="wrapper">
      <form
        className="post-form"
        onSubmit={handleSubmit}
      >
        <input 
          value={history}
          placeholder="Escreva uma nova história..." 
          onChange={(event)=> setHistory(event.target.value)}
        />

        <div>
          <img src={userIcon} alt="user" />

          <input 
            value={userName}
            placeholder="Digite seu nome..." 
            onChange={(event)=> setUserName(event.target.value)}
          />

          <button type="submit">
            <img src={paperPlaneIcon} />
            Publicar
          </button>
        </div>
      </form>

      <main>
        {posts.length === 0 && <div className='feed-status'>
          <img src={emptyFolderIcon} alt='empty Folder'/>
          <h1>Não encontramos nada...</h1>
          <h2>Parece que voce e seus amigos não postaram nada. Comece a escrever uma nova história.</h2>
        </div>}
        
        {posts.length > 0 && 
        <>
          <header>
            <h1>Seu Feed</h1>
            <h2>Acompanhe o que seus amigos estão pensando em tempo real</h2>
          </header>
          
          <section className="feed">
            {posts.map(post => (
              <article key={post.id}>
                <p>{post.content}</p>

                <footer>
                  <div className="user-details">
                    <img src={userIcon} alt="user" />
                    <strong>{post.userName}</strong>
                  </div>

                  <div className="time">
                    <img src={clockIcon} alt="clock" />
                    <span>
                      Publicado em {post.publishedAt.toLocaleDateString('pt-br')}
                    </span>
                  </div>
                </footer>
              </article>
            ))}
          </section>
        </>
        }
      </main>
    </div>
  )
}
