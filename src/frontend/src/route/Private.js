import React, { lazy, Suspense } from "react";
import { Redirect, Route } from "react-router-dom";
import Header from "../modules/layouts/Header";
import Loader from "../modules/layouts/Loader";
import { isAuth } from "../utils/helpers";

function Private(props) {
  const { component, ...rest } = props;

  const ComponentUI = lazy(() => import(`../${component}`));
  const renderLoader = Loader;

  if (!isAuth()) {
    return <Route {...rest} render={() => <Redirect to="/" />} />;
  }

  return (
    <Route
      {...rest}
      render={(props) => (
        <Suspense fallback={renderLoader()}>
          <Header pathName={rest.path_name}>
            <ComponentUI {...props} />
          </Header>
        </Suspense>
      )}
    />
  );
}

export default Private;
