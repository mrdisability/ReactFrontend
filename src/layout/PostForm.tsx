import { Button, Form, Segment } from "semantic-ui-react";

export default function PostForm() {
    return (
        <Segment clearing>
            <Form>
                <Form.Input placeholder="Title"/>
                <Form.TextArea placeholder="Body"/>
                <Form.Input placeholder="Tag"/>
                <Button floated="right" positive type="submit" content="Submit"/>
                <Button floated="right" type="button" content="Cancel"/>
            </Form>
        </Segment>
    )
}