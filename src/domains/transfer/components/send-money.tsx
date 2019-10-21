import React from 'react';
import { Card, Form } from 'semantic-ui-react';


const SendMoney: React.FC = () => {
  return (
    <Card fluid>
      <Card.Content>
        <Card.Header>Send Money</Card.Header>
        <Card.Meta>Share your blessings</Card.Meta>
      </Card.Content>
      <Card.Content>
        <Form>
          <Form.Group widths='equal'>
            <Form.Input fluid label='Mobile number' placeholder='Mobile number' />
            <Form.Input fluid label='Amount to send' placeholder='Amount to send' />
          </Form.Group>
          <Form.Button primary floated='right' content='Transfer' />
        </Form>
      </Card.Content>
    </Card>
  )
}


export default SendMoney;
