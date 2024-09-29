import { Button, Card, CardContent, CardDescription, CardHeader, CardMeta, Icon } from "semantic-ui-react";
import { Post } from "../models/post";

interface Props {
    post: Post;
    cancelSelectPost: () => void;
    openForm: (id: string) => void;
}

export default function PostDetails({post, cancelSelectPost, openForm}: Props) {
    return (
        <Card fluid>
            {/* <Image src='/images/avatar/large/matthew.png' wrapped ui={false} /> */}
            <CardContent>
            <CardHeader>{post.title}</CardHeader>
            <CardMeta>
                <span className='date'>{post.createdDate}</span>
            </CardMeta>
            <CardDescription>
                {post.body}
            </CardDescription>
            </CardContent>
            <CardContent extra>
            <a>
                <Icon name='user' />
                {post.tag}
                
                {/* Edit and cancel buttons */}
                <Button.Group widths="2">
                    <Button onClick={() => openForm(post.id)} basic color="blue" content="Edit"/>
                    <Button onClick={cancelSelectPost} basic color="grey" content="Cancel"/>
                </Button.Group>
            </a>
            </CardContent>
        </Card>
    )
}