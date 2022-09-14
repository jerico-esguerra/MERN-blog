import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import PostDetails from './components/PostDetails/PostDetails';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';
import SavedPosts from './components/SavedPosts/SavedPosts';
import {GoogleOAuthProvider} from '@react-oauth/google';

const App = () => {
  const user = JSON.parse(localStorage.getItem('profile'));

  return (
    <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
    <BrowserRouter>
      <Container maxWidth="xl">
        <Navbar />
        <Switch>
          <Route path="/" exact component={() => <Redirect to="/posts" />} />
          <Route path="/posts" exact component={Home} />
          <Route path="/posts/search" exact component={Home} />
          <Route path="/posts/:id" exact component={PostDetails} />
          <Route path="/auth" exact component={Auth} />
          <Route path="/savedPosts" exact component={SavedPosts} />
          <Route path="/savedPosts" exact component={() => (!user ? <Auth /> : <Redirect to="/savedPosts" />)} />
        </Switch>
      </Container>
    </BrowserRouter>
    </GoogleOAuthProvider>
  );
};

export default App;
