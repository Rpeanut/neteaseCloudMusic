import {
  QUERY_BANNER,
  QUERY_PERSONALIZED,
  QUERY_PERSONALIZED_PRIVATECONTENT,
  QUERY_PERSONALIZED_NEWSONG,
  QUERY_PERSONALIZED_MV,
} from '../constants/actionTypes';

import {
  PERSONALIZED,
  PERSONALIZED_PRIVATECONTENT,
  PERSONALIZED_NEWSONG,
  BANNER,
  PERSONALIZED_MV,
} from '../api';

// 获取 banner
const queryBanner = () => ({
  type: QUERY_BANNER,
  payload: {
    url: BANNER,
  },
});
// 获取 推荐歌单
const queryPersonalized = () => ({
  type: QUERY_PERSONALIZED,
  payload: {
    url: PERSONALIZED,
  },
});
//  获取 独家放送
const queryPersonalizedPrivatecontent = () => ({
  type: QUERY_PERSONALIZED_PRIVATECONTENT,
  payload: {
    url: PERSONALIZED_PRIVATECONTENT,
  },
});
// 获取 最新音乐
const queryPersonalizedNewSong = () => ({
  type: QUERY_PERSONALIZED_NEWSONG,
  payload: {
    url: PERSONALIZED_NEWSONG,
  },
});
// 获取 推荐 mv
const queryPersonalizedMv = () => ({
  type: QUERY_PERSONALIZED_MV,
  payload: {
    url: PERSONALIZED_MV,
  },
});
// 精选专栏

// 主播电台

// 会员专区

export const musicSceneAction = {
  queryBanner,
  queryPersonalized,
  queryPersonalizedPrivatecontent,
  queryPersonalizedNewSong,
  queryPersonalizedMv,
};
