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
            {routes.map(({ path, component: Component }) => (
              <Route path={path} key={path}>
                <BasicLayout>
                  <React.Suspense fallback={null}>
                    <Component />
                  </React.Suspense>
                </BasicLayout>
              </Route>
            ))}
          </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;
 