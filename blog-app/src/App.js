import React from 'react';
import './App.scss';
import { Switch, Route, Link } from 'react-router-dom';
import Layout from './hoc/Layout';

import Posts from './containers/Posts';
import ViewPost from './containers/ViewPost';

function App() {
  return (
    <Layout>
      <header>
        <Link className='link-color' to='/Latest_Posts'>
          Latest Posts
        </Link>
      </header>
      <Switch>
        <Route exact path='/Latest_Posts' component={Posts} />
        <Route path='/View_Post/posts/:postId' component={ViewPost} />
      </Switch>
    </Layout>
  );
}

export default App;
