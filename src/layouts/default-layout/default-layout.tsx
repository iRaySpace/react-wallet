import React from 'react';
import { Menu, Container, Dropdown } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const DefaultLayout: React.FC = (props) => {
  return (
    <>
      <Menu fluid compact inverted color='blue'>
        <Container>
          <Menu.Item header>
            <Link to="/">Wallet App</Link>
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
      <Menu
        fluid
        compact
        borderless
        widths={4}
        size='huge'
      >
        <Container>
          <Menu.Item>
            <Link to='/'>Wallet</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to='/cash-in'>Cash In</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to='/cash-out'>Cash Out</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to='/transfer'>Transfer</Link>
          </Menu.Item>
        </Container>
      </Menu>
      {props.children}
    </>
  );
}

export default DefaultLayout;
