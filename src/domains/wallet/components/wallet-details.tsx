import React from 'react';
import { Card, Icon } from 'semantic-ui-react'


const WalletDetails: React.FC = () => {
  return (
    <Card fluid>
      <Card.Content header='Wallet' />
      <Card.Content>0 Perlas</Card.Content>
      <Card.Content>0 Tickets</Card.Content>
      <Card.Content extra>
        <a>
          <Icon name='currency' />
          Cash In
        </a>
      </Card.Content>
    </Card>
  );
}

export default WalletDetails;