import { Button, Form, Segment } from "semantic-ui-react";
import { Post } from "../models/post";
import { ChangeEvent, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

interface Props {
    post: Post | undefined;
    handleFormClose: () => void;
    createPost: (post: Post) => void;
}

export default function CreatePostForm({post: selectedPost, handleFormClose, createPost}: Props) {

    const date = new Date();
    let createdDate = date.toString();

    // Checing if post exists or not
    const initialState = selectedPost ?? {
        id: uuidv4(),
        title: '',
        body: '',
        createdDate: createdDate,
        tag: ''
    }

    const [post, setPost] = useState(initialState);

    function handleSubmit() {
        console.log(post);

        createPost(post)
    }

    function handleInputChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const {name, value} = event.target;
        setPost({...post, [name]: value});
    }

    return (
        <Segment clearing>
            <Form onSubmit={handleSubmit} autoComplete="off">
                <Form.Input placeholder="Title" name="title" value={post.title} 
                    onChange={handleInputChange}/>

                <Form.TextArea placeholder="Body"
                    name="body" value={post.body} onChange={handleInputChange}/>

                <Form.Input placeholder="Tag"
                    name="tag" value={post.tag} onChange={handleInputChange}/>
                
                {/* Input for date not needed, will generate with date now */}
                <Button floated="right" positive type="submit" content="Submit"/>
                {/* <Button onClick={handleFormClose} floated="right" type="button" content="Cancel"/> */}
            </Form>
        </Segment>
    )
}