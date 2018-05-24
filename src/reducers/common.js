const common = (state = {}, { type, payload }) => {
  switch (type) {
    case 'todo':
      return state;
    default:
      console.log(`tyee: ${type}`);
      return state;
  }
};
export default common;
