import { Button, Menu } from "semantic-ui-react";

export default function NavBar() {
    return (
        <Menu inverted fixed="top">
            <Menu.Item header>
                Posts
            </Menu.Item>
            <Menu.Item name="Posts"/>
            <Menu.Item>
                <Button positive content="Create Post"/>
            </Menu.Item>
        </Menu>
    )
}