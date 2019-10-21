import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

import TransferComponent from './transfer.component';


const TransferSwitch: React.FC = () => {
  const { path } = useRouteMatch() as any;
  return (
    <Switch>
      <Route exact path={path} component={TransferComponent} />
      <Route path={`${path}/success`}>
        Success
      </Route>
    </Switch>
  )
}


export default TransferSwitch;