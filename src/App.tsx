import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import { Container } from 'semantic-ui-react'
import { Post } from './models/post'
import NavBar from './layout/NavBar'
import PostDashboard from './layout/PostDashboard'
import {v4 as uuid} from 'uuid'

function App() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [selectedPost, setSelectedPost] = useState<Post | undefined>(undefined);
  const [editMode, setEditMode] = useState(false);

  function handleSelectPost(id: string) {
    setSelectedPost(posts.find(x => x.id === id));
  }

  function handleCancelSelectPost() {
    setSelectedPost(undefined);
  }

  function handleFormOpen(id?: string) {
    id ? handleSelectPost(id) : handleCancelSelectPost();
    setEditMode(true);
  }

  function handleFormClose() {
    setEditMode(false);
  }

  // ...post means it gets all the values of post

  function handleCreateOrEditPost(post: Post) {
    post.id
      ? setPosts([...posts.filter(x => x.id !== post.id), post])
      : setPosts([...posts, {...post, id: uuid()}]);
    setEditMode(false);
    setSelectedPost(post);
  }

  useEffect(() => {
    axios.get<Post[]>("http://localhost:5032/api/posts")
      .then(res => {
        setPosts(res.data)
      })
  })

  return (
    <div>
      <NavBar formOpen={handleFormOpen}/>

      <Container style={{marginTop: "7em"}}/>

      <PostDashboard posts={posts}
        selectedPost={selectedPost}
        selectPost={handleSelectPost}
        cancelSelectPost={handleCancelSelectPost}
        handleFormOpen={handleFormOpen}
        handleFormClose={handleFormClose}
        editMode={editMode}
        handleCreateOrEditPost={handleCreateOrEditPost}
        />
    </div>
  )
}

export default App










{/* <Header as="h2" content="Posts" icon="users"/> */}
