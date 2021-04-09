import React, { lazy, Suspense } from "react";
import { Redirect, Route } from "react-router-dom";
import Loader from "../modules/layouts/Loader";
import Minimal from "../modules/layouts/Minimal";
import { isAuth } from "../utils/helpers";

function Public(props) {
  const { component, layout, ...rest } = props;
  const renderLoader = Loader;

  const Layout =
    (layout && lazy(() => import(`../modules/layouts/${layout}`))) || Minimal;
  const ComponentUI = lazy(() => import(`../${component}`));

  if (isAuth()) {
    return <Route {...rest} render={() => <Redirect to="dashboard" />} />;
  }

  return (
    <Route
      {...rest}
      render={(props) => (
        <Suspense fallback={renderLoader()}>
          <Layout>
            <ComponentUI {...props} />
          </Layout>
        </Suspense>
      )}
    />
  );
}

export default Public;
