import { Button, Form, Segment } from "semantic-ui-react";

interface Props {
    handleFormClose: () => void;
}

export default function PostForm({handleFormClose}: Props) {
    return (
        <Segment clearing>
            <Form>
                <Form.Input placeholder="Title"/>
                <Form.TextArea placeholder="Body"/>
                <Form.Input placeholder="Tag"/>
                <Button floated="right" positive type="submit" content="Submit"/>
                <Button onClick={handleFormClose} floated="right" type="button" content="Cancel"/>
            </Form>
        </Segment>
    )
}