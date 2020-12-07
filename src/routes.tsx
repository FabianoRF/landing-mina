import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Landing from './pages/Landing';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" component={Landing} exact />
    </Switch>
  )
}

export default Routes;