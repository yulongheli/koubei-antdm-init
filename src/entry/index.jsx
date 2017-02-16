import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import userRoutes from '../component/user/routes';
import shopRoutes from '../component/shop/routes';


const RouteArray = userRoutes.concat(shopRoutes);

const RouteCollection = RouteArray.map((props, index) => <Route {...props} key={index} />);

ReactDOM.render(<div>
  <Router history={hashHistory}>
    {RouteCollection}
  </Router>
</div>, document.getElementById('react-content'));
