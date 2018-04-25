export const getParamsFromNavigationState = (navigation, key) => {
  const params =
    (navigation && navigation.state && navigation.state.params) || {};

  return (params && params[key]) || {};
};
