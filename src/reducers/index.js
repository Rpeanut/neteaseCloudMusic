import { combineReducers } from 'redux';
import nav from './nav';
import common from './common';
import discovermusic from './discovermusic';
import mymusic from './mymusic';

export default combineReducers({
  nav,
  common,
  discovermusic,
  mymusic,
});
