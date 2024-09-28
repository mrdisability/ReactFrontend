import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    axios.get("http://localhost:5032/api/posts")
      .then(res => {
        setPosts(res.data)
      })
  })

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map((post: any) => (
          <li key={post.id}>
            {post.title}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
