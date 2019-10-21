import React from 'react';
import { Card, Form } from 'semantic-ui-react';


const GCash: React.FC = () => {
  return (
    <Card fluid>
      <Card.Content header>Transaction Details (GCash)</Card.Content>
      <Card.Content>
        <Form>
          <Form.Group widths='equal'>
            <Form.Input fluid label='GCash number' placeholder='GCash number' />
            <Form.Input fluid label='Amount paid' placeholder='Amount paid' />
          </Form.Group>
          <Form.Input fluid label='Transaction ID' placeholder='Transaction ID' />
          <Form.Button primary floated='right' content='Cash In' />
        </Form>
      </Card.Content>
    </Card>
  );
}


export default GCash;
