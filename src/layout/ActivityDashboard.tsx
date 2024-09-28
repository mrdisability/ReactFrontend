import React from "react";
import { Grid, List } from "semantic-ui-react";
import { Post } from "../models/post";

interface Props {
    posts: Post[];
}

export default function ActivityDashboard({posts}: Props) {
    return (
        <Grid>
            <Grid.Column width="10">
                <List>
                    {posts.map((post) => (
                    <List.Item key={post.id}>
                        {post.title}
                    </List.Item>
                    ))}
                </List>
            </Grid.Column>
        </Grid>
    )
}