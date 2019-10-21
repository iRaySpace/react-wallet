import React from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';

import { Wallet, CashIn, CashOut, Transfer } from 'domains';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/wallet" name="Wallet" render={() => <Wallet />} />
        <Route exact path="/cash-in" name="Cash In" render={() => <CashIn />} />
        <Route exact path="/cash-out" name="Cash Out" render={() => <CashOut />} />
        <Route exact path="/transfer" name="Transfer" render={() => <Transfer />} />
        <Redirect from="/" to="wallet" />
      </Switch>
    </HashRouter>
  );
}

export default App;
