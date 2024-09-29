import { Button, Grid, Item, ItemContent, ItemDescription, ItemExtra, ItemHeader, ItemMeta, Label, List, Segment } from "semantic-ui-react";
import { Post } from "../models/post";
import PostDetails from "./PostDetails";
import PostForm from "./PostForm";

interface Props {
    posts: Post[];
    selectedPost: Post | undefined;
    selectPost: (id: string) => void;
    cancelSelectPost: () => void;
    editMode: boolean;
    handleFormOpen: (id: string) => void;
    handleFormClose: () => void;
}

export default function PostDashboard({posts, selectedPost, 
    selectPost, cancelSelectPost, handleFormOpen, handleFormClose, editMode}: Props) {
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
                {selectedPost &&
                    <PostDetails 
                        post={selectedPost} 
                        cancelSelectPost={cancelSelectPost}
                        handleFormOpen={handleFormOpen}/>}

                {/* Only open when in edit mode */}
                {editMode && <PostForm handleFormClose={handleFormClose}/>}
                
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