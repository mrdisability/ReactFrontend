import { Button, Form, Segment } from "semantic-ui-react";
import { Post } from "../models/post";
import { ChangeEvent, useState } from "react";

interface Props {
    post: Post | undefined;
    handleFormClose: () => void;
    handleCreateOrEditPost: (post: Post) => void;
}

export default function PostForm({post: selectedPost, handleFormClose, handleCreateOrEditPost}: Props) {

    // Checing if post exists or not
    const initialState = selectedPost ?? {
        id: '',
        title: '',
        body: '',
        createdDate: '',
        tag: ''
    }

    const [post, setPost] = useState(initialState);

    function handleSubmit() {
        // console.log(post);

        handleCreateOrEditPost(post)
    }

    function handleInputChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const {name, value} = event.target;
        setPost({...post, [name]: value});
    }

    // Function for text area
    // function handleTextAreaChange(event: ChangeEvent<HTMLTextAreaElement>) {
    //     const {name, value} = event.target;
    //     setPost({...post, [name]: value});
    // }

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
                <Button onClick={handleFormClose} floated="right" type="button" content="Cancel"/>
            </Form>
        </Segment>
    )
}