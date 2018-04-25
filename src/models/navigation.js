export const getParamsFromNavigationState = (navigation, key = "") => {
  const params = (navigation.state && navigation.state.params) || {};

  return (params && params[key]) || {};
};
