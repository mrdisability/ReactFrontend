import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import { Container, Header, List } from 'semantic-ui-react'
import { Post } from './models/post'
import NavBar from './layout/NavBar'
import ActivityDashboard from './layout/ActivityDashboard'

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

      <Container style={{marginTop: "7em"}}/>

      <ActivityDashboard posts={posts}/>

    </div>
  )
}

export default App










{/* <Header as="h2" content="Posts" icon="users"/> */}
