import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import components from './components/reducer';

export default combineReducers({
  components,
  routing,
});
