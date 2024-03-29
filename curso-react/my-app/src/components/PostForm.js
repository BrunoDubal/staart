import '../styles/PostForm.css'

import userIcon from '../images/user.svg'
import paperPlaneIcon from '../images/paper-plane.svg'

import { useState } from 'react'


export default function PostForm(props) {
  const [userName, setUserName] = useState('')
  const [history, setHistory] = useState('')

  function handleSubmit(event){
    event.preventDefault()
  
    props.onSubmit({ userName, history })
  
    setHistory('')
    setUserName('')
  } 

  return (
    <form className="post-form" onSubmit={handleSubmit}>
      <input
        value={history}
        placeholder="Escreva uma nova história..."
        onChange={event => setHistory(event.target.value)}
      />

      <div>
        <img src={userIcon} alt="user" />

        <input
          value={userName}
          placeholder="Digite seu nome..."
          onChange={event => setUserName(event.target.value)}
        />

        <button type="submit">
          <img src={paperPlaneIcon} />
          Publicar
        </button>
      </div>
    </form>
  )
}