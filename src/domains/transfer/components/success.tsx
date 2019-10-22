import React from 'react';
import { Card, Header, Icon, Button } from 'semantic-ui-react';

import { CardContentTwoCol } from 'shared-components';

const Success: React.FC = () => {
  return (
    <>
      <Card fluid>
        <Card.Content textAlign='center'>
          <Header color='green'>Payment Successful!</Header>
          <Icon name='check circle outline' color='green' size='huge' />
        </Card.Content>
        <CardContentTwoCol
          left='Mobile' 
          right='0905 3720 439'
          rightProps={{ textAlign: 'right' }}
        />
        <CardContentTwoCol
          left='Currency'
          right='Perlas'
          rightProps={{ textAlign: 'right' }}
        />
        <CardContentTwoCol
          left='Amount transferred'
          right='100.00'
          rightProps={{ textAlign: 'right' }}
        />
      </Card>
      <Button primary fluid content='Home' />
    </>
  );
}

export default Success;
