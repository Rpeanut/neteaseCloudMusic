import AppNavigator from '../routes';

const nav = (state, action) => {
  const newState = AppNavigator.router.getStateForAction(action, state);
  // console.log(`newState: ${JSON.stringify(newState)}`);
  return newState || state;
};
export default nav;
