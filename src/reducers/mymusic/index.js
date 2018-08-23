import { QUERY_USER_PLAYLIST } from '../../constants/actionTypes';
import { uid } from '../../constants/account';

const initialState = {
  createPlaylist: [],
  collectPlaylist: [],
};
const mymusic = (state = initialState, { type, payload }) => {
  switch (type) {
    case `${QUERY_USER_PLAYLIST}_SUCCESS`:
      const createPlaylist = payload.playlist.filter(item => item.userId === uid);
      const collectPlaylist = payload.playlist.filter(item => item.userId !== uid);
      return { ...state, createPlaylist, collectPlaylist };
    default:
      return state;
  }
};
export default mymusic;
