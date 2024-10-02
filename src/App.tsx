import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import { Container } from 'semantic-ui-react'
import { Post } from './models/post'
import NavBar from './layout/NavBar'
import PostDashboard from './layout/PostDashboard'

function App() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [selectedPost, setSelectedPost] = useState<Post | undefined>(undefined);
  const [editMode, setEditMode] = useState(false);

  const [createMode, setCreateMode] = useState(false);

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

  // Show create form when pressing on navbar button
  function handleCreateFormOpen(id?: string) {
    setCreateMode(true);
    setEditMode(false);
  }

  function handleFormClose() {
    setEditMode(false);
    setCreateMode(false);
  }

  // ...post means it gets all the values of post

  function handleEditPost(post: Post) {
    setPosts([...posts.filter(x => x.id !== post.id), post])
    setEditMode(false);
    setSelectedPost(post);
    setCreateMode(false);
  }

  function handleCreatePost(post: Post) {
    setPosts([...posts, post]);
    setEditMode(false);
    setCreateMode(false);
    setSelectedPost(post);

    console.log(post)
  }

  useEffect(() => {
    axios.get<Post[]>("http://localhost:5032/api/posts")
      .then(res => {
        setPosts(res.data)
      })
  })

  return (
    <div>
      <NavBar formOpen={handleCreateFormOpen}/>

      <Container style={{marginTop: "7em"}}/>

      <PostDashboard posts={posts}
        selectedPost={selectedPost}
        selectPost={handleSelectPost}
        cancelSelectPost={handleCancelSelectPost}
        handleFormOpen={handleFormOpen}
        handleFormClose={handleFormClose}
        editMode={editMode}
        editPost={handleEditPost}
        createMode={createMode}
        createPost={handleCreatePost}
        />
    </div>
  )
}

export default App










{/* <Header as="h2" content="Posts" icon="users"/> */}
