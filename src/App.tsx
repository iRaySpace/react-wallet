import React from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';

import { Wallet, CashIn, CashOut, Transfer } from 'domains';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/wallet" name="Wallet" component={Wallet} />
        <Route path="/cash-in" name="Cash In" component={CashIn} />
        <Route path="/cash-out" name="Cash Out" component={CashOut} />
        <Route path="/transfer" name="Transfer" component={Transfer} />
        <Redirect from="/" to="wallet" />
      </Switch>
    </HashRouter>
  );
}

export default App;
