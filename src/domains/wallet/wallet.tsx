import React from 'react';
import { Container, Grid } from 'semantic-ui-react';

import { withDefaultLayout } from 'layouts';
import { WalletDetails, TransactionDetails } from './components';


const Wallet: React.FC = () => {
  return (
    <Container>
      <Grid>
        <Grid.Column width={4}>
          <WalletDetails />          
        </Grid.Column>
        <Grid.Column width={12}>
          <TransactionDetails />
        </Grid.Column>
      </Grid>
    </Container>
  );
}


export default withDefaultLayout(Wallet);
