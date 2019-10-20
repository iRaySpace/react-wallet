import React from 'react';
import { Header, Card } from 'semantic-ui-react';


const TransactionDetails: React.FC = () => {
  return (
    <>
      <Header size='large' color='grey'>Your transaction details</Header>
      <Card fluid>
        <Card.Content header='History' />
        <Card.Content>No transactions yet.</Card.Content>
      </Card>
    </>
  );
}

export default TransactionDetails;
