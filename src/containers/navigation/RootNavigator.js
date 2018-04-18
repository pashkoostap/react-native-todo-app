import React from "react";
import { addNavigationHelpers } from "react-navigation";
import { createReduxBoundAddListener } from "react-navigation-redux-helpers";
import { connect } from "react-redux";

import { AppNavigation } from "./AppNavigation";

const RootWithNavState = ({ dispatch, nav }) => {
  const addListener = createReduxBoundAddListener("root");
  const navigationHelpers = addNavigationHelpers({
    dispatch,
    state: nav,
    addListener
  });

  return <AppNavigation navigation={navigationHelpers} />;
};

const mapStateToProps = state => ({
  nav: state.nav
});

export default connect(mapStateToProps)(RootWithNavState);
