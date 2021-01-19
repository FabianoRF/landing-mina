import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import Confirmation from './pages/Confirmation';
import Updates from './pages/Updates';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" component={Landing} exact />
      <Route path="/confirmation" component={Confirmation} />
      <Route path="/updates" component={Updates} />
    </Switch>
  );
};

export default Routes;
