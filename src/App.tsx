import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import { Container, Header, List } from 'semantic-ui-react'
import { Post } from './models/post'
import NavBar from './layout/NavBar'
import PostDashboard from './layout/PostDashboard'

function App() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [selectedPost, setSelectedPost] = useState<Post | undefined>(undefined);

  function handleSelectPost(id: string) {
    setSelectedPost(posts.find(x => x.id === id));
  }

  function handleCancelSelectPost() {
    setSelectedPost(undefined);
  }

  useEffect(() => {
    axios.get<Post[]>("http://localhost:5032/api/posts")
      .then(res => {
        setPosts(res.data)
      })
  })

  return (
    <div>
      <NavBar/>

      <Container style={{marginTop: "7em"}}/>

      <PostDashboard posts={posts}
        selectedPost={selectedPost}
        selectPost={handleSelectPost}
        cancelSelectPost={handleCancelSelectPost}
        />
    </div>
  )
}

export default App










{/* <Header as="h2" content="Posts" icon="users"/> */}
