import React from 'react';
import { Card } from 'semantic-ui-react';

import SendMoneyForm from './send-money.form';


const SendMoney: React.FC = () => {
  return (
    <Card fluid>
      <Card.Content>
        <Card.Header>Send Money</Card.Header>
        <Card.Meta>Share your blessings</Card.Meta>
      </Card.Content>
      <Card.Content>
        <SendMoneyForm />
      </Card.Content>
    </Card>
  )
}


export default SendMoney;
