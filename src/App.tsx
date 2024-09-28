import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import { Header, List } from 'semantic-ui-react'

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
      <Header as="h2" content="Posts" icon="users"/>

      <List>
        {posts.map((post: any) => (
          <List.Item key={post.id}>
            {post.title}
          </List.Item>
        ))}
      </List>

    </div>
  )
}

export default App
