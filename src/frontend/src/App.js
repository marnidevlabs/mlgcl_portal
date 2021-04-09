import "./modules/assets/scss/index.scss";

import { Router as ReactRouter, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import routes from "./route/routes";
import Private from "./route/Private";
import Public from "./route/Public";

function App() {
  return (
    <ReactRouter history={createBrowserHistory()}>
      <Switch>
        {routes.map((route, i) => {
          return route.auth ? (
            <Private key={i} exact {...route} />
          ) : (
            <Public key={i} exact {...route} />
          );
        })}
      </Switch>
    </ReactRouter>
  );
}

export default App;
