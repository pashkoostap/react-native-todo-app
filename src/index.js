import React from "react";
import { AppRegistry } from "react-native";
import { Provider } from "react-redux";

import RootNavigator from "./containers/navigation/RootNavigator";

import store from "./store";

const appWrapper = () => (
  <Provider store={store}>
    <RootNavigator />
  </Provider>
);

AppRegistry.registerComponent("reactnativetodoapp", () => appWrapper);
