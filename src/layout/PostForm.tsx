import { Button, Form, Segment } from "semantic-ui-react";

interface Props {
    closeForm: () => void;
}

export default function PostForm({closeForm}: Props) {
    return (
        <Segment clearing>
            <Form>
                <Form.Input placeholder="Title"/>
                <Form.TextArea placeholder="Body"/>
                <Form.Input placeholder="Tag"/>
                <Button floated="right" positive type="submit" content="Submit"/>
                <Button onClick={closeForm} floated="right" type="button" content="Cancel"/>
            </Form>
        </Segment>
    )
}