import { QUERY_USER_PLAYLIST } from '../constants/actionTypes';
import { USER_PLAYLIST } from '../api';
import { uid } from '../constants/account';
// 获取 登录用户歌单
export const queryUserPlayList = () => ({
  type: QUERY_USER_PLAYLIST,
  payload: {
    url: `${USER_PLAYLIST}${uid}`,
  },
});
