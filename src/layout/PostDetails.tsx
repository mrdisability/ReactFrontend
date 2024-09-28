import { Card, CardContent, CardDescription, CardHeader, CardMeta, Icon } from "semantic-ui-react";
import { Post } from "../models/post";

interface Props {
    post: Post;
}

export default function PostDetails({post}: Props) {
    return (
        <Card>
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
            </a>
            </CardContent>
        </Card>
    )
}