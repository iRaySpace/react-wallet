import React from 'react';
import { Container, Header, Grid } from 'semantic-ui-react';

import { SendMoney } from './components';
import { withDefaultLayout } from 'layouts';

const TransferComponent: React.FC = () => {
  return (
    <Container>
      <Header as='h1' textAlign='center'>Transfer</Header>
      <Grid centered>
        <Grid.Column width={7}>
          <SendMoney />
        </Grid.Column>
      </Grid>
    </Container>
  );
}

export default withDefaultLayout(TransferComponent);