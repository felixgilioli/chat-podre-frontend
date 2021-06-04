import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Landing from './pages/landing';
import Chat from './pages/chat';

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Landing}/>
      <Route path="/chat/:workspace/:name" component={Chat}/>
    </BrowserRouter>
  )
}

export default Routes;
