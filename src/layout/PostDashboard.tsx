import { Button, Grid, Item, ItemContent, ItemDescription, ItemExtra, ItemHeader, ItemMeta, Label, Segment } from "semantic-ui-react";
import { Post } from "../models/post";
import PostDetails from "./PostDetails";
import EditPostForm from "./EditPostForm";
import CreatePostForm from "./CreatePostForm";

interface Props {
    posts: Post[];
    selectedPost: Post | undefined;
    selectPost: (id: string) => void;
    cancelSelectPost: () => void;
    editMode: boolean;
    handleFormOpen: (id: string) => void;
    handleFormClose: () => void;
    editPost: (post: Post) => void;
    createMode: boolean;
    createPost: (post: Post) => void;
}

export default function PostDashboard({posts, selectedPost, 
    selectPost, cancelSelectPost, handleFormOpen, handleFormClose, editMode,
        editPost, createMode}: Props) {
    return (
        <Grid>
            <Grid.Column width="10">
                <Segment>
                    <Item.Group divided>
                        {posts.map((post) => (
                        <Item key={post.id} selectPost={selectPost}>
                            <ItemContent>
                                <ItemHeader as='a'>{post.title}</ItemHeader>
                                <ItemMeta>{post.body}</ItemMeta>
                                <ItemDescription>
                                {/* <Image src='/images/wireframe/short-paragraph.png' /> */}
                                </ItemDescription>
                                <ItemExtra>
                                    <Label basic content={post.tag}/>

                                    {/* Button to view a post */}
                                    <Button onClick={() => selectPost(post.id)} floated="right" content="View"/>
                                </ItemExtra>
                            </ItemContent>
                        </Item>
                        ))}
                    </Item.Group>
                </Segment>
            </Grid.Column>
            <Grid.Column width="6">
                {/* Show when not in editMode */}
                {selectedPost && !editMode &&
                    <PostDetails 
                        post={selectedPost} 
                        cancelSelectPost={cancelSelectPost}
                        handleFormOpen={handleFormOpen}/>}

                {/* Only open when in edit mode */}
                {editMode && 
                    <EditPostForm 
                        post={selectedPost}
                        handleFormClose={handleFormClose}
                        editPost={editPost}/>}

                {/* Only open when in edit mode */}
                {createMode && 
                    <CreatePostForm 
                        handleFormClose={handleFormClose}
                        createPost={createPost}/>}
                
            </Grid.Column>
        </Grid>
    )
}








{/* <List>
    {posts.map((post) => (
    <List.Item key={post.id}>
        {post.title}
    </List.Item>
    ))}
</List> */}