import { Button, Menu } from "semantic-ui-react";

interface Props {
    // No parameter as its creating a new post
    formOpen: () => void;
}

export default function NavBar({formOpen}: Props) {
    return (
        <Menu inverted fixed="top">
            <Menu.Item header>
                Posts
            </Menu.Item>
            <Menu.Item name="Posts"/>
            <Menu.Item>
                <Button onClick={formOpen} positive content="Create Post"/>
            </Menu.Item>
        </Menu>
    )
}