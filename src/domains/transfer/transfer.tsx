import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import { Container, Header, Grid } from 'semantic-ui-react';

import { SendMoney } from './components';
import { withDefaultLayout } from 'layouts';


const Transfer: React.FC = () => {
  const { path } = useRouteMatch() as any;
  return (
    <>
      <Container>
        <Header as='h1' textAlign='center'>Transfer</Header>
        <Grid centered>
          <Grid.Column width={7}>
            <SendMoney />
          </Grid.Column>
        </Grid>
      </Container>
      <Switch>
        <Route exact path={path}>
          Exact
        </Route>
        <Route path={`${path}/success`}>
          Successfully
        </Route>
      </Switch>
    </>
  );
}


export default withDefaultLayout(Transfer);
