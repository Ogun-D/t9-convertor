import { combineReducers } from 'redux';
import input from './inputReducer';
import conversion from './conversionReducer';

export default combineReducers({
  conversion,
  input
});
