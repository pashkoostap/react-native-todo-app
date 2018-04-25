export const getParamsFromNavigationState = (navigation, key) => {
  const params = navigation.state.params;

  return (params && params[key]) || {};
};
