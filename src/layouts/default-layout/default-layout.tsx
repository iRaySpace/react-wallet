import React from 'react';
import { Menu, Container, Dropdown } from 'semantic-ui-react';

const DefaultLayout: React.FC = (props) => {
  return (
    <>
      <Menu inverted color='blue'>
        <Container>
          <Menu.Item as='a' header>
            Wallet App
          </Menu.Item>
          <Menu.Menu position='right'>
            <Dropdown item pointing text='Administrator'>
              <Dropdown.Menu>
                <Dropdown.Item>Settings</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item>Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Menu>
        </Container>
      </Menu>
      {props.children}
    </>
  );
}

export default DefaultLayout;
