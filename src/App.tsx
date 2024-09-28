import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import { Header, List } from 'semantic-ui-react'
import { Post } from './models/post'
import NavBar from './layout/NavBar'

function App() {
  const [posts, setPosts] = useState<Post[]>([])

  useEffect(() => {
    axios.get<Post[]>("http://localhost:5032/api/posts")
      .then(res => {
        setPosts(res.data)
      })
  })

  return (
    <div>
      <NavBar/>

      <List>
        {posts.map((post) => (
          <List.Item key={post.id}>
            {post.title}
          </List.Item>
        ))}
      </List>

    </div>
  )
}

export default App










{/* <Header as="h2" content="Posts" icon="users"/> */}
