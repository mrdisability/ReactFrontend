import { Grid, Item, ItemContent, ItemDescription, ItemExtra, ItemHeader, ItemMeta, List, Segment } from "semantic-ui-react";
import { Post } from "../models/post";
import PostDetails from "./PostDetails";
import PostForm from "./PostForm";

interface Props {
    posts: Post[];
}

export default function PostDashboard({posts}: Props) {
    return (
        <Grid>
            <Grid.Column width="10">
                <Segment>
                    <Item.Group divided>
                        {posts.map((post) => (
                        <Item key={post.id}>
                            <ItemContent>
                                <ItemHeader as='a'>{post.title}</ItemHeader>
                                <ItemMeta>{post.body}</ItemMeta>
                                <ItemDescription>
                                {/* <Image src='/images/wireframe/short-paragraph.png' /> */}
                                </ItemDescription>
                                <ItemExtra>{post.tag}</ItemExtra>
                            </ItemContent>
                        </Item>
                        ))}
                    </Item.Group>
                </Segment>
            </Grid.Column>
            <Grid.Column width="6">
                {posts[0] &&
                    <PostDetails post={posts[0]} />}

                <PostForm/>
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