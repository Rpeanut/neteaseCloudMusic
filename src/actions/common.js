import { QUERY_USERINFO } from '../constants/actionTypes';
import { USER_INFO } from '../api';
import { uid } from '../constants/account';
// 获取 登录用户信息
export const queryUserInfo = () => ({
  type: QUERY_USERINFO,
  payload: {
    url: `${USER_INFO}${uid}`,
  },
});
