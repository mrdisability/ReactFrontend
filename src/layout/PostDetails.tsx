import { Button, Card, CardContent, CardDescription, CardHeader, CardMeta, Icon } from "semantic-ui-react";
import { Post } from "../models/post";

interface Props {
    post: Post;
    cancelSelectPost: () => void;
    handleFormOpen: (id: string) => void;
}

export default function PostDetails({post, cancelSelectPost, handleFormOpen}: Props) {
    return (
        <Card fluid>
            {/* <Image src='/images/avatar/large/matthew.png' wrapped ui={false} /> */}
            <CardContent>
            <CardHeader>{post.title}</CardHeader>
            <CardMeta>
                <span className='date'>
                    {/* Showing date in a more user friendly format */}
                    {new Date(post.createdDate).toLocaleDateString('en-NZ')}
                    
                    {/* {post.createdDate} */}
                </span>
            </CardMeta>
            <CardDescription>
                {post.body}
            </CardDescription>
            </CardContent>
            <CardContent extra>
            <a>
                <Icon name='desktop' />
                {post.tag}
                
                {/* Edit and cancel buttons */}
                <Button.Group widths="2">
                    <Button onClick={() => handleFormOpen(post.id)} basic color="blue" content="Edit"/>
                    <Button onClick={cancelSelectPost} basic color="grey" content="Cancel"/>
                </Button.Group>
            </a>
            </CardContent>
        </Card>
    )
}