import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

import menu from './menu';

export default combineReducers({
  menu,
  routing,
});
