import React from 'react';
import { Container, Header, Card, Grid } from 'semantic-ui-react';

import { GCash } from './components';
import { withDefaultLayout } from 'layouts';

const CashIn: React.FC = () => {
  return (
    <Container>
      <Header
        as='h1'
        textAlign='center'
      >
        How would you like to Cash-In?
      </Header>
      <Card.Group centered>
        <Card
          href='#gcash'
          header='GCash'
          description='Instant after payment'
        />
        <Card
          href='#palawan'
          header='Palawan Express'
          description='Within 24 hours after payment'
        />
      </Card.Group>
      <Header textAlign='center'>
        Enter Payment Details
      </Header>
      <Grid centered>
        <Grid.Column width={7}>
          <GCash />
        </Grid.Column>
      </Grid>
    </Container>
  );
}

export default withDefaultLayout(CashIn);
