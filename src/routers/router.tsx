import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import routes from './routes';
import BasicLayout from '../layouts/BasicLayout';

class Router extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
            {routes.map(v => (
              <Route path={v.path} key={v.path}>
                <BasicLayout>
                  {v.component().default}
                </BasicLayout>
              </Route>
            ))}
          </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;
