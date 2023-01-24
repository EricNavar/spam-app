/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { Suspense, lazy } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
  Redirect,
} from 'react-router-dom';
import FullStory from 'react-fullstory';
const WorstWebsite = lazy(() =>
  import('./screens/WorstWebsite').then((module) => ({
    default: module.WorstWebsite,
  }))
);
const MinecraftPage = lazy(() =>
  import('./screens/MinecraftPage').then((module) => ({
    default: module.MinecraftPage,
  }))
);
const InspirePage = lazy(() =>
  import('./screens/InspirePage').then((module) => ({
    default: module.InspirePage,
  }))
);

//https://reacttraining.com/react-router/web/guides/quick-start

type ScrollToTopProps = {
  children: JSX.Element;
};

function ScrollToTop(props: ScrollToTopProps) {
  const history = useHistory();
  React.useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo({
        top: 0,
        left: 0,
      });
    });
    return unlisten;
  }, [history]);

  return <React.Fragment>{props.children}</React.Fragment>;
}

function Root(): JSX.Element {
  return (
    <>
      <FullStory org={process.env.REACT_APP_ORG_ID!} />
      <Router>
        <ScrollToTop>
          <Switch>
            <Route path="/">
              <Suspense fallback={<div />}>
                <WorstWebsite />
              </Suspense>
            </Route>
            <Route path="/minecraft">
              <MinecraftPage />
            </Route>
            <Route path="*">
              <Redirect to="/" />
            </Route>
            <Route path="/inspire">
              <Suspense fallback={<div />}>
                <InspirePage />
              </Suspense>
            </Route>
          </Switch>
        </ScrollToTop>
      </Router>
    </>
  );
}
//citation: https://stackoverflow.com/questions/36904185/react-router-scroll-to-top-on-every-transition

export { Root };
