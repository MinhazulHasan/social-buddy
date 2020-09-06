import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import MainBody from './components/MainBody/MainBody';
import SpecificPost from './components/SpecificPost/SpecificPost';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <Router>
      <Switch>

        <Route path="/post/:postId">
          <SpecificPost />
        </Route>

        <Route path="/main">
          <MainBody />
        </Route>

        <Route path="/home">
          <Home />
        </Route>

        <Route exact path="/">
          <Home />
        </Route>

        <Route path="*">
          <NotFound />
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
