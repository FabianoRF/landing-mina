import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import Confirmation from './pages/Confirmation';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" component={Landing} exact />
      <Route path="/confirmation" component={Confirmation} exact />
    </Switch>
  );
};

export default Routes;
