import { combineReducers } from 'redux';
import {
  QUERY_BANNER,
  QUERY_PERSONALIZED,
  QUERY_PERSONALIZED_PRIVATECONTENT,
  QUERY_PERSONALIZED_NEWSONG,
  QUERY_PERSONALIZED_MV,
} from '../../constants/actionTypes';

const initialState = {
  musicModel: {
    banners: [],
    personalized: [],
    personalizedPrivatecontent: [],
    personalizedNewSong: [],
    personalizedMv: [],
  },
};
const musicModel = (state = initialState.musicModel, { type, payload }) => {
  switch (type) {
    case `${QUERY_BANNER}_SUCCESS`:
      return { ...state, banners: payload.banners };
    case `${QUERY_PERSONALIZED}_SUCCESS`:
      const personalized = payload.result.map(v => ({
        ...v,
        title: v.name,
        picUrl: `${v.picUrl}?param=140y140`,
      }));
      return { ...state, personalized };
    case `${QUERY_PERSONALIZED_PRIVATECONTENT}_SUCCESS`:
      const personalizedPrivatecontent = payload.result.map((v, i) => ({
        ...v,
        title: v.name,
        width: i === 2 ? 1 : 0.49,
      }));
      return { ...state, personalizedPrivatecontent };
    case `${QUERY_PERSONALIZED_NEWSONG}_SUCCESS`:
      const personalizedNewSong = payload.result
        .filter((v, i) => i < 6)
        .map(v => ({
          ...v,
          title: v.name,
          subTitle: v.song.artists.map(a => a.name).join(';'),
          picUrl: `${v.song.album.picUrl}?param=140y140`,
        }));
      return { ...state, personalizedNewSong };
    case `${QUERY_PERSONALIZED_MV}_SUCCESS`:
      const personalizedMv = payload.result.map(v => ({
        ...v,
        title: v.name,
        subTitle: v.artistName,
        picUrl: `${v.picUrl}?param=250y140`,
        width: 0.49,
      }));
      return { ...state, personalizedMv };
    default:
      return state;
  }
};
const videoModal = (state = {}, { type, payload }) => {
  switch (type) {
    case 'todo':
      return state;
    default:
      console.log(`tyee: ${type}`);
      return state;
  }
};

const radioModal = (state = {}, { type, payload }) => {
  switch (type) {
    case 'todo':
      return state;
    default:
      console.log(`tyee: ${type}`);
      return state;
  }
};

export default combineReducers({
  musicModel,
  videoModal,
  radioModal,
});
