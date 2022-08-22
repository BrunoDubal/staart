import { useState } from 'react'

import PostForm from '../components/PostForm.js'
import Feed from '../components/Feed.js'

export default function Home() {
  const [posts, setPosts] = useState([])

  function handleSubmit({ history, userName }) {

    setPosts([
      ...posts,
      {
        id: Math.random(),
        content: history,
        userName,
        publishedAt: new Date()
      }
    ])
  }

  return (
    <>
    <PostForm onSubmit={handleSubmit}/>

    <main>
      <Feed posts={posts}/>
    </main>
    </>
  )
}