import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import components from './components/reducer';
import scenes from './scenes/reducer';

export default combineReducers({
  components,
  scenes,
  routing,
});
