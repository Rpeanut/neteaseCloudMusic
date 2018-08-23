import { QUERY_USERINFO } from '../constants/actionTypes';

const initialState = {
  userInfo: {},
};
const common = (state = initialState, { type, payload }) => {
  switch (type) {
    case `${QUERY_USERINFO}_SUCCESS`:
      return { ...state, userInfo: payload };
    default:
      return state;
  }
};
export default common;
